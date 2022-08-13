import React from 'react'

import {MdViewList, MdEdit, MdDelete} from 'react-icons/md'
import { Link } from 'react-router-dom'

const ProductCard = () => {
  return (
   
    <tr>
    <td>
      22333
    </td>
    <td>
      slide
    </td>
    <td>
    <ul className='actions'>
        <li> <Link to="/view">
            <MdViewList style={{color: 'blue'}} /> 
            </Link>
        </li>
        <li> <Link to="/edit">
            <MdEdit style={{color: 'green'}} /> 
            </Link>
        </li>
        <li> <Link to="/delete">
            <MdDelete style={{color: 'red'}} /> 
            </Link>
        </li>
    </ul>
    </td>
  </tr>
  )
}

export default ProductCard