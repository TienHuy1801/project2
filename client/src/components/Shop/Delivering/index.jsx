import { useEffect, useState } from "react";
import { deliveringApi } from "../../../../API/shop";
import Loading from "../../Loading";
import DeliveringItem from "./delivering-item";

const DeliveringComp = ({user}) => {
  const [delivering, setDelivering] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await deliveringApi(user.user.token);
      setDelivering(response.data);
    }
    fetchData();
  }, []);
  return (
    <>
      {delivering ? (
        delivering.map((item) => (
          <DeliveringItem key={item._id} item={item} />
        ))
      ) : (
        <Loading />
      )}
    </>
  );
};

export default DeliveringComp;
