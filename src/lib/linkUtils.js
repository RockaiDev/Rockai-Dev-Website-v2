/**
 * Utility functions for handling links in chatbot responses
 */

/**
 * Detects product links in text and converts them to clickable links
 * @param {string} text - The text to process
 * @returns {Array} Array of objects with text segments and link information
 */
export function parseTextWithLinks(text) {
  // Regular expression to match product links
  const productLinkRegex = /(\/products\/(pos|propai|hodurai))/gi;
  
  const segments = [];
  let lastIndex = 0;
  let match;

  while ((match = productLinkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      segments.push({
        type: 'text',
        content: text.slice(lastIndex, match.index)
      });
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
    segments.push({
      type: 'text',
      content: text.slice(lastIndex)
    });
  }

  // If no links found, return the original text as a single text segment
  if (segments.length === 0) {
    segments.push({
      type: 'text',
      content: text
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
