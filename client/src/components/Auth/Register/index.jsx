import { useRef, useState } from "react";
import { Button } from "reactstrap";
import style from "./register.module.scss";
import { editProfileApi, registerApi } from "../../../../API/user";
import { useRouter } from "next/dist/client/router";
import { useDispatch } from "react-redux";
import { fetchLoginSuccess } from "../../../redux/user/action";
import { alertService } from "../../Alert/alert.service";

const RegisterComp = ({ user, edit }) => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState(user ? user.fullName : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [place, setPlace] = useState(user ? user.place : "");

  const router = useRouter();

  const submitRegister = async (e) => {
    e.preventDefault();
    try {
      if (password === confirmPassword) {
        await registerApi({
          fullName: fullName,
          email: email,
          password: password,
          place: place,
        });
        alertService.success("Đăng ký thành công. Xác thực email để sử dụng.");
        router.push("/login");
      } else {
        alertService.error("Mật khẩu không khớp");
      }
    } catch (error) {
      alertService.error(error.response.data);
    }
  };
  const submitEdit = async (e) => {
    e.preventDefault();
    try {
      const userRes = await editProfileApi({
        userId: user._id,
        fullName: fullName,
        place: place,
      }, user.token);
      alertService.success("Chỉnh sửa thành công");
      dispatch(fetchLoginSuccess(userRes.data));
      router.push("/");
    } catch (error) {
      alertService.error(error.response.data);
    }
  };

  return (
    <form
      onSubmit={edit ? submitEdit : submitRegister}
      className={style["register"]}
    >
      <div className={style["register_table"]}>
        <div className={style["register_item"]}>
          <label className={style["register_item--label"]} htmlFor="fullName">
            Họ và tên:
          </label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            name="fullName"
            type="text"
            className={style["register_item--input"]}
          />
        </div>
        <div className={style["register_item"]}>
          <label className={style["register_item--label"]} htmlFor="email">
            Email:
          </label>
          <input
            disabled={edit}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            name="email"
            type="email"
            className={style["register_item--input"]}
          />
        </div>
        {edit ? (
          <></>
        ) : (
          <>
            <div className={style["register_item"]}>
              <label
                className={style["register_item--label"]}
                htmlFor="password"
              >
                Mật khẩu:
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                name="password"
                type="password"
                className={style["register_item--input"]}
              />
            </div>
            <div className={style["register_item"]}>
              <label
                className={style["register_item--label"]}
                htmlFor="confirmPassword"
              >
                Nhập lại mật khẩu:
              </label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                name="confirmPassword"
                type="password"
                className={style["register_item--input"]}
              />
            </div>
          </>
        )}
        <div className={style["register_item"]}>
          <label className={style["register_item--label"]} htmlFor="place">
            Địa chỉ:
          </label>
          <input
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            required
            name="place"
            type="text"
            className={style["register_item--input"]}
          />
        </div>
      </div>
      <div className={style["register_btn"]}>
        {edit ? (
          <Button color="primary" type="submit">
            Chỉnh sửa
          </Button>
        ) : (
          <Button color="primary" type="submit">
            Đăng ký
          </Button>
        )}
      </div>
    </form>
  );
};

export default RegisterComp;
