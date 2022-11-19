import {createRouter, createWebHashHistory} from 'vue-router';

import { useStore } from 'vuex'
import JsonProductPage from "./page/JsonProductPage.vue";
import ProductPage from "./page/ProductPage.vue";
import HomePage from "./page/HomePage.vue";
import CartPage from "./page/CartPage.vue";

let store = useStore();
export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/cart', component: CartPage},
        {path: '/:home?', name: 'goods', component: HomePage},
        {path: '/product/:id', name: 'goodPage', component: ProductPage},
        {path: '/json-product/:owner/:id', name: 'jsonProduct', component:JsonProductPage, props: true}
    ]
})