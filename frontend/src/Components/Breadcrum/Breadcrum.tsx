import React from 'react'
import './Breadcrum.css'
import { IoIosArrowForward } from "react-icons/io";
import { BreadcrumProps } from '../../Types/type';

export const Breadcrum: React.FC<BreadcrumProps> = ({ category, name }) => {
  return (
    <div className="breadcrum">
        <span>Home</span>
        <IoIosArrowForward />
        <span>Shop</span>
        <IoIosArrowForward />
        <span>{category}</span>
        <IoIosArrowForward /> 
        <span>{name}</span>
    </div>
  )
}
