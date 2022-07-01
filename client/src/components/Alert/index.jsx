import { useEffect, useState } from "react";
import { Alert } from "reactstrap";
import style from "./Alert.module.scss";

import { alertService } from "./alert.service.js";

const AlertCustom = ({ id = "default-alert" }) => {
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const subscription = alertService.onAlert(id).subscribe((alert) => {
      if (!alert.message) {
        alertService.clear(id);
      } else {
        setAlert(alert);
        setTimeout(() => {
          setAlert(null);
        }, 3000);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {alert ? (
        <Alert
          className={style["alert"]}
          color={alert.type}
        >
          {alert.message}
        </Alert>
      ) : (
        <></>
      )}
    </>
  );
};

export default AlertCustom;
