import {createWebHistory,createRouter} from 'vue-router'
import ProductListing from './components/ProductListing.vue';
import ProductDetail from './components/ProductDetail.vue';


const routes=[
    {
        name: 'ProductListing',
        path:'/',
        component: ProductListing
    },
    {
        name: 'ProductDetail',
        path:'/productdetail/:id',
        component: ProductDetail
    },
   
];
const router= createRouter({
    history: createWebHistory(),
    routes
})

export default router;