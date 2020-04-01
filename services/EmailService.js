const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // USE TLS
  auth: {
    user: `databank.sautiafrica@gmail.com`,
    pass: `xk[^Gv.5pDg(;5K2`
  }
});

const sendResetPasswordEmail = (user, code, url) => {
  transporter.sendMail({
    from: "Databank Sauti Africa <databank.sautiafrica@gmail.com>",
    to: `${user.email}`,
    subject: "Code Verification - NO REPLY",
    text: "For clients with plaintext support only",
    html: `<p>Hello ${user.email}, <br /> Your verifcation code to reset your password is <b>${code}</b>. <br /> Please visit <a href="${url}">Password Reset Verification Link</a> to reset your password.  </p>`
  });
};

exports.sendResetPasswordEmail = sendResetPasswordEmail;
