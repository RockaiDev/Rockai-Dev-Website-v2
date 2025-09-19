import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    const contactName = formData.get('contactName');
    const email = formData.get('email');
    const organizationName = formData.get('organizationName');
    const website = formData.get('website');
    const partnershipType = formData.get('partnershipType');
    const industry = formData.get('industry');
    const proposal = formData.get('proposal');
    const motivation = formData.get('motivation');
    const documents = formData.get('documents');

    // Debug file information
    if (documents) {
      console.log('Documents file info:', {
        name: documents.name,
        size: documents.size,
        type: documents.type
      });
    }

    // Validate required fields
    if (!contactName || !email || !organizationName || !partnershipType || !proposal) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate file size (5MB limit)
    if (documents && documents.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'Document file size must be less than 5MB' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'rockaidev@gmail.com', // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD // Your Gmail app password
      }
    });

    // Email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #0e112d; color: white; padding: 20px; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">New Partnership Application - Rockai Dev</h1>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #0e112d; margin-top: 0;">Partnership Application Details</h2>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
            <div>
              <h3 style="color: #0369a1; margin-bottom: 5px;">Contact Name:</h3>
              <p style="margin: 0; padding: 8px; background-color: #f8fafc; border-radius: 3px;">${contactName}</p>
            </div>
            <div>
              <h3 style="color: #0369a1; margin-bottom: 5px;">Email:</h3>
              <p style="margin: 0; padding: 8px; background-color: #f8fafc; border-radius: 3px;">${email}</p>
            </div>
          </div>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
            <div>
              <h3 style="color: #0369a1; margin-bottom: 5px;">Organization Name:</h3>
              <p style="margin: 0; padding: 8px; background-color: #f8fafc; border-radius: 3px;">${organizationName}</p>
            </div>
            <div>
              <h3 style="color: #0369a1; margin-bottom: 5px;">Website:</h3>
              <p style="margin: 0; padding: 8px; background-color: #f8fafc; border-radius: 3px;">
                ${website ? `<a href="${website}" style="color: #0369a1; text-decoration: none;">${website}</a>` : 'Not provided'}
              </p>
            </div>
          </div>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
            <div>
              <h3 style="color: #0369a1; margin-bottom: 5px;">Partnership Type:</h3>
              <p style="margin: 0; padding: 8px; background-color: #f8fafc; border-radius: 3px;">${partnershipType}</p>
            </div>
            <div>
              <h3 style="color: #0369a1; margin-bottom: 5px;">Industry:</h3>
              <p style="margin: 0; padding: 8px; background-color: #f8fafc; border-radius: 3px;">${industry || 'Not specified'}</p>
            </div>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #0369a1; margin-bottom: 5px;">Partnership Proposal:</h3>
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px; border-left: 4px solid #0369a1;">
              <p style="margin: 0; white-space: pre-wrap;">${proposal}</p>
            </div>
          </div>
          
          ${motivation ? `
          <div style="margin-bottom: 20px;">
            <h3 style="color: #0369a1; margin-bottom: 5px;">Why Join Rockai:</h3>
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px; border-left: 4px solid #0369a1;">
              <p style="margin: 0; white-space: pre-wrap;">${motivation}</p>
            </div>
          </div>
          ` : ''}
          
          ${documents && documents.size > 0 ? `
          <div style="margin-bottom: 20px;">
            <h3 style="color: #0369a1; margin-bottom: 5px;">Supporting Documents:</h3>
            <p style="margin: 0; padding: 8px; background-color: #f0f9ff; border-radius: 3px; color: #0369a1;">
              📎 ${documents.name} (${(documents.size / 1024 / 1024).toFixed(2)} MB)
            </p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              This partnership application was submitted through the Rockai Dev website.
              <br>
              <strong>Submitted on:</strong> ${new Date().toLocaleString()}
              ${documents && documents.size > 0 ? '<br><strong>Documents attached:</strong> Yes' : ''}
            </p>
          </div>
        </div>
      </div>
    `;

    // Email options
    const mailOptions = {
      from: 'rockaidev@gmail.com',
      to: ['hassanrageh.236@gmail.com', 'laramohamed1123@gmail.com'],
      subject: `New Partnership Application: ${organizationName} - ${contactName}`,
      html: emailContent,
      replyTo: email,
      attachments: []
    };

    // Add documents attachment if provided
    if (documents && documents.size > 0) {
      try {
        const buffer = Buffer.from(await documents.arrayBuffer());
        mailOptions.attachments.push({
          filename: documents.name,
          content: buffer,
          contentType: documents.type || 'application/octet-stream'
        });
        console.log(`Documents attached: ${documents.name} (${documents.size} bytes)`);
      } catch (error) {
        console.error('Error processing documents file:', error);
        // Continue without attachment if file processing fails
      }
    }

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Partnership application submitted successfully!'
    });

  } catch (error) {
    console.error('Partnership application error:', error);
    return NextResponse.json(
      { error: 'Failed to submit partnership application. Please try again.' },
      { status: 500 }
    );
  }
}
