import { useEffect, useState } from "react"

export const useCounter = (end, isInView, duration = 1500) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!isInView) return

        let start = 0
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
            start += increment
            if (start >= end) {
                setCount(end)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, 16)

        return () => clearInterval(timer)
    }, [isInView, end, duration])

    return count
}