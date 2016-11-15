import filterHolidays from '../filters/holiday_filter.js'
import { combineReducers } from 'redux'
import {
  REQUEST_HOLIDAYS,
  RECEIVE_HOLIDAYS,
  SET_FILTERS,
  APPLY_FILTERS,
  HANDLE_ERROR
} from './actions'

const initialState = {
  holidays: [],
  filteredHolidays: [],
  isFetching: false,
  filters: {
    month: 'all',
    day: 'all',
    publicHolidays: true
  }
}

const holidays = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_HOLIDAYS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_HOLIDAYS:
      return {
        ...state,
        isFetching: false,
        holidays: action.holidays
      }
    case SET_FILTERS:
      return {
        ...state,
        filters: Object.assign(state.filters, action.filters)
      }
    case APPLY_FILTERS:
      return {
        ...state,
        filteredHolidays: filterHolidays(state.holidays, state.filters)
      }
    default:
    return { ...state }
  }
}

export default holidays