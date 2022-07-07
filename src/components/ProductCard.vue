<template>
    <router-link :to="{ name: 'ProductDetail', params: { id: product.id }}">
            <div class="border flex flex-col justify-center py-8 cursor-pointer">
                <div class="flex justify-center items-center">
                   <img :src="product.thumbnail" @error="$event.target.src=product.images[0]" class="h-64 w-80">
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
            </router-link>
</template>
<script >
import {calculateDiscount} from '../mixins'
export default({
    mixins:[calculateDiscount],
    props:{
       product: {
           required: true,
           type: Object
       },
    },
    methods:{
    
    displayDetail(product){
        const url = "/productdetail/"+product.id;
        window.location.href = url;

            }
      }
})
</script>
