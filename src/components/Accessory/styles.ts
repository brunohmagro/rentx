import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  width: ${RFValue(96)}px;
  height: ${RFValue(90)}px;

  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.background_primary};

  padding: ${RFValue(16)}px;
  margin-bottom: ${RFValue(8)}px;

  border-radius: ${RFValue(5)}px;
`

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(13)}px;
  text-align: center;
`
