<template>
<section>
    <NavBar/>
    <main>
		<div class="mt-28 mx-36 sm:mx-10">
            <div class="productlist grid grid-cols-4 gap-5 sm:grid-cols-2 " id="productlist">
                <div v-for="(product, index) in paginatedItems" :key="index">
                    <div class="border flex flex-col justify-center py-8 cursor-pointer" @click="displayDetail(product)">
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
            <div class="pagination flex  float-right my-3" id="pagination">
                <div v-for= "(p, index) in page_count" :key="index">
                    <button class="bg-gray-300 mx-2 h-10 w-10 hover:bg-green-300" @click="paginationButton(index)">{{p}}</button>
                </div>
            </div>
        </div>
	</main>
    
</section>
    
</template>
<script>
import axios from 'axios'
import NavBar from './NavBar.vue'
export default {
  name: "ProductCard",
  data()
  {
      return{
          productList:[],
          currentPage: 0,
          perPage: 12,
          paginatedItems:[],
          page_count: 0
      }
  },
  components: {
    NavBar
  },
  methods:{
    calculateDiscoutedAmount(product){
          return (product.price-((product.price*product.discountPercentage)/100)).toFixed(2)
      },

    displaylist(){
                let start = this.perPage * this.currentPage;
                let end = start + this.perPage;
                this.paginatedItems =  this.productList.slice(start, end);
                console.log(this.paginatedItems)
            },
    setupPagination(){
                this.page_count = Math.ceil(this.productList.length / this.perPage);
            },
    paginationButton(page){
                this.currentPage=page;
                console.log('current: ',this.currentPage)
                this.displaylist()
    },
    displayDetail(product){
        console.log(product.id);
        let id = product.id;
        const url = "/productdetail/"+id;
        window.location.href = url;

            }

  },
  created()
  {
      axios.get('https://dummyjson.com/products')
      .then((response) => {
          this.productList = response.data.products
          this.displaylist()
          this.setupPagination()
      })
      .catch(error => console.log(error))
  }
};
</script>

