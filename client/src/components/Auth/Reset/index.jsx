import { useEffect, useRef } from "react";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";
import style from "./reset.module.scss";
import { useRouter } from "next/dist/client/router";
import { resetApi } from "../../../../API/user";
import { alertService } from "../../Alert/alert.service.js";

const ResetComp = () => {
  const router = useRouter();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user?.status === "succeeded") router.push("/");
  }, [user, router]);

  const email = useRef();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const message = await resetApi({email: email.current.value});
      alertService.success("Gửi yêu cầu thành công");
    } catch (err) {
      alertService.error(err.response.data);
    }
  };

  return (
    <form onSubmit={submit} className={style["reset"]}>
      <div className={style["reset_table"]}>
        <div className={style["reset_email"]}>
          <label className={style["reset_email--label"]} htmlFor="email">
            Email:
          </label>
          <input
            ref={email}
            required
            name="email"
            type="email"
            className={style["reset_email--input"]}
          />
        </div>
        <div className={style["reset_btn"]}>
          <Button color="primary">Gửi yêu cầu</Button>
        </div>
      </div>
    </form>
  );
};

export default ResetComp;
