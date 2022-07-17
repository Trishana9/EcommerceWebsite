<template>
  <section>
    <NavBar />
    <main>
      <div class="mt-5 mx-36 sm:mx-10">
        <div>
          <ProductCard>
            <template v-slot:productdetail="{ product }">
              <div
                class="border flex flex-col justify-center py-8 cursor-pointer"
              >
                <div class="flex justify-center items-center">
                  <img
                    :src="product.thumbnail"
                    @error="$event.target.src = product.images[0]"
                    class="h-64 w-80"
                  />
                </div>
                <div class="px-10">
                  <p>{{ product.title }}</p>
                  <p class="font-bold text-emerald-500">
                    Rs.{{ calculateDiscoutedAmount(product) }}
                  </p>
                  <div class="flex">
                    <p class="text-gray-400 mr-3 line-through text-sm">
                      {{ product.price }}
                    </p>
                    <p class="text-sm">-{{ product.discountPercentage }}%</p>
                  </div>
                </div>
              </div>
            </template>
          </ProductCard>
        </div>
      </div>
    </main>
  </section>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import ProductCard from "@/components/ProductCard.vue";
import { calculateDiscount } from "../mixins";

export default {
  name: "ProductListing",
  mixins: [calculateDiscount],
  data() {
    return {};
  },
  components: {
    NavBar,
    ProductCard,
  },
};
</script>
