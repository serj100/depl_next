import { SET_USER_INFO } from '../types'

const defaultState = {}

export const userReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_USER_INFO:
			return {
				...action.payload,
			}
		default:
			return state
	}
}
