import {createWebHistory,createRouter} from 'vue-router'
import ProductListing from './pages/ProductListing.vue';
import ProductDetail from './pages/ProductDetail.vue';
import Productpagination from './pages/PaginationProduct.vue';


const routes=[
    {
        name: 'ProductListing',
        path:'/',
        component: ProductListing
    },
    {
        name: 'Pagination',
        path:'/:pageid',
        component: Productpagination
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
