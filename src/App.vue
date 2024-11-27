<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/">UpgradeShop</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/cart">Cart</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/checkout">Checkout</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/orders">Orders</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <RouterView />
</template>

<style>
body {
    background-color: #181818;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
}

/* Стили для Navbar */
.navbar {
    background-color: #282828;
    padding: 1rem;
}

.navbar-brand {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-link {
    color: #ffffff; /* Белый цвет для ссылок */
    margin-right: 1rem;
    background-color: transparent; /* Прозрачный фон для ссылок */
}

.nav-link:hover {
    color: #50fa7b; /* Цвет при наведении */
    background-color: #343a40; /* Фон при наведении */
}

.navbar-toggler {
    border-color: #50fa7b;
}

.navbar-toggler-icon {
    background-color: #50fa7b;
}

/* Стили для карточек */
.card {
    background-color: #282828;
    border: 1px solid #444;
    border-radius: 8px;
}

.card-title {
    color: #ffffff;
}

.card-text {
    color: #aaaaaa;
}

.card-footer {
    background-color: #343a40;
    border-top: 1px solid #444;
}

/* Стили для кнопок */
.btn-success {
    background-color: #50fa7b;
    border-color: #50fa7b;
}

.btn-danger {
    background-color: #ff5555;
    border-color: #ff5555;
}

.btn-dark {
    background-color: #6272a4;
    border-color: #6272a4;
}

.btn-primary {
    background-color: #8be9fd;
    border-color: #8be9fd;
}

.btn-secondary {
    background-color: #bd93f9;
    border-color: #bd93f9;
}

/* Стили для форм */
.form-select, .form-control {
    background-color: #282828;
    color: #ffffff;
    border-color: #444;
    border-radius: 4px;
}

.form-select:focus, .form-control:focus {
    border-color: #50fa7b;
    box-shadow: 0 0 5px rgba(80, 250, 123, 0.5);
}

/* Стили для контейнеров */
.container {
    background-color: #181818;
    color: #ffffff;
    padding: 2rem;
    border-radius: 8px;
    margin-top: 2rem;
}

h2, h4 {
    color: #ffffff;
}

p {
    color: #aaaaaa;
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
