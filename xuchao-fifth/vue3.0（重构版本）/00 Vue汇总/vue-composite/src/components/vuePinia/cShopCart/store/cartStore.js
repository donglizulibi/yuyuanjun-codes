import { defineStore } from "pinia";
import { useProductStore } from "./productStore";
import { buyProducts } from "../data/shopData"


export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            cartProducts: [],
            checkoutState: null
        }
    },


    getters: {
        totalPrice(state) {
            console.log(state.cartProducts)
            console.log(state.cartProducts[0])
            const total = state.cartProducts.reduce((pre, val) => {
                console.log(val.price)
                pre += (val.price * val.quantity)
                return parseFloat(pre.toFixed(3))
            }, 0)
            console.log(total)
            return total
        }
    },
    actions: {
        addProduct(products) {
            // console.log(products)
            if (products.inventory < 1) {
                return
            } else {
                this.checkoutState = null
                    // console.log(this.cartProducts)
                const cartState = this.cartProducts.find(item => item.id == products.id)
                    // console.log(cartState)
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
        },

        async checkout() {
            const state = await buyProducts()
            if (state) {
                this.checkoutState = "成功"
                this.cartProducts = []
            } else {
                this.checkoutState = "失败"
            }
        }
    }
})