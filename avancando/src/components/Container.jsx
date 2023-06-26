import React from 'react'

const Container = ({children}) => {
  return (
    <div>
        <h2>Title of container</h2>
        {children}
    </div>
  )
}

export default Container