import { ref } from "vue";
import axios from "axios";

const getCategories = () => {
  const apiUrl = import.meta.env.VITE_AUTH_API_URL;
  let categories = ref([]);

  axios
    .get(apiUrl + "categories")
    .then((response) => {
      categories.value = response.data;
    })
    .catch((e) => console.log(e));

  return categories;
};

export default getCategories;
