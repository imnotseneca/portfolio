const nodemailer = require('nodemailer');
require('dotenv').config({path: './config/.env'});


module.exports = {
    getIndex: (req,res)=>{
        res.render('contact.ejs')
    },
    getFormData: (req,res) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'brunocorraodev@gmail.com',
                pass: process.env.GMAILPW
            }
        })
        const mailOption = {
            from: req.body.email,
            to: 'brunocorraodev@gmail.com',
            subject: `Message from ${req.body.email}: [${req.body.subject}]`,
            text: req.body.message,
        }

        transporter.sendMail(mailOption, (error,info) => {
            if(error) {
                res.send('error')
            } else {
                res.send('success')
            }
        })
    },
    getSuccess: (req, res) => {
        res.render('success.ejs')
    }
}