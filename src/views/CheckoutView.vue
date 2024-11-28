<template>
  <div class="container mt-4">
    <h2 v-if="!isOrderSubmitted">Оформление заказа</h2>
    <form v-if="!isOrderSubmitted" @submit.prevent="submitOrder">
      <div class="mb-3">
        <label for="name" class="form-label">Имя и фамилия</label>
        <input type="text" class="form-control" id="name" v-model="name" required>
      </div>
      <div class="mb-3">
        <label for="gender" class="form-label">Пол</label>
        <select class="form-select" id="gender" v-model="gender" required>
          <option value="">Выберите пол</option>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="country" class="form-label">Страна</label>
        <select class="form-select" id="country" v-model="country" required>
          <option value="">Выберите страну</option>
          <option value="kz">Казахстан</option>
          <option value="ru">Россия</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Адрес</label>
        <input type="text" class="form-control" id="address" v-model="address" required>
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">Телефон</label>
        <input type="text" class="form-control" id="phone" v-model="phone" required>
      </div>
      <div class="mb-3">
        <label for="delivery" class="form-label">Способ доставки</label>
        <select class="form-select" id="delivery" v-model="delivery" required>
          <option value="">Выберите способ доставки</option>
          <option value="courier">Курьер</option>
          <option value="pickup">Самовывоз</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="payment" class="form-label">Способ оплаты</label>
        <select class="form-select" id="payment" v-model="payment" required>
          <option value="">Выберите способ оплаты</option>
          <option value="card">Карта</option>
          <option value="cash">Наличные</option>
        </select>
      </div>
      <div class="mb-3">
        <h4>Товары в корзине</h4>
        <div v-for="item in cartStore.cart" :key="item.id" class="mb-2">
          <p><strong>{{ item.name }}</strong> — {{ item.price }} KZT x {{ item.quantity }}</p>
        </div>
        <p><strong>Общая стоимость: {{ totalCost }} KZT</strong></p>
      </div>
      <button type="submit" class="btn btn-success me-2">Отправить заказ</button>
      <button type="button" class="btn btn-danger" @click="cancelOrder">Отменить заказ</button>
    </form>
    <div v-else>
      <h2>Подтверждение заказа</h2>
      <p><strong>Имя и фамилия:</strong> {{ name }}</p>
      <p><strong>Пол:</strong> {{ gender === 'male' ? 'Мужской' : 'Женский' }}</p>
      <p><strong>Страна:</strong> {{ country }}</p>
      <p><strong>Адрес:</strong> {{ address }}</p>
      <p><strong>Телефон:</strong> {{ phone }}</p>
      <p><strong>Способ доставки:</strong> {{ delivery }}</p>
      <p><strong>Способ оплаты:</strong> {{ payment }}</p>
      <h4>Товары в корзине</h4>
      <div v-for="item in cartStore.cart" :key="item.id" class="mb-2">
        <p><strong>{{ item.name }}</strong> — {{ item.price }} KZT x {{ item.quantity }}</p>
      </div>
      <p><strong>Общая стоимость: {{ totalCost }} KZT</strong></p>
      <button type="button" class="btn btn-success" @click="confirmOrder">Подтвердить заказ</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useCartStore } from '@/stores/cart';
import { useOrdersStore } from '@/stores/orders';

const cartStore = useCartStore();
const ordersStore = useOrdersStore();

const name = ref('');
const gender = ref('');
const country = ref('');
const address = ref('');
const phone = ref('');
const delivery = ref('');
const payment = ref('');
const isOrderSubmitted = ref(false);

const totalCost = computed(() => {
  return cartStore.cart.reduce((total, item) => total + item.price * item.quantity, 0);
});

const submitOrder = () => {
  isOrderSubmitted.value = true;
};

const confirmOrder = () => {
  const order = {
    name: name.value,
    gender: gender.value,
    country: country.value,
    address: address.value,
    phone: phone.value,
    delivery: delivery.value,
    payment: payment.value,
    items: cartStore.cart,
    totalCost: totalCost.value,
    date: new Date().toLocaleString()
  };
  
  ordersStore.addOrder(order);
  cartStore.clearCart();
  alert('Ваш заказ был успешно подтвержден!');
  resetForm();
};

const cancelOrder = () => {
  resetForm();
  alert('Ваш заказ был отменен.');
};

const resetForm = () => {
  isOrderSubmitted.value = false;
  name.value = '';
  gender.value = '';
  country.value = '';
  address.value = '';
  phone.value = '';
  delivery.value = '';
  payment.value = '';
};
</script>


