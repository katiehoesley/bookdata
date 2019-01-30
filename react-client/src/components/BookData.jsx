import React from 'react'

const BookData = ( props ) => {
    const { title, thumbnail } = props; 

    return(
        <div>
            <p>{ title }</p>   
            <img src={ thumbnail }/>
        </div>
    )
}





export default BookData; 