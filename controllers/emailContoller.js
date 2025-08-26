const { transporter } = require("../utils/nodemailer");

const sendEmail = async(req,res) =>{
    try{
    const {name,email,message} =  req.body
    if(!name || !email || !message){
        return res.status(400).json({message:"Please fill all the fields"})
    }else{
        const mainOptions = {
          from: process.env.SENDER_EMAIL,
          to: "rusira42103@gmail.com",
          subject: "Portfolio Message",
          text: `
          You have a new message from your portfolio contact form.

      Name: ${name}
      Email: ${email}
      Message: ${message}
      `,
        };
        try{
        await transporter.sendMail(mainOptions);
        return res.status(200).json({message:"Email sent successfully"})
        }catch(error)
        {
            return res.status(500).json({message:"Error sending email",error:error.message})
        }
    }}catch(error)
    {
        console.log(error);
    }
}
module.exports = {sendEmail}