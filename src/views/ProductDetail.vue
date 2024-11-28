<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-6">
        <img :src="product.img" class="img-fluid" alt="...">
      </div>
      <div class="col-md-6">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p><strong>Цена:</strong> {{ product.price }} KZT</p>
        <p><strong>Дата публикации:</strong> {{ product.publish_at }}</p>
        <button type="button" class="btn btn-danger me-2" @click="addToCart">В корзину</button>
        <router-link to="/" class="btn btn-light">家</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '@/stores/product';
import { useCartStore } from '@/stores/cart';

const route = useRoute();
const productStore = useProductStore();
const cartStore = useCartStore();

const productId = route.params.id;
const product = productStore.products.find(p => p.id === parseInt(productId));

const addToCart = () => {
  cartStore.addProductToCart(product);
};
</script>

<style>
.container {
    background-color: #1f1f1f;
    color: #e0e0e0;
    padding: 2rem;
    border-radius: 8px;
}
</style>

