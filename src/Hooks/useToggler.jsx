
import { useState } from "react"

// Toggle custom hook - save re-writing code for toggles that are common in my app

//   defaultValue provides an initial state value (defaults to false if no provided value)

export function useToggler(defaultValue = false) {
    const [value, setValue] = useState(defaultValue)

    // Function to toggle the boolean value
    const toggle = () => setValue(prev => !prev)

    // Return currentstate and toggle function 
    return [value, toggle]

}