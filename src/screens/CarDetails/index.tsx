import React from 'react'

import { BackButton } from '../../components/BackButton'

import { Container, Header } from './styles'

export const CarDetails: React.FC = () => (
  <Container>
    <Header>
      <BackButton onPress={() => console.log('Quero voltar')} size={35} />
    </Header>
  </Container>
)
