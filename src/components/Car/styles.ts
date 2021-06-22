import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(126)}px;

  background: ${({ theme }) => theme.colors.background_secondary};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: ${RFValue(24)}px;
  margin-bottom: ${RFValue(16)}px;

  border-radius: ${RFValue(5)}px;
`
export const Details = styled.View``

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
`

export const About = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: ${RFValue(16)}px;
`

export const Rent = styled.View`
  margin-right: auto;
`

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.regular};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(15)}px;
  text-transform: uppercase;
`

export const Type = styled.View`
  margin-top: auto;
`

export const CarImage = styled.Image`
  width: ${RFValue(167)}px;
  height: ${RFValue(85)}px;
`
