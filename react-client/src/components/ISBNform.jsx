import React from 'react'

const ISBNform = ( props ) => {
    const { onSubmit, onChange } = props; 

    return (
        <div>
            <h1>Find Your Book</h1>
            <label>ISBN lookup </label>
                <input type="text" onChange={ onChange }></input>
                <input type="submit" value="Search" onClick={ onSubmit } />
        </div>
    )
}


export default ISBNform; 