import { ComponentStory, ComponentMeta } from '@storybook/react'

// import { cartItems } from '../../../stub/cart-items'

import { FloatingOffer } from './FloatingOffer'

export default {
  title: 'Components/FloatingOffer',
  component: FloatingOffer,
} as ComponentMeta<typeof FloatingOffer>

export const Default: ComponentStory<typeof FloatingOffer> = (args) => <FloatingOffer {...args} />
Default.args = {
  item: {
    quantity: 1,
    id: 308,
    name: 'Bison Burger',
    price: 11.99,
    description: 'A succulent burger made from 100% bison meat.',
  },
}
