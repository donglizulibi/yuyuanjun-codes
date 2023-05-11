import { defineStore } from "pinia";
import { getProducts } from "../data/shopData"

export const useProductStore = defineStore("products", {
    state: () => {
        return {
            all: []
        }
    },
    getters: {

    },
    actions: {
        async getAllProducts() {
            let res = await getProducts()
            res.forEach(item => this.all.push(item))
        },

        descProducts(products) {
            const choseProduct = this.all.find(item => item.id == products.id)
            choseProduct.inventory--
                // console.log(this.all)
        }
    }
})