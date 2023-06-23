import React from 'react';
import '../styles/sortnav.style.css';

import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';

const categories=["general","business",'sports','technology','startup','entertainment','science',"health"];

export const SortNav = ({selectCat, val}) => {
  const handleChange=(event)=>{
    let catval = event.target.value;
    //window.alert(event.target.value);
    selectCat(catval);
  }
  
  return (
    <nav className='sortNav'>
        <span className='categPart'>
        Category :
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={val}
    label="Category"
    onChange={(e)=>handleChange(e)}>
    {categories.map(cat=>(
        <MenuItem className='catOpt' key={cat} value={cat}> {cat} </MenuItem>
      ))}
  </Select>
        </span>
    </nav>
  )
}
