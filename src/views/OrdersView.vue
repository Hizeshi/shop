<template>
    <div class="container mt-4">
      <h2>Мои заказы</h2>
      <div v-if="ordersStore.orders.length === 0">
        <p>У вас нет заказов.</p>
      </div>
      <div v-else>
        <div class="mb-4" v-for="(order, index) in ordersStore.orders" :key="index">
          <h3>Заказ №{{ index + 1 }} - {{ order.date }}</h3>
          <p><strong>Имя и фамилия:</strong> {{ order.name }}</p>
          <p><strong>Пол:</strong> {{ order.gender === 'male' ? 'Мужской' : 'Женский' }}</p>
          <p><strong>Страна:</strong> {{ order.country }}</p>
          <p><strong>Адрес:</strong> {{ order.address }}</p>
          <p><strong>Телефон:</strong> {{ order.phone }}</p>
          <p><strong>Способ доставки:</strong> {{ order.delivery }}</p>
          <p><strong>Способ оплаты:</strong> {{ order.payment }}</p>
          <h4>Товары</h4>
          <ul>
            <li v-for="item in order.items" :key="item.id">{{ item.name }} — {{ item.price }} KZT x {{ item.quantity }}</li>
          </ul>
          <p><strong>Общая стоимость:</strong> {{ order.totalCost }} KZT</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useOrdersStore } from '@/stores/orders';
  
  const ordersStore = useOrdersStore();
  </script>
  
  <style>
  .container {
    background-color: #1f1f1f;
    color: #e0e0e0;
    padding: 2rem;
    border-radius: 8px;
  }
  
  h3 {
    color: #f5f5f5;
  }
  
  ul {
    list-style: none;
    padding-left: 0;
  }
  
  ul li {
    background-color: #2b2b2b;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 5px;
  }
  </style>
  