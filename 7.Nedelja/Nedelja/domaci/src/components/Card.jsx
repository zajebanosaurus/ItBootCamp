import React from 'react'

const Card = ({url, text}) => {
    return (
        <div>
            <img src={url} />
            <p>{text}</p>
        </div>
    )
}
export default Card