<template>
    <section>
        <nav-bar/>
        <main class="flex justify-center">
       
		<div id="details" class="details p-5 flex mt-10 w-[900px] border sm:flex-col sm:mx-44">
            <div class="relative mx-5">
                <div>
                    <div class="flex">
                        <SwiperCard :productImages="productList.images" class="h-80 w-96" />                          
                    </div>
               </div>
            </div>
            <div class="ml-10 sm:ml-0">
                <p class="text-xl font-bold">{{productList.title}}</p>

                <div>
                    <p class="text-[12px]"><b>Brand</b> | {{productList.brand}}</p>
                </div>

                <star-rating :rating="productList.rating" :read-only="true" :increment="0.01" star-size="25"></star-rating>

                <p class="font-bold text-emerald-500 text-xl mt-5">Rs.{{calculateDiscoutedAmount(productList)}}</p>

                <div class="flex">
                    <p class="text-gray-500 mr-3 line-through text-sm">Rs.{{productList.price}}</p>
                    <p class="text-sm">-{{productList.discountPercentage}}%</p></div><div class="pt-5">
                        <button class="bg-orange-500 font-bold text-white mr-5 w-44 h-10">Buy Now</button>
                        <button class="bg-blue-500 font-bold w-44 h-10 text-white">Add to Cart</button>
                </div>

                <div>
                    <p class="font-bold pt-3">Product Details</p>
                    <p class="text-sm">{{productList.description}}</p>
                </div>
            </div>
        </div>
	</main>
    </section>
</template>

<script>
import axios from 'axios'
import NavBar from '@/components/NavBar.vue'
import SwiperCard from '@/components/SwiperCard.vue'
import {useRoute} from 'vue-router';
import StarRating from 'vue-star-rating'

import {calculateDiscount} from '../mixins'

export default {
    name: "ProductDetail",
    mixins:[calculateDiscount],
    data()
    {
        return{
            productList:[],
        }
    },
     components: {
        NavBar,
        StarRating,
        SwiperCard,
    },

    created(){
        let id =useRoute().params.id
        axios.get(`/products/${id}`)
        .then(({data}) => {
            this.productList = data
        })
        .catch(error => console.log(error))
    }

}
</script>
