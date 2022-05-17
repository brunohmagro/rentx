import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;

  margin: ${RFValue(4)}px 0;

  align-items: center;
`

export const IconContainer = styled.View`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;

  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.colors.background_secondary};

  border-right-width: ${RFValue(2)}px;
  border-right-color: ${({theme}) => theme.colors.background_primary};
`

export const TextInput = styled.TextInput`
  flex: 1;

  background-color: ${({theme}) => theme.colors.background_secondary};
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.primary.regular};
  font-size: ${RFValue(15)}px;

  padding: 0 ${RFValue(16)}px;

  height: ${RFValue(55)}px;
`

export const EyeIconContainer = styled.View`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;

  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.colors.background_secondary};
`

export const ChangePasswordVisibilityButton = styled(BorderlessButton)``
