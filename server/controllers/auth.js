import User from "../models/user.js";
import jwt from "jsonwebtoken";
import { compare, genSalt, hash } from "bcrypt";
import { sceret } from "../config.js";

export async function login(req, res) {
  try {
    const email = req.body.email;
    const password = req.body.password;

    let user = await User.findOne({ email: email });
    if (!user) return res.status(400).json("Không tìm thấy tài khoản");

    const validPassword = await compare(password, user.password);
    if (!validPassword) return res.status(400).json("Sai mật khẩu");

    // !user.verify && return res.status(400).json("Tài khoản chưa xác nhận");
    const token = jwt.sign({ id: user._id }, sceret);
    user.token = token;
    await user.save();
    user.password = undefined;
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function logout(req, res) {
  try {
    return res.status(200).json({ token: null })
  } catch (error) {
    return res.status(500).json(error)
  }
}

export async function register(req, res) {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const fullName = req.body.fullName;
    const place = req.body.place;

    const findUser = await User.findOne({ email: email });
    if (findUser) return res.status(404).json("Email đã được sử dụng");

    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const newUser = new User({
      email: email,
      password: hashedPassword,
      fullName: fullName,
      place: place,
    });
    await newUser.save();

    //send mail

    return res.status(200).json("Đăng ký thành công");
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function editProfile(req, res) {
  try {
    const fullName = req.body.fullName;
    const place = req.body.place;
    const userId = req.params.userId;

    if (userId != req.userId) return res.status(403).json("Không có quyền truy cập")

    const user = await User.findOne({ _id: userId });
    if (!user) return res.status(404).json("Không tìm thấy tài khoản");

    user.fullName = fullName;
    user.place = place;
    await user.save();

    user.password = undefined;
    return res.status(201).json(user);
  } catch (err) {
    req.status(500).json(err);
  }
}

function makePassword(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}
export async function forgotPassword(req, res) {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(404).json("Email chưa được đăng ký");

    const newPass = makePassword(6);
    console.log(newPass);
    const salt = await genSalt(10);
    const hashedPassword = await hash(newPass, salt);
    user.password = hashedPassword;
    await user.save();
    console.log(user);
    // send mail
    return res.status(201).json("Vui lòng kiểm tra email của bạn");
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function changePassword(req, res) {
  try {
    const password = req.body.password;
    
    const userId = req.params.userId;

    if (userId != req.userId) return res.status(403).json("Không có quyền truy cập")

    const user = await User.findOne({ _id: userId });
    if (!user) return res.status(404).json("Email chưa được đăng ký");
    
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    user.password = hashedPassword;
    user.save();

    return res.status(201).json("Đổi mật khẩu thành công");
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function verifyAcc(req, res) {
  const userId = req.params.userId;
  try {
    const user = await User.findOne({ _id: userId });
    if (!user) return res.status(404).json("Email chưa được đăng ký");

    user.verify = true;
    user.save();
    return res.redirect('http://localhost:3000/login')
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function accInfo(req, res) {
  const userId = req.userId;
  try {
    var user = await User.findOne({ _id: userId });
    if (!user) return res.status(404).json("Không tìm thấy tài khoản");

    user.password = undefined;
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
}
