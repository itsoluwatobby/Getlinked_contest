import { useContext } from "react";
import { GetLinkedContext } from "../context/GetLinkedContext";


export default function useGetLinkedContext() {
  return useContext(GetLinkedContext)
}