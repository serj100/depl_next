import { SWITCH_LANGUAGE } from '../types.js'
const defaultState = {
	status: 'en',
}

export const languageReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SWITCH_LANGUAGE:
			return {
				...state,
				status: action.payload,
			}
		default:
			return state
	}
}
