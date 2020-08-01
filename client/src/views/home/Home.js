import React from 'react'

export function Home ({ title }) {
  return (
    <div className='home'>
      <h1>Welcome to {title}</h1>
      <h2>Here be dragons...</h2>
    </div>
  )
}

Home.defaultProps = {
  title: 'Boxinator'
}
