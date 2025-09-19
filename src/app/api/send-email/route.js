import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { contactName, phone, email, organization, subject, jobTitle, proposal } = await request.json();

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'rockaidev@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD // You'll need to set this environment variable
      }
    });

    // Email content
    const mailOptions = {
      from: 'rockaidev@gmail.com',
      to: ['hassanrageh.236@gmail.com', 'laramohamed1123@gmail.com'],
      subject: `Contact Form Submission: ${subject || 'No Subject'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 2px solid #00bcd4; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #555; margin-bottom: 15px;">Contact Information</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666; width: 30%;">Name:</td>
                  <td style="padding: 8px 0; color: #333;">${contactName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Phone:</td>
                  <td style="padding: 8px 0; color: #333;">${phone}</td>
                </tr>
                ${email ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Email:</td>
                  <td style="padding: 8px 0; color: #333;">${email}</td>
                </tr>
                ` : ''}
                ${organization ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Company/Organization:</td>
                  <td style="padding: 8px 0; color: #333;">${organization}</td>
                </tr>
                ` : ''}
                ${jobTitle ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Job Title:</td>
                  <td style="padding: 8px 0; color: #333;">${jobTitle}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Subject:</td>
                  <td style="padding: 8px 0; color: #333;">${subject || 'No Subject'}</td>
                </tr>
              </table>
            </div>

            <div style="margin: 20px 0;">
              <h3 style="color: #555; margin-bottom: 15px;">Message</h3>
              <div style="background-color: #f8f8f8; padding: 15px; border-radius: 5px; border-left: 4px solid #00bcd4;">
                <p style="margin: 0; color: #333; line-height: 1.6;">${proposal}</p>
              </div>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 12px;">
              <p>This email was sent from the Rockai Dev website contact form.</p>
              <p>Sent on: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return Response.json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ 
      success: false, 
      message: 'Failed to send email. Please try again.' 
    }, { status: 500 });
  }
}
