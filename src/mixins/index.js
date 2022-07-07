const calculateDiscount ={
    methods:{
        calculateDiscoutedAmount(product){
            let totalDiscount = (product.price*product.discountPercentage)/100;
            let discountedPrice = product.price - totalDiscount;
            return (discountedPrice.toFixed(2));
        },
    }
}

const setPage = {
    methods:{
        setupPagination(){
            this.pageCount = Math.ceil(this.productList.length / this.perPage);
        },
    }
}

const loader = {
    data: () => {
        return {
          loaderActive: false,
        }
      },
      methods: {
        showLoader () {
          this.loaderActive = true;
        },
        hideLoader () {
          this.loaderActive = false;
        },
      }
}

export{
    calculateDiscount,
    setPage,
    loader
}
