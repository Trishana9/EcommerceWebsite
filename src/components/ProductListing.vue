<template>
<section>
    <main>
		<div class="mt-28 mx-36 sm:mx-10">
            <div class="productlist grid grid-cols-4 gap-5 sm:grid-cols-2 " id="productlist">
                <div v-for="product in productList" :key="product">
                    <div class="border flex flex-col justify-center py-8 cursor-pointer">
                        <div class="flex justify-center items-center">
                            <img :src="product.thumbnail" class="h-64 w-80">
                        </div>
                        <div class="px-10">
                            <p>{{product.title}}</p>
                            <p class="font-bold text-emerald-500">Rs.{{calculateDiscoutedAmount(product)}}</p>
                            <div class="flex">
                                <p class="text-gray-400 mr-3 line-through text-sm">{{product.price}}</p>
                                <p class="text-sm">-{{product.discountPercentage}}%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</main>
    
</section>
    
</template>
<script>
import axios from 'axios'
export default {
  name: "ProductCard",
  data()
  {
      return{
          productList:[],
          current_page: 1,
          product_per_page: 20,
      }
  },
  methods:{
      calculateDiscoutedAmount(product){
          return (product.price-((product.price*product.discountPercentage)/100)).toFixed(2)
      }

  },
  created()
  {
      axios.get('https://dummyjson.com/products')
      .then((response) => this.productList = response.data.products)
      .catch(error => console.log(error))
  }
};
</script>

