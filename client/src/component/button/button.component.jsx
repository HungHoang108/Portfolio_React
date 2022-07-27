import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Button from 'react-bootstrap/Button';
import './button.styles.scss'

const UniButton = ({buttonName, variant}) => {
  return (
    <div>
        <Button className='unibutton' variant={variant}>{buttonName}</Button>
    </div>
  )
}

export default UniButton