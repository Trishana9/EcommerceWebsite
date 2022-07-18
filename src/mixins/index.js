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
            if(this.pageCount == 1){
                this.pageCount=0
            }
        },
    }
}


export{
    calculateDiscount,
    setPage,
    
}
