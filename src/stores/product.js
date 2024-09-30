import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductDetailStore = defineStore('product', {
  state: () => ({
    product: {},
    index: 1
  }),

  getters: {
    getProducts(state) {
      return state.product
    }
  },
  actions: {
    async fetchProduct() {
      try {
        const data = await axios.get(`https://fakestoreapi.com/products/${this.index}`)
        console.log(data.data)
        this.product = data.data
      } catch (error) {
        alert(error)
        console.log(error)
      }
    },

    incrementIndex() {
      if (this.index >= 20) {
        this.index = 1
      } else {
        this.index++
      }
      this.fetchProduct()
    },

    decrementIndex() {
      if (this.index <= 1) {
        this.index = 20
      }else{
        this.index--
      }
      this.fetchProduct()
    }
  }
})
