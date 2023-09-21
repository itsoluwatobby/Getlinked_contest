// @types.getLinked

type GetLinkedContextType = {
  openModal: boolean, 
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

type ErrorType = {
  // error: {
    response: {
      message: string,
      status: number
    }
  // }
}