import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);

  const addProductToCart = (product) => {
    const existingProduct = cart.value.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  };

  const removeProductFromCart = (productId) => {
    cart.value = cart.value.filter(item => item.id !== productId);
  };

  const updateProductQuantity = (productId, quantity) => {
    const product = cart.value.find(item => item.id === productId);
    if (product) {
      product.quantity = quantity;
    }
  };

  const clearCart = () => {
    cart.value = [];
  };

  return {
    cart,
    addProductToCart,
    removeProductFromCart,
    updateProductQuantity,
    clearCart
  };
});
