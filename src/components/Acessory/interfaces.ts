import React, { FunctionComponent, SVGAttributes } from 'react'
import { SvgProps } from 'react-native-svg'

export interface AcessoryProps {
  name: string
  icon: FunctionComponent<SVGAttributes<SVGElement>>
}
