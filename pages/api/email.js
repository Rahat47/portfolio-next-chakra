const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function sendEmailHandler(req, res) {
    // reject if the method is not POST
    if (req.method !== "POST") return res.status(400).send("Invalid request method")

    // check if the request body contains the required fields
    if (!req.body.email || !req.body.message || !req.body.name) return res.status(400).send("Missing required fields")

    const messages = [
        {
            to: req.body.email,
            from: 'Rayhan Rahat <djrayhan8@gmail.com>',
            templateId: process.env.SENDGRID_TEMPLATE_ID,
            dynamicTemplateData: {
                name: req.body.name,
                message: req.body.message
            }
        },
        {
            to: 'djrayhan8@gmail.com',
            from: 'Rayhan Rahat <djrayhan8@gmail.com>',
            templateId: process.env.SENDGRID_TEMPLATE_ID_PERSONAL,
            dynamicTemplateData: {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                message: req.body.message
            }
        }
    ]


    try {
        // send the email
        await sgMail.send(messages)

        // return a success message
        return res.status(200).send("Email sent successfully")
    } catch (error) {
        res.status(500).send("Error sending email")
    }



}