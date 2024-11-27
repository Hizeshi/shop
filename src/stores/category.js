import { defineStore } from "pinia";

export const useCategoryStore = defineStore('category', () => {
    const categories = [
        'Банан',
        'Второй банан',
        'Третий банан',
        'Четвёртый банан',
    ];  
    return{
        categories,
    }
});