<template>
  <div class="container mt-4">
    <h2>Корзина</h2>
    <div v-if="cartStore.cart.length === 0">
      <div class="alert alert-warning" role="alert">
        Ваша корзина пуста.
      </div>
    </div>
    <div v-else>
      <div class="row mb-3" v-for="item in cartStore.cart" :key="item.id">
        <div class="col-md-2">
          <img :src="item.img" class="img-fluid rounded" alt="...">
        </div>
        <div class="col-md-3">
          <h5>{{ item.name }}</h5>
          <p>{{ item.price }} KZT</p>
        </div>
        <div class="col-md-3">
          <input type="number" class="form-control" v-model.number="item.quantity" @change="updateQuantity(item)">
        </div>
        <div class="col-md-2">
          <button type="button" class="btn btn-danger" @click="removeFromCart(item.id)">Удалить</button>
        </div>
        <div class="col-md-2">
          <RouterLink :to="{ name: 'product-detail', params: { id: item.id } }" class="btn btn-success">Описание</RouterLink>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12 text-end">
          <h4>Общая стоимость: {{ totalCost }} KZT</h4>
          <RouterLink to="/checkout" class="btn btn-success mt-3 me-2">Оформить заказ</RouterLink>
          <router-link to="/" class="btn btn-light mt-3">家</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();

const updateQuantity = (item) => {
  cartStore.updateProductQuantity(item.id, item.quantity);
};

const removeFromCart = (productId) => {
  cartStore.removeProductFromCart(productId);
};

const totalCost = computed(() => {
  return cartStore.cart.reduce((total, item) => total + item.price * item.quantity, 0);
});
</script>