/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react'

export function useDebaunce(fn:any, delay: any) {
  const timeoutRef = useRef<null | number>(null)

  function debauncedFunction(...args: any) {
    
    //@ts-expect-error: ignore error
    window.clearTimeout(timeoutRef.current)

    timeoutRef.current = window.setTimeout(() => {
      fn(args[0])
    }, delay)
  }

  return debauncedFunction
}
