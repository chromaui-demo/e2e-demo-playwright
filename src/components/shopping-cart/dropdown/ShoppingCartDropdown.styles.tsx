import styled, { css } from 'styled-components'
import { Button } from '../../Button'
import { Heading } from '../../typography/Heading'

export const StyledHeading = styled(Heading)`
  margin-bottom: 1.5rem;
`

export const CartDropdownContainer = styled.div<{ fixed?: boolean }>(
  () => css`
    width: 100%;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background-color: white;
    border-radius: 8px;
  `
)

export const CartDropdownButton = styled(Button)`
  margin-top: auto;
`

export const BottomContainer = styled.div`
  margin-top: auto;
  border-top: 1px solid #f5f6f7;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`
