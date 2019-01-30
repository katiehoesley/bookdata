import React from 'react'

const BookData = ( props ) => {
    const { title, thumbnail, description } = props; 

    return(
        <div>
            <p>{ title }</p>   
            <img src={ thumbnail }/>
            <h3>Description: </h3>
            <p>{ description }</p>
        </div>
    )
}





export default BookData; 