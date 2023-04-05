import { faShirt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <div>
      { product.name }
      <FontAwesomeIcon icon={faShirt} />
      <Link to={ "/" + product.id }>Details</Link>
    </div>
  )
}
