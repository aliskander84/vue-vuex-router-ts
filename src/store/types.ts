export type TUsers = TUser[]

export type TUser = {
  name: TName,
  id: TId,
  picture: TPicture
}

export type TName = {
  title: string,
  first: string,
  last: string
}

export type TId = {
  name: string,
  value: string
}

export type TPicture = {
  large: string,
  medium: string,
  thumbnail: string
}