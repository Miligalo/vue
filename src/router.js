import {createRouter, createWebHashHistory} from 'vue-router';
import CartComponent from "./components/CartComponent.vue";
import ProductComponent from "./components/ProductComponent.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: ProductComponent},
        {path: '/cart', component: CartComponent},
    ]
})