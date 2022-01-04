import { FlatList, FlatListProps } from 'react-native'
import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { CarDto } from '../../components/Car/interfaces'

export const Container = styled.View`
  flex: 1;

  background: ${({ theme }) => theme.colors.background_primary};
`
export const Header = styled.SafeAreaView`
  height: ${RFValue(300)}px;

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
  font-size: ${RFValue(30)}px;

  margin-top: ${RFValue(24)}px;
  padding: ${RFValue(8)}px;
`
export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary.regular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(15)}px;

  margin-top: ${RFValue(24)}px;
  padding: ${RFValue(8)}px;
`
export const Content = styled.View`
  flex: 1;

  align-items: center;

  padding: 0 ${RFValue(16)}px;
`

export const Appointments = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;

  padding: ${RFValue(24)}px 0;
`

export const AppointmentTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  color: ${({ theme }) => theme.colors.text};

  font-size: ${RFValue(15)}px;
`

export const AppointmentQuantity = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  color: ${({ theme }) => theme.colors.title};

  font-size: ${RFValue(15)}px;
`
export const ListCar = styled(
  FlatList as new (props: FlatListProps<CarDto>) => FlatList<CarDto>,
).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``

export const CarWrapper = styled.View`
  margin-bottom: ${RFValue(16)}px;
`

export const CarWrapperFooter = styled.View`
  padding: ${RFValue(12)}px;
  margin-top: -10px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.background_secondary};
`

export const CarWrapperFooterTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  font-size: ${RFValue(12)}px;
`

export const CarWrapperFooterPeriod = styled.View`
  align-items: center;
  flex-direction: row;
`

export const CarWrapperFooterPeriodDate = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${RFValue(13)}px;
`
