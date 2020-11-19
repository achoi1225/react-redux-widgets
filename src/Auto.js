import React, {useState} from 'react'

const Auto = ({names}) => {
  const [inputVal, setInputVal] = useState('');

  return (
    <div className="auto">
      <input type="text" value={inputVal} onChange={(e)=> setInputVal(e.target.value)}/>
      <ul>
        <li>{inputVal}</li>
      </ul>
    </div>
  )
}

export default Auto
