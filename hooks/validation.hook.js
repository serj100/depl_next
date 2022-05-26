import { useEffect, useState } from 'react'

// Регулярка проверки email
export const emailRegExp = /^[\w\.\-]+@[\w\.\-]+\.[a-z]+$/g
// Регулярка проверки пароля
/*
 * (?=.*[0-9]) - содержит цифру?
 * (?=.*[A-Z]) - содержит прописную букву?
 * (?=.*[a-z]) - содержит строчную букву?
 * (?=.*[^A-Za-z0-9]) - символ не является буквенно-цифровым.
 */
export const reliabilityPasswordRegExp = /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).*/g
// Регулярка проверки номера телефона
export const phoneNumberRegExp =
	/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g

export const useValidation = (value, validations) => {
	const [isEmpty, setEmpty] = useState(true)
	const [minLengthError, setMinLengthError] = useState(false)
	const [maxLengthError, setMaxLengthError] = useState(false)
	const [isEmail, setIsEmail] = useState(false)
	const [isReliabilityPassword, setIsReliabilityPassword] = useState(false)
	const [isPhoneNumber, setIsPhoneNumber] = useState(false)

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'minLength': {
					value.length < validations[validation]
						? setMinLengthError(true)
						: setMinLengthError(false)
					break
				}
				case 'maxLength': {
					value.length > validations[validation]
						? setMaxLengthError(true)
						: setMaxLengthError(false)
					break
				}
				case 'isEmpty': {
					value ? setEmpty(false) : setEmpty(true)
					break
				}
				case 'isEmail': {
					emailRegExp.test(value) ? setIsEmail(true) : setIsEmail(false)
					break
				}
				case 'isReliabilityPassword': {
					reliabilityPasswordRegExp.test(value)
						? setIsReliabilityPassword(true)
						: setIsReliabilityPassword(false)
					break
				}
				case 'isPhoneNumber': {
					phoneNumberRegExp.test(value)
						? setIsPhoneNumber(true)
						: setIsPhoneNumber(false)
					break
				}
			}
		}
	}, [value])

	return {
		isEmpty,
		minLengthError,
		maxLengthError,
		isEmail,
		isReliabilityPassword,
		isPhoneNumber,
	}
}
