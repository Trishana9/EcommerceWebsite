<template>
<section>
    <nav class="">
		<div class="fixed inset-0 overflow-hidden flex justify-between items-center px-36 h-20 bg-emerald-100  shadow-md mb-10 sm:px-10">
            <div>
                <p class="font-pacifico text-3xl">YourChoice</p>
            </div>
            <div class="">
                <ul>
                    <li class="inline-block mx-5 cursor-pointer font-bold hover:text-gray-600  sm:hidden md:hidden"><a>Home</a></li>
                    <li class="inline-block mx-5 cursor-pointer border border-b-black border-b-2  border-x-transparent border-t-transparent text-gray-600 font-bold  sm:hidden md:hidden"><a>Shop</a></li>
                    <li class="inline-block mx-5 cursor-pointer font-bold hover:text-gray-600  sm:hidden md:hidden"><a>About</a></li>
                    <li class="inline-block mx-5 cursor-pointer font-bold hover:text-gray-600  sm:hidden md:hidden" ><a>Contact</a></li>
                    <li class="inline-block mx-5 cursor-pointer font-bold text-white bg-black hover:bg-gray-700 px-12 py-2  sm:hidden md:hidden" ><a>Sign Up</a></li>
                    <li class="inline-block mx-5 cursor-pointer text-white font-bold bg-black hover:bg-gray-700 px-12 py-2  sm:hidden md:hidden" ><a>LogIn</a></li>
                </ul>
            </div>
        </div>
	</nav>
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
                            <p class="font-bold text-emerald-500">Rs.{{(product.price-((product.price*product.discountPercentage)/100)).toFixed(2)}}</p>
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
          productList:[]
      }
  },
  async mounted()
  {
      let res=await axios.get('https://dummyjson.com/products');
      console.log(res)
      this.productList=res.data.products
      console.log(this.productList)
  }
};
</script>

