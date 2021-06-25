import React from 'react'
import { StatusBar } from 'react-native'

import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'

import ArrowSvg from '../../assets/arrow.svg'

import {
  Container,
  Header,
  HeaderContainer,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValueWrapper,
  DateValue,
  Content,
  Footer,
  ContentFooter,
} from './styles'

export const Scheduling: React.FC = () => {
  return (
    <Container>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
      <Header>
        <HeaderContainer>
          <BackButton onPress={() => console.log('Quero voltar')} size={35} />
          <Title>
            Escolha uma{'\n'}
            data de início e{'\n'}
            fim do aluguel
          </Title>

          <RentalPeriod>
            <DateInfo>
              <DateTitle>de</DateTitle>
              <DateValueWrapper selected={false}>
                <DateValue></DateValue>
              </DateValueWrapper>
            </DateInfo>

            <ArrowSvg />

            <DateInfo>
              <DateTitle>Até</DateTitle>
              <DateValueWrapper selected={false}>
                <DateValue>18/06/2021</DateValue>
              </DateValueWrapper>
            </DateInfo>
          </RentalPeriod>
        </HeaderContainer>
      </Header>

      <Content></Content>

      <Footer>
        <ContentFooter>
          <Button title="Confirmar" />
        </ContentFooter>
      </Footer>
    </Container>
  )
}
