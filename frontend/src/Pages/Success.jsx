import React from 'react'
import './CSS/SuccessCancel.css'

export const Success = () => {
  return (
    <div className="container mt-5"> {/* Use Bootstrap container class */}
    <div className="alert alert-success" role="alert"> {/* Use Bootstrap alert class */}
      <h4 className="alert-heading">Success!</h4>
      <p>Your order has been successfully processed.</p>
      <hr />
      <p className="mb-0">Thank you for shopping with us!</p>
    </div>
  </div>
  )
}
