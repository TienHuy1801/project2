import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import RegisterComp from "../src/components/Auth/Register";

const Register = () => {
  const user = useSelector((state) => state.user);
  const route = useRouter();
  useEffect(() => {
    if (user.status === "succeeded") route.push("/");
  }, []);
  return <RegisterComp user={null} edit={false} />;
};

export default Register;
