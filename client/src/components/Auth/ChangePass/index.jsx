import { useRef } from "react";
import { Button } from "reactstrap";
import style from "./changePass.module.scss";
import { useRouter } from "next/dist/client/router";
import { changePassApi } from "../../../../API/user";
import { alertService } from "../../Alert/alert.service";

const ChangePass = ({ userId }) => {
  const router = useRouter();
  const password = useRef();
  const confirmPassword = useRef();

  const submit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (password.current.value === confirmPassword.current.value) {
      try {
        const message = await changePassApi({
          password: password.current.value,
          userId: userId,
        }, token);
        alertService.success(message.data);
        router.push('/');
      } catch (err) {
        alertService.error(err.response.data);
      }
    } else {
      alertService.error("Mật khẩu không khớp");
    }
  };

  return (
    <form onSubmit={submit} className={style["change-pass"]}>
      <div className={style["change-pass_table"]}>
        <div className={style["change-pass_item"]}>
          <label
            className={style["change-pass_item--label"]}
            htmlFor="password"
          >
            Nhập mật khẩu mới:
          </label>
          <input
            ref={password}
            required
            name="password"
            type="password"
            className={style["change-pass_item--input"]}
          />
        </div>
        <div className={style["change-pass_item"]}>
          <label
            className={style["change-pass_item--label"]}
            htmlFor="confirmPassword"
          >
            Nhập lại mật khẩu:
          </label>
          <input
            ref={confirmPassword}
            required
            name="confirmPassword"
            type="password"
            className={style["change-pass_item--input"]}
          />
        </div>
        <div className={style["change-pass_btn"]}>
          <Button color="primary">Đổi mật khẩu</Button>
        </div>
      </div>
    </form>
  );
};

export default ChangePass;
