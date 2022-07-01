import style from "./Loading.module.scss";

const Loading = () => {
  return (
    <>
      <div className={style["lds-ring"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Loading;
