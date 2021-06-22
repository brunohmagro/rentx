import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

import { RFValue } from 'react-native-responsive-fontsize'

import { ImageIndexProps } from './interfaces'

export const Container = styled.View`
  width: 100%;
  padding: 0 ${RFValue(24)}px 0 0;
`
export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
`

export const ImageIndex = styled.View<ImageIndexProps>`
  width: ${RFValue(6)}px;
  height: ${RFValue(6)}px;

  background: ${({ theme, active }) => (active ? theme.colors.title : theme.colors.shape)};

  border-radius: ${RFValue(3)}px;

  margin-left: ${RFValue(2)}px;
`

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: ${RFValue(132)}px;

  justify-content: center;
  align-items: center;
`

export const CarImage = styled.Image`
  width: ${RFValue(280)}px;
  height: ${RFValue(132)}px;
`
