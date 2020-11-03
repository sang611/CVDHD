<template>
    <div class="login-page">
        <div class="login-left">
            <a href="#">
                <img src="../assets/logoUet.png" alt="" width="100px">
            </a>

            <div class="login-welcome">
                <h2>Chào mừng đến với Elearning!</h2><br><br>
                <h4>Elearning - Hệ thống học trực tuyến phổ biến nhất 2020.</h4>
            </div>

            <div class="login-copyright">
                © 2019 ExamReg
            </div>

        </div>
        <div class="login-right">
            <form action="#" v-on:submit="onLogin">
                <center>
                    <h1 id="form-title">
                        Đăng nhập vào hệ thống
                    </h1>
                </center>

                <div><input type="email" placeholder="Nhập email" name="email" id="email" ref="email"></div>
                <br>
                <div><input type="password" placeholder="Nhập password" name="password" id="password" ref="password"></div>

                <div class="row-submit">
                    <a href="#">Quên mật khẩu?</a>
                    <input type="submit" value="Đăng nhập" id="submit-btn">
                </div>

            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Login",

        created() {

        },
        methods: {
            onLogin(e) {
                e.preventDefault();

                const email = this.$refs.email.value;
                const password = this.$refs.password.value;

                axios.post("http://localhost:8017/login",
                {email, password},
                )
                .then((res) => {
                    console.log(res);
                    if(res.data) {
                        const {accessToken, refreshToken} = res.data
                        localStorage.setItem('accessToken', accessToken);
                        localStorage.setItem('refreshToken', refreshToken);
                        this.$store.commit('setAuthenticated', true);
                        this.$router.replace(this.$route.query.nextUrl || '/courses');
                    }
                })
                .catch((e) => {
                   console.log(e);
                })
            }
        }
    }
</script>

<style scoped>

    /*h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    label {
        font-weight: normal;
    }

    .login-container, .login-header {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login-container {
        width: 100%;
        height: 100vh;
        background-color: #EBEEEF;
    }

    .login-body {
        width: 45%;
        height: 80vh;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        border: none;
        box-shadow: 0 0 15px #3d3d3d;
    }

    .login-header {
        flex: 1;
        background-image: linear-gradient(rgba(54,84,99,0.7), rgba(54,84,99,0.7)),
                            url("https://images.wallpaperscraft.com/image/macbook_laptop_cup_177223_1920x1080.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 20px 20px 0px 0px;
    }

    .login-header h1 {
        color: #ffffff;
    }

    .login-form {
        flex: 2;
        display: flex;
        justify-content: center;
    }

    .login-form > form {
        display: block;
        width: 60%;
        margin-top: 40px;
    }

    form>div:nth-child(3) {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 40px;
        font-size: 14px;
        color: #999999;
    }

    form>div:nth-child(3) input {
        margin-right: 8px;
    }

    form>div:nth-child(3) a {
        margin-left: auto;
        text-decoration: none;
        color: #999999;
    }

    form>div:nth-child(3) a:hover {
        color: #57b846;
    }

    .email-field,
    .password-field {
        display: flex;
        align-items: center;
        border-bottom: solid 1px #D8D8D8;
        margin-bottom: 25px;
        padding: 10px 5px;
    }

    .email-field:hover,
    .password-field:hover {
        border-bottom: solid 1px #57b846;
    }

    .email-field > span,
    .password-field > span {
        color: #555555;
        font-size: 18px;
        margin-right: 10px;
    }

    #email-input,
    #password-input {
        width: 100%;
        border: none;
        outline: none;
        font-size: 16px;
        color: #555555;
    }

    #email-input:-webkit-autofill,
    #password-input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px white inset !important;
    }

    #submit-btn {
        width: 160px;
        height: 50px;
        color: #fff;
        border-radius: 50px;
        border: none;
        outline: none;
        background-color: #57b846;
        cursor: pointer;
        font-size: 18px;
        transition: .5s;
    }

    #submit-btn:hover {
        background-color: #333333;
    }*/


    * {
        font-family: "Times New Roman";
    }
    .login-page {
        display: flex;
        height: 100vh;
    }

    .login-left {
        width: 40%;
        padding: 39px 45.5px;
        background-image: url("../assets/bg-4.jpg");
        background-position: center;
        background-size: cover;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .login-welcome h4 {
        color: rgba(255, 255, 255, 0.7);
    }


    .login-right {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #email, #password {
        width: 450px;
        height: 50px;
        background-color: rgba(247, 247, 249, 0.7);
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        border: none;
        outline: none;
    }

    #password {
        margin-bottom: 4rem;
    }

    #form-title {
        margin-bottom: 4rem;
    }

    .row-submit {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .row-submit a {
        color: #a7abc3;
    }

    .row-submit a:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
    }

    #submit-btn {
        width: 120px;
        background-color: #5e6eea;
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-radius: 5px;
        border: none;
        outline: none;
        color: #ffffff;
        cursor: pointer;
        transition: .6s;
    }

    #submit-btn:hover {
        background-color: #4356e8;
        box-shadow: 0 0 10px rgba(94, 110, 234, 0.62);
    }


</style>