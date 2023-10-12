import {createRouter, createWebHistory} from "vue-router"
import HomeView from "../View/HomeView.vue";
import ContactView from "../View/ContactView.vue";
import AboutView from "../View/AboutView.vue";
import WebDesign from "../Services/WebDesign.vue";
import SocialMedia from "../Services/SocialMedia.vue";
import BusinessBranding from "../Services/BusinessBranding.vue";

const routes = [
    {
        path:'/',
        component: HomeView
    },
    {
        path:'/contact',
        component: ContactView
    },
    {
        path:'/about',
        component: AboutView
    },
    {
        path:'/webDesign',
        component: WebDesign
    },
    {
        path:'/socialMedia',
        component: SocialMedia
    },
    {
        path:'/businessBranding',
        component: BusinessBranding
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})