// import VueRouter from "vue-router/types/index";

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Vue from "vue";
import VueRouter from "vue-router"

export const bus = new Vue();
import {store} from "./store/store"
import {routes} from "./routes"
Vue.use(VueRouter)
const router=new VueRouter({routes})

Vue.component('app-component', require('./App.vue'));
// Vue.component('app-component', require('./App.vue'));

const app = new Vue({
    el: '#app',
    store,
    router,
});

