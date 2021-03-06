import React from 'react'
import { StatusBar } from 'react-native'
import { useTheme } from 'styled-components'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { PasswordInput } from '../../components/PasswordInput'

import { SafeView, Container, Header, Title, SubTitle, Form, Footer } from './styles'

export const SignIn: React.FC = () => {
  const theme = useTheme()
  return (
  <SafeView>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
    <Container>
      <Header>
        <Title>Estamos{'\n'}quase lá.</Title>
        <SubTitle>
          Faça seu login para começar{'\n'}
          uma experiência incrível.
        </SubTitle>
      </Header>

      <Form>
        <Input
          iconName='mail'
          placeholder='E-mail'
          keyboardType='email-address'
          autoCorrect={false}
          autoCapitalize='none'
        />

        <PasswordInput
          iconName='lock'
          placeholder='Senha'
        />
      </Form>


      <Footer>
        <Button
          title='Login'
          onPress={() => {}}
          enabled={false}
          loading={false}
        />

        <Button
          title='Criar conta gratuíta'
          onPress={() => {}}
          enabled={true}
          loading={false}
          color={theme.colors.background_secondary}
          light
        />
      </Footer>
    </Container>
  </SafeView>
)}