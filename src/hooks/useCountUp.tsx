import { useEffect } from 'react'

type UseCountUpProps = {
  start: number
  end: number
  duration: number
  elementId: string
}

export function useCountUp({
  start,
  end,
  duration,
  elementId,
}: UseCountUpProps) {
  useEffect(() => {
    const element = document.getElementById(elementId)
    if (!element) return

    const increment = (i: number, max: number, element: HTMLElement) => {
      if (i > max) return
      setTimeout(() => {
        element.innerText = Math.round(i).toString()
        increment(i + max / (duration / 10), max, element)
      }, 10)
    }

    increment(start, end, element)
  }, [start, end, duration, elementId])
}
