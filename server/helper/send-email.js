const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);

exports.sendVerifyAcc = (userId) => {
  sgMail.send({
    to: email,
    from: "tienhuy1801@gmail.com",
    subject: "Verify account!",
    html: `
    <p>Bạn nhận được yêu cầu xác nhận tài khoản</p>
    <p>Nhấn vào <a href="http://localhost:8080/auth/verify/${userId}">link</a> để xác nhận tài khoản</p>
  `,
  });
};
exports.sendResetPass = (userId) => {
  sgMail.send({
    to: email,
    from: "tienhuy1801@gmail.com",
    subject: "Password reset!",
    html: `
        <p>Bạn nhận được yêu cầu đổi mật khẩu</p>
        <p>Nhấn vào <a href="http://localhost:3000/reset/${userId}">link</a> để tạo mật khẩu mới</p>
      `,
  });
};
