import axios from 'axios'
import {apiKey, apiUrl} from '../config/api.js'

export const REQUEST_HOLIDAYS = 'REQUEST_HOLIDAYS'
export const RECEIVE_HOLIDAYS = 'RECEIVE_HOLIDAYS'
export const FILTER_BY_MONTH = 'FILTER_BY_MONTH'
export const HANDLE_ERROR = 'HANDLE_ERROR'
export const SET_FILTERS = 'SET_FILTERS'
export const APPLY_FILTERS = 'APPLY_FILTERS'

// Fetch all holidays from a country
// defaults are holidays for Brazil for the 2015 calendar due to API restrictions
export const fetchHolidays = (country = 'BR', year = 2015) => dispatch => {
  console.log('is dispatching')
  dispatch(requestHolidays())
  return axios.get(`${apiUrl}key=${apiKey}&country=${country}&year=${year}`)
  .then(result => {
    dispatch(receiveHolidays(result.data.holidays))
    dispatch(applyFilters())
  })
}

export const setFilters = filters => ({
  type: SET_FILTERS,
  filters
})

export const applyFilters = () => ({
  type: APPLY_FILTERS
})

const requestHolidays = () => ({
  type: REQUEST_HOLIDAYS
})

const receiveHolidays = holidays => ({
  type: RECEIVE_HOLIDAYS,
  holidays
})

const handleErrors = error => ({
  type: HANDLE_ERROR,
  err
})