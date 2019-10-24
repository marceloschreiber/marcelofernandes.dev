import { useEffect, useState } from "react"

export function useScrollIndicator() {
  const [value, setValue] = useState(0)

  useEffect(() => {
    function listener() {
      const windowScroll =
        document.body.scrollTop || document.documentElement.scrollTop
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scrolled = (windowScroll / height) * 100

      setValue(scrolled)
    }

    window.addEventListener("scroll", listener)
    return function() {
      window.removeEventListener("scroll", listener)
    }
  }, [])

  return value
}
