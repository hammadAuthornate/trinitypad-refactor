'use client'
import { useState, useEffect } from "react"

const useWindowDimensions = () => {
	if (typeof window == 'undefined') {
		return { width: 0, height: 0 }
	}

	const [width, setWidth] = useState(window.innerWidth)
	const [height, setHeight] = useState(window.innerHeight)

	const updateDimensions = () => {
		setWidth(window.innerWidth)
		setHeight(window.innerHeight)
	}

	useEffect(() => {
		window.addEventListener("resize", updateDimensions)
		return () => window.removeEventListener("resize", updateDimensions)
	}, [])

	return { width, height }
}

export default useWindowDimensions