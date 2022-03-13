import { ref } from "vue";
import axios from "axios";
import { useLoading } from "vue-loading-overlay";

const getCourses = () => {
  const apiUrl = import.meta.env.VITE_AUTH_API_URL;
  let courses = ref([]);

  const $loading = useLoading();
  let loader = $loading.show({
    color: "#00e07f",
    loader: "bars",
    width: 64,
    height: 64,
    opacity: 0.8,
    backgroundColor: "#040806",
  });

  axios
    .get(apiUrl + "courses")
    .then((response) => {
      courses.value = response.data;
    })
    .catch((e) => console.log(e))
    .finally(loader.hide());

  return courses;
};

export default getCourses;
