<template>
    <div>
        <img :src="productImages[this.currentSrc]"  class="h-80 w-96"/>  
        <button @click="prev()" class="absolute top-0 my-36"><i class="fa fa-arrow-circle-left text-3xl bg-white w-10 rounded-full" aria-hidden="true"></i></button>
        <button @click="next()" class="absolute top-0 right-0 my-36"><i class="fa fa-arrow-circle-right text-3xl bg-white w-10 rounded-full" aria-hidden="true"></i></button>

    </div>

</template>
<script >

export default({
    data(){
        return{
            currentSrc: 0,
        }
    },
    props:{
       productImages: {
            required: true,
            type: Array
       },
    },
    methods:{
     prev(){
          if(this.currentSrc <= (this.productImages.length - 1)) { 
              if(this.currentSrc==0) {
                  this.currentSrc = this.productImages.length-1
                  } 
              else{
                  this.currentSrc--
                } 
            }
          else{ 
              this.currentSrc = this.productImages.length-2;
              }
      },
      next(){
          if(this.currentSrc <= (this.productImages.length - this.currentSrc)) { 
              this.currentSrc++
              }
         else{
             this.currentSrc = 0;
            }      }
    }
})
</script>
