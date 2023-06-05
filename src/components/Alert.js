import React from 'react'

export default function Alert(props) {

    const capitalize = (str) => {
        const lower = str.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{height: '50px'}}>
            {props.alert && <div>
                <div className={`alert alert-dismissible fade show pb-1`} role="alert" style={{backgroundColor : props.alert.type=="success"? "#92e69b" : "#FA9884"}}>
                    <p className='h6'><strong>{capitalize(props.alert.type)}! </strong>{props.alert.msg}</p>
                </div>
            </div>}
        </div>
    )
}
 