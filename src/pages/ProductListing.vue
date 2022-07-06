<template>
<section>
    <NavBar/>
    <main>
		<div class="mt-28 mx-36 sm:mx-10">
            <div class="productlist grid grid-cols-4 gap-5 sm:grid-cols-2 " id="productlist">
                <ProductCard v-for="(product, index) in paginatedItems" :key="index" :product="product"/>
            </div>
            <div class="pagination flex  float-right my-3" id="pagination">
                <div v-for= "(pageNumber, index) in pageCount" :key="index">
                    <button  class="bg-gray-300 mx-2 h-10 w-10 hover:bg-green-300" @click="paginationButton(index)">{{pageNumber}}</button>
                </div>
            </div>
        </div>
	</main>
    
</section>
    
</template>
<script>
import axios from 'axios'
import NavBar from '../components/NavBar.vue'
import ProductCard from '../components/ProductCard.vue'
export default {
  name: "ProductListing",
  data()
  {
      return{
          productList:[],
          currentPage: 0,
          perPage: 12,
          paginatedItems:[],
          pageCount: 0
      }
  },
  components: {
    NavBar,
    ProductCard,
  },
  methods:{

    displayProductList(){
        let start = this.perPage * this.currentPage;
        let end = start + this.perPage;
        this.paginatedItems =  this.productList.slice(start, end);
    },

    setupPagination(){
        this.pageCount = Math.ceil(this.productList.length / this.perPage);
    },

    paginationButton(page){
        this.currentPage=page;
        const url = `/${this.currentPage+1}`;
        window.location.href = url;
    },

  },
  created()
  {
      axios.get('/products')
      .then(({data}) => {
          this.productList = data.products
          this.displayProductList()
          this.setupPagination()
      })
      .catch(error => console.log(error))
  }
};
</script>
