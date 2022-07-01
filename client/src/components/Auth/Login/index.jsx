import { useRef } from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import style from "./login.module.scss";
import { fetchLoginRequest } from "../../../redux/user/action";
import Link from "next/link";
import { alertService } from "../../Alert/alert.service";

const LoginComp = () => {
  const dispatch = useDispatch();

  const email = useRef();
  const password = useRef();

  const submit = (e) => {      
    e.preventDefault();
    try {
      dispatch(
        fetchLoginRequest({
          email: email.current.value,
          password: password.current.value,
        })
      );
    } catch (error) {
      alertService.error(error.response.data);
    }
  };

  return (
    <form onSubmit={submit} className={style["login"]}>
      <div className={style["login_table"]}>
        <div className={style["login_email"]}>
          <label className={style["login_email--label"]} htmlFor="email">
            Email:
          </label>
          <input
            ref={email}
            required
            name="email"
            type="email"
            className={style["login_email--input"]}
          />
        </div>
        <div className={style["login_password"]}>
          <label className={style["login_password--label"]} htmlFor="password">
            Mật khẩu:
          </label>
          <input
            ref={password}
            required
            name="password"
            type="password"
            className={style["login_password--input"]}
          />
        </div>
        <Link href="/reset">
          <a className={style["login_reset"]}>Quên mật khẩu</a>
        </Link>
        <div className={style["login_btn"]}>
          <Button color="primary">Đăng nhập</Button>
        </div>
      </div>
    </form>
  );
};

export default LoginComp;
