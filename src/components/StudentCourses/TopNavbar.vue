<template>
    <div class="dashboard-bar">
        <div class="search-bar">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search..." id="input-field">
        </div>
        <div class="notify-btn">
            <i class="fas fa-bell"></i>
        </div>
        <div class="person-bar">
            <img src="https://www.flaticon.com/svg/static/icons/svg/1998/1998592.svg" alt="">
            <div class="dropdown person-info">
                <button class="btn-warning dropdown-toggle" type="button" data-toggle="dropdown">
                    Vu Ngoc Sang
                    <span class="caret"></span>
                    <h6>K62-CC</h6>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopNavbar"
    }
</script>

<style scoped>
    .dashboard-bar {
        position: fixed;
        width: 100%;
        background-color: white;
        min-height: 55px;
        display: flex;
        align-items: center;
        box-shadow: 0 5px 10px -8px darkgray;
        z-index: 2;
    }

    .dashboard-bar .search-bar{
        padding: 15px 15px 15px 40px;
        width: 50%;
        display: flex;
        align-items: center;
    }

    .search-bar i {
        color: gray;
        margin-right: 10px;
    }

    .dashboard-bar #input-field {
        font-size: 18px;
        border: none;
        outline: none;
        flex-grow: 1;
    }

    .dashboard-bar .notify-btn {
        min-height: 55px;
        line-height: 55px;
        border-left: solid 1px darkgray;
        border-right: solid 1px darkgray;
        padding: 0 20px;
        color: darkgray;
    }

    .dashboard-bar .person-bar {
        display: flex;
        padding: 0 15px;
        min-height: 55px;
    }

    .dashboard-bar .person-bar img{
        max-width: 32px;
    }

    .person-bar .person-info {
        padding: 0 10px;
    }

    .person-info button {
        background-color: #ffffff;
        color: #000000;
        text-align: left;
        border: none;
        outline: none;
        height: 100%;
        padding: 0 5px;
    }
</style>