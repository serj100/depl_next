import { SWITCH_BURGER } from '../types.js'
const defaultState = {
	status: false,
}

export const burgerReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SWITCH_BURGER:
			return {
				...state,
				status: action.payload,
			}
		default:
			return state
	}
}
