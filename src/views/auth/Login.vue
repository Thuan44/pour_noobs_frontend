<template>
    <div id="login">
        <h1>Login</h1>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: "Login",
    setup () {
        const postApiUrl = import.meta.env.VITE_AUTH_API_URL
        
        axios
        .post(postApiUrl + "login", {
            email: "tutu@tutu.com",
            password: "tutu"
        })
        .then(response => console.log(response))
        .catch(e => console.log(e))

        return {}
    }
}
</script>

<style scoped>

</style>