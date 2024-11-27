<script setup>
import { useCategoryStore } from '@/stores/category';
import { useProductStore } from '@/stores/product';
import { useCartStore } from '@/stores/cart';
import { ref, watch } from 'vue';

const productStore = useProductStore();
const categoryStore = useCategoryStore();
const cartStore = useCartStore();
const category = ref(null);
const searchText = ref('');
const products = ref([]);

const filterProducts = () => {
    products.value = productStore.productsFilteredByCategoryName(category.value, searchText.value);
};

const resetFilters = () => {
    category.value = null;
    searchText.value = '';
    filterProducts();
};

const addToCart = (product) => {
    cartStore.addProductToCart(product);
};

watch([category, searchText], filterProducts);

filterProducts();
</script>

<template>
<div class="container">
    <div class="row mt-4">
        <div class="col-md-5">
            <select class="form-select" v-model="category" aria-label="Default select example">
                <option :value="null" selected>Select category</option>
                <option v-for="cat in categoryStore.categories" :value="cat" :key="cat">{{ cat }}</option>
            </select>
        </div>
        <div class="col-md-5">
            <input type="search" v-model="searchText" class="form-control me-2" id="exampleFormControlInput1" placeholder="Search by name...">
        </div>
        <div class="col-md-2">
            <button type="button" class="btn btn-dark" @click="resetFilters">Reset</button>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-4">
        <div class="col" v-for="product in products" :key="product.id">
            <div class="card">
                <img :src="product.img" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ product.name }}</h5>
                    <p class="card-text">{{ product.price }}</p>
                    <p class="card-text">{{ product.category }}</p>
                </div>
                <div class="card-footer text-end">
                    <RouterLink :to="{ name: 'product-detail', params: { id: product.id } }" class="btn btn-success me-2">Детали</RouterLink>
                    <button type="button" class="btn btn-danger" @click="addToCart(product)">В корзину</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
