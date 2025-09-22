import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false, 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendOtpEmail = async (email, otp, name, appName = "Fleet App") => {
  try {
    if (!email || !otp || !name) {
      throw new Error("Missing required parameters");
    }

    const mailOptions = {
      from: `"${appName}" <${process.env.SMTP_USER || "no-reply@example.com"}>`,
      to: email,
      subject: "Account Verification OTP",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #333;">Verify Your Account</h2>
          <p>Hello ${name},</p>
          <p>Thank you for registering. To complete your account setup, please verify your email address using the OTP below:</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; font-size: 24px; font-weight: bold; text-align: center; letter-spacing: 8px; margin: 20px 0;">
            ${otp}
          </div>
          <p>If you didn't request this verification, please ignore this email.</p>
          <p style="margin-top: 30px; font-size: 12px; color: #777;">
            This is an automated message, please do not reply to this email.
          </p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending OTP email:", error);
    throw new Error("Failed to send OTP email");
  }
};

export const sendForgotPasswordEmail = async (email, resetToken, appName = "Community APP") => {
  try {
    if (!email || !resetToken) {
      throw new Error("Missing required parameters");
    }

    const resetLink = `https://www.testing.com/reset_password/${resetToken}`;

    const mailOptions = {
      from: `"${appName}" <${process.env.SMTP_USER || "no-reply@example.com"}>`,
      to: email,
      subject: "Reset Your Password",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #333;">Password Reset Request</h2>
          <p>Hello,</p>
          <p>You have requested to reset your password. Please click the button below to reset it:</p>
          <a href="${resetLink}" style="display: inline-block; background-color: #007bff; color: #fff; padding: 12px 20px; text-decoration: none; border-radius: 5px; margin: 20px 0;">Reset Password</a>
          <p>Or copy and paste this link in your browser:</p>
          <p style="word-break: break-all;">${resetLink}</p>
          <p>If you did not request a password reset, please ignore this email.</p>
          <p style="margin-top: 30px; font-size: 12px; color: #777;">
            This is an automated message, please do not reply to this email.
          </p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Forgot password email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending forgot password email:", error);
    throw new Error("Failed to send forgot password email");
  }
};
export const verifyTransporter = async () => {
  try {
    await transporter.verify();
    console.log("Server is ready to take our messages");
    return true;
  } catch (error) {
    console.error("Error verifying transporter:", error);
    return false;
  }
};


export const generateOtp = () => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit numeric string
  const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // expires in 10 minutes
  return { otp, otpExpires };
};



