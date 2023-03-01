import React from 'react'
import './Container.css'

type ContainerProps = {children?: JSX.Element}

export const Container = ({children}: ContainerProps) => {
  return (
    <div className='my-container'>
        {children}
    </div>
    
  )
}
