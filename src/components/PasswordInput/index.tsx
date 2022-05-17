import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons'

import { useTheme } from 'styled-components'

import { Container, IconContainer, TextInput, EyeIconContainer, ChangePasswordVisibilityButton } from './styles';

interface inputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
}

export const PasswordInput: React.FC<inputProps> = ({ iconName, ...rest }: inputProps) => {
  const theme = useTheme()
  const [isPasswordVisible, setIsPasswordVisible] = useState(true)

  const handlePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible)

  return (
  <Container>
    <IconContainer>
      <Feather name={iconName} size={24} color={theme.colors.text_detail} />
    </IconContainer>
    
    <TextInput secureTextEntry={isPasswordVisible} {...rest} />

    <EyeIconContainer>
      <ChangePasswordVisibilityButton onPress={handlePasswordVisibility}>
        <Feather
          name={isPasswordVisible ? 'eye' : 'eye-off'}
          size={24}
          color={theme.colors.text_detail}
        />
      </ChangePasswordVisibilityButton>
    </EyeIconContainer>
  </Container>
)}