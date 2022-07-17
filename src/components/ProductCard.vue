<template>
  <div>
    <LoaderImage v-if="loading" message="Please wait 5 seconds" />
    <div class="productlist grid grid-cols-4 gap-5 sm:grid-cols-2">
      <div v-for="(product, index) in paginatedItems" :key="index">
        <router-link
          :to="{ name: 'ProductDetail', params: { id: product.id } }"
        >
          <slot name="productdetail" :product="product"></slot>
        </router-link>
      </div>
    </div>
    <div class="pagination flex float-right my-3" id="pagination">
      <div v-for="(pageNumber, index) in pageCount" :key="index">
        <button
          class="bg-gray-300 mx-2 h-10 w-10 hover:bg-green-300"
          @click="paginationButton(index)"
        >
          {{ pageNumber }}
        </button>
      </div>
    </div>
  </div>
</template>
<script >
import axios from "axios";
import { setPage } from "@/mixins";
import { useRoute } from "vue-router";
import LoaderImage from "@/components/LoaderImage.vue";
const PER_PAGE = 12
export default {
  mixins: [setPage],
  data() {
    return {
      productList: [],
      perPage: PER_PAGE,
      paginatedItems: [],
      pageCount: 0,
      loading: false,
    };
  },
  components: {
    LoaderImage,
  },
  methods: {
    displayProductList(currentPage) {
      currentPage = currentPage - 1;
      let start = this.perPage * currentPage;
      let end = start + this.perPage;
      this.paginatedItems = this.productList.slice(start, end);
    },
    paginationButton(page) {
      this.currentPage = page + 1;
      const url = `/?page=${this.currentPage}`;
      window.location.href = url;
    },

    loadData() {
      this.loading = true;

      let currentPage = useRoute().query.page;
      if (!currentPage) {
        currentPage = 1;
      }
      axios
        .get("/products")
        .then(({ data }) => {
          this.productList = data.products;
          this.displayProductList(currentPage);
          this.setupPagination();
        })
        .catch((error) => console.log(error))
        .finally(() => {
          this.loading = false;
        });
    },
  },
  created() {
    this.loadData();
  },
};
</script>
