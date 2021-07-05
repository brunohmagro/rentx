import { FunctionComponent, SVGAttributes } from 'react'

import SpeedSvg from '../assets/speed.svg'
import AccelerationSvg from '../assets/acceleration.svg'
import ForceSvg from '../assets/force.svg'
import GasolineSvg from '../assets/gasoline.svg'
import EnergySvg from '../assets/energy.svg'
import HybridSvg from '../assets/hybrid.svg'
import ExchangeSvg from '../assets/exchange.svg'
import PeopleSvg from '../assets/people.svg'
import CarSvg from '../assets/car.svg'

interface AcessoryPros {
  [key: string]: FunctionComponent<SVGAttributes<SVGElement>>
}

const acessories: AcessoryPros = {
  speed: SpeedSvg,
  acceleration: AccelerationSvg,
  turning_diameter: ForceSvg,
  electric_motor: EnergySvg,
  gasoline_motor: GasolineSvg,
  hybrid_motor: HybridSvg,
  exchange: ExchangeSvg,
  seats: PeopleSvg,
  car: CarSvg,
}

export const getAcessoryIcon = (type: string): FunctionComponent<SVGAttributes<SVGElement>> => {
  return acessories[type] || CarSvg
}
