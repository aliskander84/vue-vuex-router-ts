export const UPDATE_USERS = 'updateUsers'
export const UPDATE_SEARCH_USERS = 'updateSearchUsers'
export const UPDATE_SEARCH_TEXT = 'updateSearchText'
export const UPDATE_IS_LOADING = 'updateIsLoading'

export type TUsers = TUser[]

export type TUser = {
  name: TName;
  id: TId;
  picture: TPicture;
}

export type TName = {
  title: string;
  first: string;
  last: string;
}

export type TId = {
  name: string;
  value: string;
}

export type TPicture = {
  large: string;
  medium: string;
  thumbnail: string;
}