import moment from 'moment'

export default function filterHolidays(holidays, filters) {
  let _filteredHolidays = []
  let _iteratingMonth
  let _iteratingDay
 
  for(let date in holidays) {
    if(holidays.hasOwnProperty(date)) {
      // adding + 1 to make moment.js month reading to be equal to actual month
      // numerical representation
      _iteratingMonth = moment(date).month() + 1
      _iteratingDay = moment(date).date()
      if(_iteratingMonth.toString() === filters.month || filters.month === 'all') {
        if(_iteratingDay.toString() === filters.day || filters.day === 'all') {
          if(holidays[date][0].public === filters.publicHolidays || filters.publicHolidays === false) {
            _filteredHolidays.push(holidays[date][0])
          }
        }        
      }
    }
  }
  return _filteredHolidays
}