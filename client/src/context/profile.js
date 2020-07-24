import { createContext, useContext } from 'react'

export const ProfileContext = createContext()

export const useProfile = () => useContext(ProfileContext)