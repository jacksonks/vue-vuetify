import Vue from 'vue'
import Router from 'vue-router'
import Home from "../views/Home";
import About from "../views/About";
import Login from "../views/Login";
import Dashboard from "../views/Dashboard";
import Signup from "../views/Signup";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/About',
            name: 'About',
            component: About
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },
        {
            path: '/Dashboard',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/Signup',
            name: 'Signup',
            component: Signup
        }
    ],
    mode: 'history'
})