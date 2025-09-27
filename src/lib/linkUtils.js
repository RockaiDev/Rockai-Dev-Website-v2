/**
 * Utility functions for handling links and formatting in chatbot responses
 */

/**
 * Parses text and converts it to structured HTML elements for better readability
 * @param {string} text - The text to process
 * @returns {Array} Array of objects with text segments and formatting information
 */
export function parseTextWithLinks(text) {
  // First, handle product links
  const productLinkRegex = /(\/products\/(pos|propai|hodurai))/gi;

  const segments = [];
  let lastIndex = 0;
  let match;

  while ((match = productLinkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      const beforeText = text.slice(lastIndex, match.index);
      segments.push(...parseFormattedText(beforeText));
    }

    // Add the link
    const linkPath = match[1];
    const productName = match[2];

    segments.push({
      type: 'link',
      content: linkPath,
      productName: productName,
      displayText: getProductDisplayName(productName)
    });

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text after the last link
  if (lastIndex < text.length) {
    const remainingText = text.slice(lastIndex);
    segments.push(...parseFormattedText(remainingText));
  }

  // If no links found, parse the entire text
  if (segments.length === 0) {
    segments.push(...parseFormattedText(text));
  }

  return segments;
}

/**
 * Parses formatted text and converts it to structured elements
 * @param {string} text - The text to parse
 * @returns {Array} Array of formatted text segments
 */
function parseFormattedText(text) {
  const segments = [];

  // Clean text from markdown formatting first
  const cleanText = text.replace(/\*\*(.*?)\*\*/g, '$1');

  // Split text by line breaks to handle different formatting
  const lines = cleanText.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) {
      // Empty line - add line break
      segments.push({
        type: 'linebreak',
        content: ''
      });
      continue;
    }

    // Check for numbered lists (1., 2., etc.)
    const numberedListMatch = line.match(/^(\d+)\.\s+(.+)$/);
    if (numberedListMatch) {
      segments.push({
        type: 'numbered-item',
        number: numberedListMatch[1],
        content: numberedListMatch[2]
      });
      continue;
    }

    // Check for bullet points (-, *, •)
    const bulletMatch = line.match(/^[-*•]\s+(.+)$/);
    if (bulletMatch) {
      segments.push({
        type: 'bullet-item',
        content: bulletMatch[1]
      });
      continue;
    }

    // Check for important keywords that should be emphasized
    const importantKeywords = [
      'مهم', 'أهم', 'رئيسي', 'أساسي', 'مميز', 'متقدم', 'احترافي',
      'important', 'main', 'key', 'essential', 'advanced', 'professional',
      'PropAI', 'SUFRA', 'HodourAI', 'Rockai', 'CRM', 'POS'
    ];

    // Check if line contains important keywords
    const hasImportantKeywords = importantKeywords.some(keyword =>
      line.toLowerCase().includes(keyword.toLowerCase())
    );

    if (hasImportantKeywords) {
      segments.push({
        type: 'emphasized',
        content: line
      });
      continue;
    }

    // Check for headers (## Header or ### Header)
    const headerMatch = line.match(/^#{2,3}\s+(.+)$/);
    if (headerMatch) {
      const level = line.match(/^#+/)[0].length;
      segments.push({
        type: 'header',
        level: level,
        content: headerMatch[1]
      });
      continue;
    }

    // Regular text
    segments.push({
      type: 'text',
      content: line
    });
  }

  return segments;
}

/**
 * Gets the display name for a product
 * @param {string} productName - The product name from the URL
 * @returns {string} The display name for the product
 */
function getProductDisplayName(productName) {
  const productNames = {
    'pos': 'SUFRA POS',
    'propai': 'PropAI CRM',
    'hodurai': 'HodourAI'
  };

  return productNames[productName.toLowerCase()] || productName;
}

/**
 * Checks if a text contains any product links
 * @param {string} text - The text to check
 * @returns {boolean} True if the text contains product links
 */
export function hasProductLinks(text) {
  const productLinkRegex = /(\/products\/(pos|propai|hodurai))/gi;
  return productLinkRegex.test(text);
}
