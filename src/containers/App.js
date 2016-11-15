import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchHolidays, applyFilters, setFilters } from '../calendar/actions'
import Calendar from '../calendar/calendar.jsx'
import CountryFilter from '../calendar/country_filter.jsx'
import MonthFilter from '../calendar/month_filter.jsx'
import DayFilter from '../calendar/day_filter.jsx'
import PublicFilter from '../calendar/public_filter.jsx'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchHolidays())
  }

  handleFetchHolidays = e => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(fetchHolidays())
  }

  handleFilterByCountry = e => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(fetchHolidays(e.target.value))
    dispatch(applyFilters())
  }

  handleFilterByMonth = e => {
    e.preventDefault()
    let monthFilter = {
      month: e.target.value
    }
    const { dispatch } = this.props
    dispatch(setFilters(monthFilter))
    dispatch(applyFilters())
  }

  handleFilterByDay = e => {
    e.preventDefault()
    let dayFilter = {
      day: e.target.value
    }
    const { dispatch } = this.props
    dispatch(setFilters(dayFilter))
    dispatch(applyFilters())
  }

  handlePublicFilter = e => {
    let publicFilter = {
      publicHolidays: e.target.checked
    }
    const { dispatch } = this.props
    dispatch(setFilters(publicFilter))
    dispatch(applyFilters())
  }

  render() {
    const { holidays, isFetching, filteredHolidays } = this.props
    return (
      <div>
        <fieldset>
          <legend>Filtros</legend>
          <CountryFilter handler={this.handleFilterByCountry}/>
          <MonthFilter handler={this.handleFilterByMonth}/>
          <DayFilter handler={this.handleFilterByDay} />
          <PublicFilter handler={this.handlePublicFilter} publicHolidays={this.props.filters.publicHolidays} />
        </fieldset>
        <Calendar holidays={filteredHolidays} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {isFetching, filteredHolidays, filters } = state
  return {
    isFetching,
    filteredHolidays,
    filters
  }
}

export default connect(mapStateToProps)(App)
