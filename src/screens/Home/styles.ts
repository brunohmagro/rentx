import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { RectButton } from 'react-native-gesture-handler'

import { CarDto } from '../../components/Car/interfaces'

export const Container = styled.View`
  flex: 1;

  background: ${({ theme }) => theme.colors.background_primary};
`

export const Header = styled.SafeAreaView`
  width: 100%;
  height: ${RFValue(113)}px;
  background: ${({ theme }) => theme.colors.header};
  justify-content: flex-end;
`
export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${RFValue(24)}px ${RFValue(24)}px;
`

export const TotalCars = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary.regular};
`

export const CarList = styled(FlatList as new () => FlatList<CarDto>).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showVerticalScrollIndicator: false,
})``

export const MyCarsButton = styled(RectButton)`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  border-radius: ${RFValue(30)}px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};

  position: absolute;
  bottom: ${RFValue(16)}px;
  right: ${RFValue(16)}px;
`
