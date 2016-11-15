import React from 'react'

const PublicFilter = ({handler, publicHolidays}) => (
  <div>
    <legend>Apenas feriados públicos:</legend>
    <input type="checkbox" onChange={handler} checked={publicHolidays} />
  </div>
)

export default PublicFilter