<template>
    <p>Product Detail</p>
</template>

<script>
import {useRoute} from 'vue-router';
export default {
    name: "ProductDetail",
    created(){
        const route = useRoute();
        console.warn("route:",route.params.id)
    }

}
</script>