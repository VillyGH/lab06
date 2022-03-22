/* eslint-env jest */
import { shallowMount } from '@vue/test/utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  test('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })

    expect(wrapper.text()).toMatch(msg)
  })
})
