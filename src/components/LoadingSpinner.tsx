
type Props = {
  isLoading: boolean
}

export default function LoadingSpinner({ isLoading }: Props) {
  return (
    <div className={`absolute ${isLoading ? 'block' : 'hidden'} w-5 h-5 border-4 animate-spin left-32 top-8 z-10 rounded-full border-t-pink-700 border-b-gray-800 border-r-gray-300 border-l-gray-300`}/>
  )
}