// ProductDetail2.spec.js
import CardLoading from '@/components/CardLoading.vue'
import ProductDetail from '@/views/ProductDetail.vue'
// import ProductUnavailable from '@/views/ProductUnavailable.vue'
import { mount, shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'


describe('ProductComponent', () => {
  it('renders CardLoading when loading is true', () => {
    const wrapper = mount(ProductDetail, {
      global: {
        stubs: {
          CardLoading: true
        }
      },
      data() {
        return {
          loading: true
        }
      }
    })

    expect(wrapper.findComponent(CardLoading).exists()).toBe(true)
  })
})
describe('Update Background', () => {
  it("should set 'bg-color-women' when category is 'women's clothing'", async () => {
    const wrapper = shallowMount(ProductDetail)

    // Update the data and manually call the method to update bgColor
    wrapper.vm.data = { category: "women's clothing" }
    await wrapper.vm.$nextTick() // Ensure the DOM is updated

    // Manually call the updateBackgroundColor to simulate how the component behaves
    wrapper.vm.updateBackgroundColor()
    expect(wrapper.vm.bgColor).toBe('bg-color-women')
  })

  it("should set 'bg-color-men' when category is 'men's clothing'", async () => {
    const wrapper = shallowMount(ProductDetail)

    // Update the data and manually call the method to update bgColor
    wrapper.vm.data = { category: "men's clothing" }
    await wrapper.vm.$nextTick()

    // Manually call the updateBackgroundColor
    wrapper.vm.updateBackgroundColor()
    expect(wrapper.vm.bgColor).toBe('bg-color-men')
  })

  it("should set 'bg-product-unavailable' when category is neither 'women's clothing' nor 'men's clothing'", async () => {
    const wrapper = shallowMount(ProductDetail)

    // Update the data and manually call the method to update bgColor
    wrapper.vm.data = { category: 'electronics' }
    await wrapper.vm.$nextTick()

    // Manually call the updateBackgroundColor
    wrapper.vm.updateBackgroundColor()
    expect(wrapper.vm.bgColor).toBe('bg-product-unavailable')
  })
})

describe('CheckCategories', () => {
  it("available product should set true when category is 'women's clothing'", async () => {
    const wrapper = shallowMount(ProductDetail)

    // Update the data and manually call the method to update bgColor
    wrapper.vm.data = { category: "women's clothing" }
    await wrapper.vm.$nextTick() // Ensure the DOM is updated

    // Manually call the updateBackgroundColor to simulate how the component behaves
    wrapper.vm.checkCategories()
    expect(wrapper.vm.availableProduct).toBe(true)
  })

  it("available product should set true when category is 'men's clothing'", async () => {
    const wrapper = shallowMount(ProductDetail)

    // Update the data and manually call the method to update bgColor
    wrapper.vm.data = { category: "men's clothing" }
    await wrapper.vm.$nextTick()

    // Manually call the updateBackgroundColor
    wrapper.vm.checkCategories()
    expect(wrapper.vm.availableProduct).toBe(true)
  })

  it("available product should set true when category is neither 'women's clothing' nor 'men's clothing'", async () => {
    const wrapper = shallowMount(ProductDetail)

    // Update the data and manually call the method to update bgColor
    wrapper.vm.data = { category: 'electronics' }
    await wrapper.vm.$nextTick()

    // Manually call the updateBackgroundColor
    wrapper.vm.checkCategories()
    expect(wrapper.vm.availableProduct).toBe(false)
  })
})

describe('nextProduct', () => {
  // Simulasi ref untuk count

  it('should increase count by 1 if count is less than 20', async () => {
  const wrapper = mount(ProductDetail)

    wrapper.vm.count = 10;

    // Panggil method nextProduct
    await wrapper.vm.nextProduct();

    // Periksa apakah count bertambah
    expect(wrapper.vm.count).toBe(11);
  })

  it('should reset count to 1 when nextProduct is called and count is 20', async () => {
    const wrapper = mount(ProductDetail)

    // Simulasi nilai count 20
    wrapper.vm.count = 20

    // Panggil method nextProduct
    await wrapper.vm.nextProduct()

    // Periksa apakah count direset ke 1
    expect(wrapper.vm.count).toBe(1)
  })
})
