import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useProductStore = defineStore('product', () => {
    const products = ref([
        {
            id: 1,
            name: 'банан 1',
            img: 'https://avatars.mds.yandex.net/i?id=f610b1c979bc4f12ef38170ee66ef41e_l-5086971-images-thumbs&n=13',
            price: 1000,
            category: 'Банан',
            description: 'Bootstrap (также известен как Twitter Bootstrap) — популярный фреймворк для создания сайтов и веб-приложений с открытым исходным кодом.',
            publish_at: '26.06.2024'
        },
        {
            id: 2,
            name: 'банан 2',
            img: 'https://thumbs.dreamstime.com/b/unripe-banana-white-background-unripe-banana-isolated-white-background-104688636.jpg',
            price: 1100,
            category: 'Второй банан',
            description: 'Bootstrap (также известен как Twitter Bootstrap) — популярный фреймворк для создания сайтов и веб-приложений с открытым исходным кодом.',
            publish_at: '27.06.2024'
        },
        {
            id: 3,
            name: 'банан 3',
            img: 'https://sc04.alicdn.com/kf/Uea012d5e2c6c44c698881719b0ed1b7al.jpg',
            price: 1200,
            category: 'Третий банан',
            description: 'Bootstrap (также известен как Twitter Bootstrap) — популярный фреймворк для создания сайтов и веб-приложений с открытым исходным кодом.',
            publish_at: '16.06.2024'
        },
        {
            id: 4,
            name: 'банан 4',
            img: 'https://avatars.mds.yandex.net/i?id=43b8f285e25e4f9c943e2d4d350b12f2_l-4557470-images-thumbs&n=13',
            price: 1500,
            category: 'Четвёртый банан',
            description: 'Bootstrap (также известен как Twitter Bootstrap) — популярный фреймворк для создания сайтов и веб-приложений с открытым исходным кодом.',
            publish_at: '24.06.2024'
        }
    ]);

    const productsFilteredByCategoryName = computed(() => {
        return (category, searchText) => {
            let filteredProducts = products.value;
            if (category) {
                filteredProducts = filteredProducts.filter((product) => product.category === category);
            }
            if (searchText) {
                const searchLower = searchText.toLowerCase();
                filteredProducts = filteredProducts.filter((product) => product.name.toLowerCase().includes(searchLower));
            }
            return filteredProducts;
        };
    });

    return {
        products,
        productsFilteredByCategoryName,
    };
});
