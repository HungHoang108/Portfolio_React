import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Button from 'react-bootstrap/Button';
import './button.styles.scss'

const UniButton = ({buttonName, variant, icon}) => {
  return (
    <div>
        <Button className='unibutton' variant={variant}>{icon} {buttonName}</Button>
    </div>
  )
}

export default UniButton