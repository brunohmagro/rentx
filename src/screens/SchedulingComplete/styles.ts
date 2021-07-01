import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.header};

  padding-top: ${RFValue(96)}px;
`
export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.semiBold};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(30)}px;

  margin-top: ${RFValue(40)}px;
`

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(15)}px;
  text-align: center;

  margin: ${RFValue(16)}px 0;
  line-height: ${RFValue(25)}px;
`
export const Footer = styled.SafeAreaView`
  margin-bottom: ${RFValue(80)}px;
`
