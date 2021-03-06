import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { burgerReducer } from './reducers/burgerReducer'
import { languageReducer } from './reducers/languageReducer'
import { userReducer } from './reducers/userReducer'

const rootReducer = combineReducers({
	language: languageReducer,
	burgerStatus: burgerReducer,
	userInfo: userReducer,
})

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
)
