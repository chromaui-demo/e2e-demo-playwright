import { useMemo } from 'react'

import { ShoppingCartItem } from '../ShoppingCartItem/ShoppingCartItem'
import { CartItem } from '../../../app-state/cart'
import { Body } from '../../typography/Body'
import { toEuro } from '../../../helpers'

import { FloatingOfferContainer, StyledHeading } from './FloatingOffer.styles'

type FloatingOfferProps = {
  item: CartItem
}

export const FloatingOffer = ({ item }: FloatingOfferProps) => {
  return (
    <>
      <FloatingOfferContainer data-chromatic="ignore">
        <StyledHeading level={2} withMargin>
          Would you like to add this special offer to your cart?
        </StyledHeading>
        <ShoppingCartItem key={item.id} item={item} />
      </FloatingOfferContainer>
    </>
  )
}
