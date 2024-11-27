<template>
    <div class="container mt-4">
      <h2>Корзина</h2>
      <div v-if="cartStore.cart.length === 0">
        <p>Ваша корзина пуста.</p>
      </div>
      <div v-else>
        <div class="row mb-3" v-for="item in cartStore.cart" :key="item.id">
          <div class="col-md-2">
            <img :src="item.img" class="img-fluid" alt="...">
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
            <RouterLink to="/checkout" class="btn btn-primary mt-3 me-2">Оформить заказ</RouterLink>
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
  
  <style>
  .container {
    background-color: #1f1f1f;
    color: #e0e0e0;
    padding: 2rem;
    border-radius: 8px;
  }
  
  .btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
  }
  
  .btn-success {
    background-color: #28a745;
    border-color: #28a745;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .form-control {
    background-color: #2b2b2b;
    color: #f5f5f5;
    border-color: #333;
  }
  
  .form-control:focus {
    border-color: #d4af37;
    box-shadow: 0 0 5px rgba(212, 175, 55, 0.5);
  }
  </style>
  