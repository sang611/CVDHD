<template>
    <div class="login-container">
        <div class="login-body">
            <div class="login-header">
                <h1>ĐĂNG NHẬP</h1>
            </div>
            <div class="login-form">
                <form action="#" v-on:submit="onLogin">
                    <div class="email-field">
                        <span class="fas fa-user-tie"></span>
                        <input type="email" name="email" placeholder="Nhập email" id="email-input" ref="email" required>
                    </div>
                    <div class="password-field">
                        <span class="fas fa-lock"></span>
                        <input type="password" name="password" placeholder="Nhập mật khẩu" id="password-input" ref="password" required>
                    </div>
                    <div>
                        <input type="checkbox" id="remember-check"/>
                        <label for="remember-check">Nhớ tài khoản</label>
                        <a href="#">Quên mật khẩu?</a>
                    </div>
                    <div>
                        <input type="submit" value="Đăng nhập" id="submit-btn" />
                    </div>
                </form>

            </div>

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
                        this.$router.replace('/dashboard');
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

    h1, h2, h3, h4, h5, h6 {
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
    }
</style>