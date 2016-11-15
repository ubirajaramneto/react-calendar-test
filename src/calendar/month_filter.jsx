import React from 'react'

const MonthFilter = ({handler}) => (
  <div>
    <legend>Mês:</legend>
    <select onChange={handler}>
      <option value="all">Todos os meses</option>
      <option value="1">Janeiro</option>
      <option value="2">Fevereiro</option>
      <option value="3">Março</option>
      <option value="4">Abril</option>
      <option value="5">Maio</option>
      <option value="6">Junho</option>
      <option value="7">Julho</option>
      <option value="8">Agosto</option>
      <option value="9">Setembro</option>
      <option value="10">Outubro</option>
      <option value="11">Novembro</option>
      <option value="12">Dezembro</option>
    </select>
  </div>
)

export default MonthFilter