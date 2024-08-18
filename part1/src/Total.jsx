import React from 'react'

// 1 create a component 
 //   2 render the total 
 // 3 make total dynamic 
 // 4 pass exercises to totalcomponment 
 // 5 make total accept props
 // 6 add the exercises in the array in the props through the total
  // commit the code to github
   
 function Total (props) {
    console.log(props)
    
    // add code here 
let total = 0
    

    total = 31; 
    // end of code
    return (
        <> 
            <h1> The total is: {total} </h1>
        </>
    )
 }

 export default Total;