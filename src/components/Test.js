import React from 'react'

export default function Test(props) {
    console.log(props)
  return (
    <div>Test</div>
  )
}

/*
<Test 
  number={10} 
  string="teste" 
  visible 
  data={{a: 1, b: 2, c: 3}}
  onClick={() =>{
    console.log('click')
  }}
/>
*/
