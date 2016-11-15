import React from 'react'

const Calendar = ({holidays}) => (
  <div className="calendar-container">
    {holidays.length > 0
      ? <ul>
          {holidays.map((holiday, i) => 
            <li key={i}>
              <p>{holiday.date}</p>
              <p>{holiday.name}</p>

            </li>
          )}
        </ul>
      : <p>Nenhum feriado foi encontrado para esta data</p>
    }   
  </div>
)

export default Calendar
