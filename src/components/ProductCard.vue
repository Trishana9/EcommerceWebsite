<template>
            <div class="border flex flex-col justify-center py-8 cursor-pointer" @click="displayDetail(product)">
                <div class="flex justify-center items-center">
                   <img :src="product.thumbnail" class="h-64 w-80">
                </div>
                <div class="px-10">
                    <p>{{product.title}}</p>                            
                    <p class="font-bold text-emerald-500">Rs.{{calculateDiscoutedAmount(product.price,product.discountPercentage)}}</p>
                    <div class="flex">
                       <p class="text-gray-400 mr-3 line-through text-sm">{{product.price}}</p>
                        <p class="text-sm">-{{product.discountPercentage}}%</p>
                    </div>
                </div>
            </div>
</template>
<script >

export default({
    props:{
       product: {},
    },
    methods:{
    calculateDiscoutedAmount(price,discountPercentage){
          return (price-((price*discountPercentage)/100)).toFixed(2)
      },
    displayDetail(product){
        console.log(product.id);
        let id = product.id;
        const url = "/productdetail/"+id;
        window.location.href = url;

            }
      }
})
</script>
