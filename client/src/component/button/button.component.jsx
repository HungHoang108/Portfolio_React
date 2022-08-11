import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Button from 'react-bootstrap/Button';
import './button.styles.scss'

const UniButton = ({buttonName, variant, icon, url}) => {


  return (
    <div>
    
      <Button className='unibutton' variant={variant} href={url} target="_blank">{icon}  {buttonName}</Button>
        
    </div>
  )
}

export default UniButton