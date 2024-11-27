import { defineStore } from "pinia";

export const useCategoryStore = defineStore('category', () => {
    const categories = [
        'банан один',
        'банан два',
        'банан три',
        'банан четыре',
        'банан пять',
        'банан шесть',
    ];  
    return{
        categories,
    }
});