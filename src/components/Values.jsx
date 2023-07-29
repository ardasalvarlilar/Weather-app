import React from 'react'

const Values = ({response}) => {
  return (
    <>
      <h1>{response.name}</h1>
      <h2> {response.main.temp} </h2>
      <h3> {response.weather[0].description} </h3>
    </>
  )
}

export default Values