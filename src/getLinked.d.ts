// @types.getLinked

type GetLinkedContextType = {
  openModal: boolean, 
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

type IsIntersectingType = 'SWITCH' | 'STOP'

type ErrorResponseType = {
  message: string,
  response: {
    data: {[index: string]: string},
    status: number
  }
}
