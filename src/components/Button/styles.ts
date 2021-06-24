import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'

import { ButtonStyleProps } from './interfaces'

export const Container = styled(RectButton)<ButtonStyleProps>`
  width: 100%;
  padding: ${RFValue(19)}px;

  justify-content: center;
  align-items: center;

  background: ${({ color, theme }) => (color ? color : theme.colors.primary)};

  border-radius: ${RFValue(5)}px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape_light};
`
