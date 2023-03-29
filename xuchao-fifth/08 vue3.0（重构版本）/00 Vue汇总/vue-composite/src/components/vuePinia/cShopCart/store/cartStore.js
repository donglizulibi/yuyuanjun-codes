import { defineStore } from "pinia";
import { useProductStore } from "./productStore";

export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            cartProducts: []
        }
    },
    getters: {},
    actions: {
        addProduct(products) {
            console.log(products)
            if (products.inventory < 1) {
                return
            } else {
                console.log(this.cartProducts)
                const cartState = this.cartProducts.find(item => item.id == products.id)
                console.log(cartState)
                if (!cartState) {
                    this.cartProducts.push({
                            id: products.id,
                            title: products.title,
                            price: products.price,
                            quantity: 1
                        })
                        // console.log(this.cartProducts)
                } else {
                    cartState.quantity++
                }

                const productStore = useProductStore()
                productStore.descProducts(products)
            }
        }
    }
})