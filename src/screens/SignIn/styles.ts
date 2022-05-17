import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const SafeView = styled.SafeAreaView`
  flex: 1;
`

export const Container = styled.View`
  flex: 1;
  padding: 0 ${RFValue(24)}px;

  background-color: ${({ theme }) => theme.colors.background_primary};
`
export const Header = styled.View`
  width: 100%;
  margin-top: ${RFValue(115)}px;
`

export const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  font-family: ${({ theme }) => theme.fonts.secondary.semiBold};
  color: ${({ theme }) => theme.colors.title};
`
export const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${RFValue(25)}px;

  margin-top: ${RFValue(16)}px;
`

export const Footer = styled.View``