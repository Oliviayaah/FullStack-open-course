import React from 'react'
//  <Header course={course} />
function Header (props) {
    return (
        <>
            <h1>Half Stack application development
            {props.name}</h1>

        </>
    )
}

export default Header;