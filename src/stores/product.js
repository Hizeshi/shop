import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useProductStore = defineStore('product', () => {
    const products = ref([
        {
            id: 1,
            name: 'Банан спелый',
            img: 'https://avatars.mds.yandex.net/i?id=390f6941d1ec89d3373cfd98fb86adff58d16edb-10354750-images-thumbs&n=13',
            price: 1000,
            category: 'банан один',
            description: 'Bootstrap (также известен как Twitter Bootstrap) — популярный фреймворк для создания сайтов и веб-приложений с открытым исходным кодом.',
            publish_at: '26.06.2024'
        },
        {
            id: 2,
            name: 'куча бананов',
            img: 'https://avatars.mds.yandex.net/i?id=0525ca79acf2954a6460b688319bc0473609f877-7863956-images-thumbs&n=13',
            price: 1100,
            category: 'банан два',
            description: 'Bootstrap (также известен как Twitter Bootstrap) — популярный фреймворк для создания сайтов и веб-приложений с открытым исходным кодом.',
            publish_at: '27.06.2024'
        },
        {
            id: 3,
            name: 'банан в крапинку',
            img: 'https://avatars.mds.yandex.net/i?id=1552b5db92990e1c3f0492bf475e1788d87033d6-12144624-images-thumbs&n=13',
            price: 1200,
            category: 'банан три',
            description: 'Bootstrap (также известен как Twitter Bootstrap) — популярный фреймворк для создания сайтов и веб-приложений с открытым исходным кодом.',
            publish_at: '16.06.2024'
        },
        {
            id: 4,
            name: 'банан негр',
            img: 'https://avatars.mds.yandex.net/i?id=9af8cc68904a311eb4686af91c7cd18e86da1ba3-10411335-images-thumbs&n=13',
            price: 1500,
            category: 'банан четыре',
            description: 'Bootstrap (также известен как Twitter Bootstrap) — популярный фреймворк для создания сайтов и веб-приложений с открытым исходным кодом.',
            publish_at: '24.06.2024'
        },
        {
            id: 5,
            name: 'нарезаный банан',
            img: 'https://avatars.mds.yandex.net/i?id=c28979661c9e9d9325cdd89b82fba247f2e80a25-10681994-images-thumbs&n=13',
            price: 100,
            category: 'банан пять',
            description: 'Bootstrap (также известен как Twitter Bootstrap) — популярный фреймворк для создания сайтов и веб-приложений с открытым исходным кодом.',
            publish_at: '16.06.2024'
        },
        {
            id: 6,
            name: 'банан из фортнайт',
            img: 'https://avatars.mds.yandex.net/i?id=4876a33342838b2f36cb18a2d6cfd0a8c09560f7-5435106-images-thumbs&n=13',
            price: 1110,
            category: 'банан шесть',
            description: 'Bootstrap (также известен как Twitter Bootstrap) — популярный фреймворк для создания сайтов и веб-приложений с открытым исходным кодом.',
            publish_at: '16.06.2024'
        },
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
