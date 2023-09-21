import { createContext, useState } from "react";

export const GetLinkedContext = createContext<GetLinkedContextType | null>(null)

export const GetLinkedContextProvider = ({ children }: {children: React.ReactNode}) => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const value = {
    openModal, setOpenModal
  }

  return (
    <GetLinkedContext.Provider value={value}>
      {children}
    </GetLinkedContext.Provider>
  )
}