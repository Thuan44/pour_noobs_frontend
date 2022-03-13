import { ref } from "vue";
import axios from "axios";

const getSingleCourse = (courseID) => {
  const apiUrl = import.meta.env.VITE_AUTH_API_URL;
  let course = ref({});

  axios
    .get(apiUrl + "courses/" + courseID)
    .then((response) => {
      course.value = response.data;
    })
    .catch((e) => console.log(e));

  return course;
};

export default getSingleCourse;
