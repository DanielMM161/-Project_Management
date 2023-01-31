export interface IUserAuth {
  email: string
  password: string
}

export interface IUserRegister extends IUserAuth {
  fullName: string
}

export interface IUser {
  fullName: string
  email: string
  projects: string[]
}

interface IUserState {
  user: IUser | null
  isLoading: boolean
}

export const userInitialState: IUserState = (() => {
  const data = JSON.parse(localStorage.getItem('user') ?? 'null')
  return {
      user: data,
      isLoading: false
  }
})()