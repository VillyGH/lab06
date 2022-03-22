/* eslint-env jest */
import { shallowMount } from '@vue/test-utils'
import WelcomeMessage from '@/components/WelcomeMessage'
import { ui } from '@/externalization/ui'

describe('WelcomeMessage.vue', () => {
  test('doit afficher un message de bienvenue', () => {
    // arrange
    // act
    const wrapper = shallowMount(WelcomeMessage)
    console.log(wrapper.text()) // contenu textuel
    console.log(wrapper.html()) // contenu html complet
    console.log(wrapper.find('div').text()) // trouve le premier div

    // assert
    expect(wrapper.text()).toBe(ui.WELCOME_MESSAGE)
  })

  test('doit afficher un message de bienvenue passé en paramètre', () => {
    // arrange
    const message = "J'aime bien vuejs :-)"

    // act
    const wrapper = shallowMount(WelcomeMessage, {
      propsData: { initialMessage: message }
    })

    // assert
    expect(wrapper.text()).toBe(message)
  })
})
