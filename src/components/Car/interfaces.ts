export interface Rent {
  period: string
  price: number
}

export interface CarProps {
  brand: string
  name: string
  rent: Rent
  thumbnail: string
}
