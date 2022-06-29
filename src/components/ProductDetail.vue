<template>
    <NavBar/>
    <main class="flex justify-center">
       
		<div id="details" class="details p-5 flex mt-28 w-[900px] border sm:flex-col sm:mx-44">
            <div class="relative mx-5">
                <div>
                    <div class="flex">
                        <img :src="productList.thumbnail" class="h-80 w-96">
                    </div>
                </div>
            </div>
            <div class="ml-10 sm:ml-0">
                <p class="text-xl font-bold">{{productList.title}}</p>

                <div>
                    <p class="text-[12px]"><b>Brand</b> | {{productList.brand}}</p>
                </div>

                <div class="stars-outer">
                    <div class="stars-inner" style="width: 68%;">
                    </div>
                    <span class="number-rating">{{productList.rating}}</span>
                </div>

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
</template>

<script>
import axios from 'axios'
import NavBar from './NavBar.vue'
import {useRoute} from 'vue-router';
export default {
    name: "ProductDetail",
    data()
    {
        return{
            productList:[],
        }
    },
     components: {
        NavBar
    },
    methods:{
    calculateDiscoutedAmount(product){
          return (product.price-((product.price*product.discountPercentage)/100)).toFixed(2)
      },
    },
    created(){
        const route = useRoute();
        console.warn("route:",route.params.id)
        let id =route.params.id
        axios.get('https://dummyjson.com/products/'+id)
        .then((response) => {
            this.productList = response.data
        })
        .catch(error => console.log(error))
    }

}
</script>