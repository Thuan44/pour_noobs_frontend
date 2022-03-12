import { useUser } from "@/store/user.js";
import axios from "axios";

const getUserCart = () => {
  const store = useUser();
  const apiUrl = import.meta.env.VITE_AUTH_API_URL;

  axios
    .get(apiUrl + `cart/${store.user.cartID}`, {
      headers: {
        Authorization: "Bearer " + store.user.token,
      },
    })
    .then((res) => {
      store.setCart(res.data.cart);
      store.setCartCourseNumber(res.data.courseNumber);
    })
    .catch((e) => console.log(e));
};

export default getUserCart;
