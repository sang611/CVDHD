<template>
    <div class="dashboard-wrap">
        <LeftSidebar></LeftSidebar>
        <div class="dashboard_right">
            <TopNavbar></TopNavbar>
            <Courses></Courses>
        </div>
    </div>
</template>

<script>
    import LeftSidebar from "../components/StudentCourses/LeftSidebar";
    import TopNavbar from "../components/StudentCourses/TopNavbar";
    import Courses from "../components/StudentCourses/Courses";
    export default {
        name: "StudentCourses",
        components: {Courses, TopNavbar, LeftSidebar}
    }
</script>

<style>

    ul li {
        list-style-type: none;
    }

    a {
        text-decoration: none !important;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }



    .dashboard-wrap {
        display: flex;
        width: 100%;
        height: 100vh;
    }


    .dashboard_right {
        flex-grow: 1;
        margin-left: 250px;
        background-color: #efefef;
        height: fit-content;
    }

    /* Responsive */
    @media only screen and (max-width: 1200px) {
        .dashboard-nav {
            min-width: 200px;
        }
        .dashboard_right {
            margin-left: 200px;
        }
        .dashboard-courses {
            grid-template-columns: repeat(3, 1fr) !important;
        }
    }

    @media only screen and (max-width: 992px) {
        .dashboard-nav {
            display: none;
        }
        .dashboard_right {
            margin-left: 0;
        }
        .dashboard-courses {
            grid-template-columns: repeat(2, 1fr) !important;
        }
    }

    @media only screen and (max-width: 600px) {
        .dashboard-nav {
            display: none;
        }
        .dashboard_right {
            margin-left: 0;
        }
        .dashboard-courses {
            grid-template-columns: repeat(1, 1fr) !important;
        }
    }


</style>