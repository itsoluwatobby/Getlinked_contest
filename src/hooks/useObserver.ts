import { useCallback, useState, useRef } from 'react'

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
  const observer = useRef<IntersectionObserver>(null)
  const observerRef = useCallback((node: HTMLElement) => {
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => { // eslint-disable-line
      if(entries[0].isIntersecting) setIsIntersecting('SWITCH')
      else setIsIntersecting('STOP')
    },
    {
      threshold: threshold,
      rootMargin: screenPosition,
    }
    )
    if(node) observer.current.observe(node as unknown as Element)
  }, [screenPosition, threshold])

  return {isIntersecting, observerRef}
}