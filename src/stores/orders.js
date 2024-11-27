import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useOrdersStore = defineStore('orders', () => {
  const orders = ref(JSON.parse(localStorage.getItem('orders') || '[]'));

  const addOrder = (order) => {
    orders.value.push(order);
    localStorage.setItem('orders', JSON.stringify(orders.value));
  };

  const clearOrders = () => {
    orders.value = [];
    localStorage.setItem('orders', JSON.stringify(orders.value));
  };

  return {
    orders,
    addOrder,
    clearOrders
  };
});
