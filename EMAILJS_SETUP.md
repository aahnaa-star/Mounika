# EmailJS Setup Guide

Your contact form is now ready to send real emails! Follow these steps to configure EmailJS:

## 🚀 Quick Setup (5 minutes)

### 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account

### 2. Create Email Service
- Go to Email Services → Add New Service
- Choose your email provider (Gmail, Outlook, etc.)
- Connect your email account
- **Copy the Service ID**

### 3. Create Email Template
- Go to Email Templates → Create New Template
- Use this template structure:

```
Subject: New message from {{from_name}} via Portfolio

Hello,

You received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

Best regards,
EmailJS
```

- **Copy the Template ID**

### 4. Get Public Key
- Go to Integration → API Keys
- **Copy the Public Key**

### 5. Update Your Code
Open `src/sections/Contact.jsx` and replace these placeholders:

```javascript
const serviceId = 'YOUR_SERVICE_ID';     // ← Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';  // ← Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY';    // ← Replace with your Public Key
```

## 📧 How It Works

When someone fills out your contact form:
1. Form data is sent to EmailJS
2. EmailJS uses your template to format the email
3. Email is sent directly to your connected email address
4. No backend server needed!

## 🔧 Testing

After setup:
1. Fill out the contact form on your portfolio
2. Check your email (including spam folder)
3. You should receive the message within seconds

## 🎯 Benefits

- ✅ **No backend required** - Pure frontend solution
- ✅ **Free tier available** - Up to 200 emails/month
- ✅ **Professional appearance** - Real email delivery
- ✅ **Spam protection** - EmailJS handles deliverability
- ✅ **Customizable** - Edit email templates anytime

## 🚨 Important Notes

- Keep your EmailJS credentials secure
- The free plan has monthly limits
- Test thoroughly before deploying
- Monitor your email deliverability

## 🛠️ Troubleshooting

If emails don't arrive:
1. Check EmailJS dashboard for delivery status
2. Verify your Service ID, Template ID, and Public Key
3. Check spam/junk folders
4. Ensure your email service is properly connected

Need help? Visit [EmailJS Documentation](https://www.emailjs.com/docs/)
