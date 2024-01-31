import React from 'react'
import './CSS/Success.css'

export const Success = () => {
  return (
    <div className="success">
        <div className="container mt-5">
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Success!</h4>
          <p>Your order has been successfully processed.</p>
          <hr />
          <p className="mb-0">Thank you for shopping with us!</p>
        </div>
      </div>
    </div>
  
  )
}
