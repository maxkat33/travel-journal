import React from 'react'

// Components
import Header from './components/Header/Header'
import Entry from './components/Entry/Entry'

// data
import data from './data.js'

const App = () => {
  const entries = data.map((entry)=> {
    return (
      <Entry 
      key={entry.id}
      entry={entry}
      />
      )
    })
  return (
    <div>
      <Header />
      <div className='hero'>
        {entries}
      </div>
    </div>
  )
}

export default App