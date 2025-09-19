import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const experience = formData.get('experience');
    const portfolio = formData.get('portfolio');
    const coverLetter = formData.get('coverLetter');
    const jobTitle = formData.get('jobTitle');
    const resume = formData.get('resume');
    
    // Additional fields from general application form
    const position = formData.get('position');
    const availability = formData.get('availability');
    const skills = formData.get('skills');
    const motivation = formData.get('motivation');

    // Debug file information
    if (resume) {
      console.log('Resume file info:', {
        name: resume.name,
        size: resume.size,
        type: resume.type
      });
    }

    // Validate required fields
    if (!fullName || !email || !phone || !jobTitle) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate file size (5MB limit)
    if (resume && resume.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'Resume file size must be less than 5MB' },
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
          <h1 style="margin: 0; font-size: 24px;">New Job Application - Rockai Dev</h1>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #0e112d; margin-top: 0;">Application Details</h2>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #0369a1; margin-bottom: 10px;">Position Applied For:</h3>
            <p style="background-color: #f0f9ff; padding: 10px; border-radius: 5px; margin: 0; font-weight: bold;">${jobTitle}</p>
          </div>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
            <div>
              <h3 style="color: #0369a1; margin-bottom: 5px;">Full Name:</h3>
              <p style="margin: 0; padding: 8px; background-color: #f8fafc; border-radius: 3px;">${fullName}</p>
            </div>
            <div>
              <h3 style="color: #0369a1; margin-bottom: 5px;">Email:</h3>
              <p style="margin: 0; padding: 8px; background-color: #f8fafc; border-radius: 3px;">${email}</p>
            </div>
          </div>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
            <div>
              <h3 style="color: #0369a1; margin-bottom: 5px;">Phone Number:</h3>
              <p style="margin: 0; padding: 8px; background-color: #f8fafc; border-radius: 3px;">${phone}</p>
            </div>
            <div>
              <h3 style="color: #0369a1; margin-bottom: 5px;">Experience:</h3>
              <p style="margin: 0; padding: 8px; background-color: #f8fafc; border-radius: 3px;">${experience || 'Not specified'}</p>
            </div>
          </div>
          
          ${position ? `
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
            <div>
              <h3 style="color: #0369a1; margin-bottom: 5px;">Position of Interest:</h3>
              <p style="margin: 0; padding: 8px; background-color: #f8fafc; border-radius: 3px;">${position}</p>
            </div>
            <div>
              <h3 style="color: #0369a1; margin-bottom: 5px;">Availability:</h3>
              <p style="margin: 0; padding: 8px; background-color: #f8fafc; border-radius: 3px;">${availability || 'Not specified'}</p>
            </div>
          </div>
          ` : ''}
          
          ${skills ? `
          <div style="margin-bottom: 20px;">
            <h3 style="color: #0369a1; margin-bottom: 5px;">Skills & Technologies:</h3>
            <p style="margin: 0; padding: 8px; background-color: #f8fafc; border-radius: 3px;">${skills}</p>
          </div>
          ` : ''}
          
          ${portfolio ? `
          <div style="margin-bottom: 20px;">
            <h3 style="color: #0369a1; margin-bottom: 5px;">Portfolio/LinkedIn:</h3>
            <p style="margin: 0; padding: 8px; background-color: #f8fafc; border-radius: 3px;">
              <a href="${portfolio}" style="color: #0369a1; text-decoration: none;">${portfolio}</a>
            </p>
          </div>
          ` : ''}
          
          ${coverLetter ? `
          <div style="margin-bottom: 20px;">
            <h3 style="color: #0369a1; margin-bottom: 5px;">Cover Letter:</h3>
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px; border-left: 4px solid #0369a1;">
              <p style="margin: 0; white-space: pre-wrap;">${coverLetter}</p>
            </div>
          </div>
          ` : ''}
          
          ${motivation ? `
          <div style="margin-bottom: 20px;">
            <h3 style="color: #0369a1; margin-bottom: 5px;">Why Join Rockai:</h3>
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px; border-left: 4px solid #0369a1;">
              <p style="margin: 0; white-space: pre-wrap;">${motivation}</p>
            </div>
          </div>
          ` : ''}
          
          ${resume && resume.size > 0 ? `
          <div style="margin-bottom: 20px;">
            <h3 style="color: #0369a1; margin-bottom: 5px;">Resume/CV:</h3>
            <p style="margin: 0; padding: 8px; background-color: #f0f9ff; border-radius: 3px; color: #0369a1;">
              📎 ${resume.name} (${(resume.size / 1024 / 1024).toFixed(2)} MB)
            </p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              This application was submitted through the Rockai Dev careers page.
              <br>
              <strong>Submitted on:</strong> ${new Date().toLocaleString()}
              ${resume && resume.size > 0 ? '<br><strong>Resume attached:</strong> Yes' : ''}
            </p>
          </div>
        </div>
      </div>
    `;

    // Email options
    const mailOptions = {
      from: 'rockaidev@gmail.com',
      to: ['hassanrageh.236@gmail.com', 'laramohamed1123@gmail.com'],
      subject: `New Job Application: ${jobTitle} - ${fullName}`,
      html: emailContent,
      replyTo: email,
      attachments: []
    };

    // Add resume attachment if provided
    if (resume && resume.size > 0) {
      try {
        const buffer = Buffer.from(await resume.arrayBuffer());
        mailOptions.attachments.push({
          filename: resume.name,
          content: buffer,
          contentType: resume.type || 'application/octet-stream'
        });
        console.log(`Resume attached: ${resume.name} (${resume.size} bytes)`);
      } catch (error) {
        console.error('Error processing resume file:', error);
        // Continue without attachment if file processing fails
      }
    }

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully!'
    });

  } catch (error) {
    console.error('Careers application error:', error);
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again.' },
      { status: 500 }
    );
  }
}
