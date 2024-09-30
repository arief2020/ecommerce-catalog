// ProductDetail2.spec.js
import ProductDetail2 from '@/views/ProductDetail2.vue'
import ProductLoading from '@/views/ProductLoading.vue'
// import ProductUnavailable from '@/views/ProductUnavailable.vue'
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

describe('ProductComponent', () => {
  it('renders ProductLoading when loading is true', () => {
    const wrapper = mount(ProductDetail2, {
      global: {
        stubs: {
          ProductLoading: true
        }
      },
      data() {
        return {
          loading: true // Simulasikan kondisi loading
        }
      }
    })

    expect(wrapper.findComponent(ProductLoading).exists()).toBe(true)
  })
})
