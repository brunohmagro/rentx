import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background_secondary};
`
export const Header = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ButtonContainer = styled.View`
  margin-left: ${RFValue(8)}px;
`

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alimItems: 'center',
    showVerticalScrollIndicator: false,
  },
})``

export const Details = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Desciption = styled.View``

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(25)}px;
`

export const Rent = styled.View``

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(25)}px;
`

export const Acessories = styled.View`
  width: 100%;

  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

export const About = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;

  text-align: justify;

  margin-top: ${RFValue(24)}px;
  line-height: ${RFValue(25)}px;
`
