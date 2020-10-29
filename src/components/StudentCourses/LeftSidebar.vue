<template>
    <div class="dashboard-nav">
        <div class="nav-logo">
            <img src="@/assets/Elearning-logo.png" alt="">
        </div>
        <div class="nav-menu">
            <ul class="nav-list">
                <li>
                    <a href=""><i class="far fa-id-card"></i>&nbsp;Dashboard</a>
                </li>
                <li>
                    <a href=""><i class="far fa-folder-open"></i>&nbsp;Courses</a>
                </li>
                <li>
                    <a href=""><i class="fas fa-project-diagram"></i>&nbsp;Learning Plan</a>
                </li>
                <li>
                    <a href=""><i class="fas fa-comment-alt"></i>&nbsp;Chats</a>
                </li>
                <li>
                    <a href=""><i class="fas fa-cogs"></i>&nbsp;Settings</a>
                </li>
                <li class="logout-btn">
                    <a href=""><i class="fas fa-sign-out-alt"></i>&nbsp;Logout</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LeftSidebar"
    }
</script>

<style scoped>
    .dashboard-nav {
        padding: 10px 10px 40px 10px;
        position: fixed;
        min-width: 250px;
        height: 100vh;
    }

    .dashboard-nav .nav-logo {
        text-align: center;
        margin-bottom: 50px;

    }

    .dashboard-nav .nav-logo img {
        width: 150px;
    }

    .nav-menu {
        height: 100%;
    }

    .nav-menu .nav-list li a {
        color: #000;
        display: block;
        padding: 15px 50px;
        transition: .4s;
    }

    .nav-menu .nav-list li a i{
        color: gray;
        margin-right: 5px;
        transition: .4s;
    }

    .nav-menu .nav-list a:hover{
        color: coral;
        background-color: #efefef;
    }

    .nav-menu .nav-list a:hover i {
        color: coral;
    }

    .nav-menu .nav-list .logout-btn {
        margin-top: 150px;
    }
</style>