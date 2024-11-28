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
      <button type="button" class="btn btn-danger mt-3" @click="clearAllOrders">Очистить заказы</button>
    </div>
  </div>
</template>

<script setup>
import { useOrdersStore } from '@/stores/orders';

const ordersStore = useOrdersStore();

const clearAllOrders = () => {
  if (confirm("Вы уверены, что хотите очистить все заказы?")) {
    ordersStore.clearOrders();
  }
};
</script>

 