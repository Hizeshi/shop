<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
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
          <a class="nav-link" href="#">Cart</a>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/About">About</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <RouterView />
</template>

<style>

body {
    background-color: #121212;
    color: #e0e0e0;
    font-family: 'Arial', sans-serif;
}

.navbar {
    background-color: #1f1f1f;
    padding: 1rem;
}

.navbar-brand {
    color: #4b0000;
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-link {
    color: #8b3434; 
    margin-right: 1rem;
}

.nav-link:hover {
    color: #821f1f;
}

.navbar-toggler {
    border-color: #d4af37;
}

.navbar-toggler-icon {
    background-color: #d4af37;
}

.card {
    background-color: #1c1c1c;
    border: 1px solid #333;
}

.card-title {
    color: #f5f5f5;
}

.card-text {
    color: #cfcfcf;
}

.card-footer {
    background-color: #1f1f1f;
}

.btn-success {
    background-color: #28a745;
    border-color: #28a745;
}

.btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
}

.btn-dark {
    background-color: #343a40;
    border-color: #343a40;
}

.form-select, .form-control {
    background-color: #2b2b2b;
    color: #f5f5f5;
    border-color: #333;
}

.form-select:focus, .form-control:focus {
    border-color: #d4af37;
    box-shadow: 0 0 5px rgba(212, 175, 55, 0.5);
}
</style>