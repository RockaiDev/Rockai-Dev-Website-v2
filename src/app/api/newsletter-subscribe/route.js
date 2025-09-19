import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return Response.json({ 
        success: false, 
        message: 'Please provide a valid email address.' 
      }, { status: 400 });
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'rockaidev@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    // Email content for newsletter subscription notification
    const mailOptions = {
      from: 'rockaidev@gmail.com',
      to: ['hassanrageh.236@gmail.com', 'laramohamed1123@gmail.com'],
      subject: 'New Newsletter Subscription - Rockai Dev',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 2px solid #00bcd4; padding-bottom: 10px;">
              🚀 New Newsletter Subscription
            </h2>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #555; margin-bottom: 15px;">Subscription Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666; width: 30%;">Email:</td>
                  <td style="padding: 8px 0; color: #333;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Subscription Date:</td>
                  <td style="padding: 8px 0; color: #333;">${new Date().toLocaleString()}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Source:</td>
                  <td style="padding: 8px 0; color: #333;">Rockai Dev Website Newsletter</td>
                </tr>
              </table>
            </div>

            <div style="margin: 20px 0; padding: 15px; background-color: #e3f2fd; border-radius: 5px; border-left: 4px solid #2196f3;">
              <h4 style="color: #1976d2; margin: 0 0 10px 0;">📧 Newsletter Subscription</h4>
              <p style="margin: 0; color: #333; line-height: 1.6;">
                Someone has subscribed to receive weekly insights on AI Trends, development tips and exclusive Rockai updates.
              </p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 12px;">
              <p>This notification was sent from the Rockai Dev website newsletter subscription form.</p>
              <p>Subscriber email: <strong>${email}</strong></p>
            </div>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return Response.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter!' 
    });

  } catch (error) {
    console.error('Error sending newsletter subscription email:', error);
    return Response.json({ 
      success: false, 
      message: 'Failed to subscribe. Please try again.' 
    }, { status: 500 });
  }
}
