import React from "react";
import {Spinner} from "react-bootstrap";

const Loader = () =>{
    return(
        <div>
            <Spinner
                animation="grow"
                variant="dark"
                role='status'
                style = {{
                    height:"100px",
                    width:"100px",
                    margin:"auto",
                    display:"block"
                }}
            >
                <span className='sr-only'></span>

            </Spinner>
        </div>
    )
}
export default Loader