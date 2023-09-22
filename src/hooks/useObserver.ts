import { useCallback, useState } from 'react'

type useObserverProps = {
  screenPosition: string,
  threshold?: number
}

/**
 * @description 
 * @param screenPosition 
 * @param threshold
 */

export default function useObserver({ screenPosition, threshold=0 }: useObserverProps) {
  const [isIntersecting, setIsIntersecting] = useState<IsIntersectingType>('SWITCH')
  const observerRef = useCallback((node: HTMLElement) => {
    const observer = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting) setIsIntersecting('SWITCH')
      else setIsIntersecting('STOP')
    },
    {
      threshold: threshold,
      rootMargin: screenPosition,
    }
    )
    if(node) observer.observe(node as unknown as Element)
    // if(observer) observer.disconnect()
  }, [screenPosition, threshold])

  return {isIntersecting, observerRef}
}