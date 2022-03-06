<template>
    <div id="singleCourse">
        <h1>Single Course</h1>
    </div>
</template>

<script>
import { ref } from "vue"
import axios from "axios"
import { useRoute } from "vue-router"

export default {
    name: "SingleCourse",
    setup() {
        const apiUrl = import.meta.env.VITE_AUTH_API_URL
        const route = useRoute()
        let course = ref({})

        // Get course data 
        axios
            .get(apiUrl + 'courses/' + route.params.id)
            .then(response => {
                course.value = response.data
            })
            .catch(e => console.log(e))

        return { course };
    }
}
</script>

<stylescoped>

</stylescoped>