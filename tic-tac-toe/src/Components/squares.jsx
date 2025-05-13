import React from "react";

const Squares = ({value, handleClick})=>{

    return (
        <>
            <button className="square" onClick={handleClick}>{value}</button>
        </>
    )
}

export default Squares;