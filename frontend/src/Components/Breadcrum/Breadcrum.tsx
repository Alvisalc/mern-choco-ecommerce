import React from 'react'
import './Breadcrum.css'
import { IoIosArrowForward } from "react-icons/io";

import { BreadcrumProps } from '../../Types/type';

export const Breadcrum: React.FC<BreadcrumProps> = (props) => {
  const { category, name } = props;
  return (
    <div className="breadcrum">
        HOME <IoIosArrowForward /> SHOP <IoIosArrowForward /> {category} <IoIosArrowForward /> {name}
    </div>
  )
}
