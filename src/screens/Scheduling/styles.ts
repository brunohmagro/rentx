import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background_secondary};
`
export const Header = styled.SafeAreaView`
  height: ${RFValue(325)}px;

  flex-direction: row;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.header};
`

export const HeaderContainer = styled.View`
  margin-left: ${RFValue(8)}px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.semiBold};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(34)}px;

  margin-top: ${RFValue(24)}px;
  padding: ${RFValue(8)}px;
`
export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  margin-top: ${RFValue(24)}px;
`

export const DateInfo = styled.View`
  width: 33.33%;
`

export const DateTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary.regular};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`

interface DateValueProps {
  selected: boolean
}

export const DateValueWrapper = styled.View<DateValueProps>`
  height: ${RFValue(32)}px;

  padding: ${RFValue(8)}px 0;

  ${({ selected, theme }) =>
    !selected &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.colors.shape};
      padding-bottom: 5px;
    `}
`

export const DateValue = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: ${RFValue(15)}px;
`

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24,
  },
  showsVerticalScroolIndicator: false,
})``

export const Footer = styled.SafeAreaView``

export const ContentFooter = styled.View`
  padding: 0 ${RFValue(24)}px;
`
