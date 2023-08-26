import React, { useState } from 'react'
import {Button} from '@mui/material';
function Counter() {
    const[Val,SetVal]=useState(0);
    const addBtn=()=>{
        SetVal(Val+1)
    }
    const subBtn=()=>{
       if( Val>0)
       {
        SetVal(Val-1)
       }
else{
    alert("can't be less than zero");
}
    }
  return (
    <div className='center'>
    {Val}
      <div className="btn">
    
      <Button color="success" onClick={addBtn} variant="contained">+</Button>
    
        <Button color="error"  onClick={subBtn} variant="contained">-</Button>
      </div>

    </div>
  )
}

export default Counter
