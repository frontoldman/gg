import { combineReducers } from 'redux'
import { 
	USER_START_ADD, 
	USER_START_EDIT,
	USER_ADD_SUCCESS,
	USER_STATUS_RESET,
	USER_LIST_GET,
	USER_DETAIL,
	USER_DELETE_START,
	USER_DELETE_SUCCESS,
	USER_DELETE_RESET } from '../../actions/user/user'

function editFetch(state = {isFetching: false, data: null}, action){
	switch(action.type){
		case USER_START_ADD:
			return { ...state, isFetching: true}
		case USER_ADD_SUCCESS:
			return { isFetching: false, data: action.data }
		case USER_START_EDIT:
			return { isFetching: false, data: action.data }
		case USER_STATUS_RESET:
			return { isFetching: false, data: null }
	}
	return state;
}

function listFetch(state = {list: []}, action){
	switch(action.type){
		case USER_LIST_GET:
			return {list: action.data}
			break;
	}

	return state;
}

function deleteFetch(state = {deletingStatus: -1 }, action){
	switch(action.type){
		case USER_DELETE_START:
			return {deletingStatus: 0}
		case USER_DELETE_SUCCESS:
			return {deletingStatus: 1}
		case USER_DELETE_RESET:
			return {deletingStatus: -1 }
	}

	return state;
}

function detailFetch(state = {data: null }, action){
	switch(action.type){
		case USER_DETAIL:
			return {data: action.data}
		break;
	}

	return state;
}

export default combineReducers({
    editFetch,
    listFetch,
    deleteFetch,
    detailFetch
})