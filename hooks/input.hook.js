import { useState } from 'react'
import { useValidation } from './validation.hook.js'

/*
 * Hook for processing of input in components
 * Opcional use with hook useValidation.hook.js
 * */

export const useInput = (initialValue, validations) => {
	const [value, setValue] = useState(initialValue)
	const [isDirty, setIsDirty] = useState(false)

	const valid = useValidation(value, validations)

	const onChange = e => setValue(e.target.value)

	const onBlur = () => {
		setIsDirty(true)
	}

	return {
		value,
		isDirty,
		onChange,
		onBlur,
		...valid,
	}
}
