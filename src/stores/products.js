import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: []
  }),

  getters: {
    getProducts(state) {
      return state.products
    }
  },
  actions: {
    async fetchProducts() {
      try {
        const data = await axios.get('https://fakestoreapi.com/products')
        this.products = data.data
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  }
})
