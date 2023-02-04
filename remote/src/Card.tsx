import React from "react";

export default () => {
    const onAction = () => {
        console.log('ACTION');
    }

    return (
        <div className="card">
            <div className="card-image">IMG</div>
            <div className="card-content">
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, animi. Lorem, ipsum dolor.</span>
                <button className="card-action-btn" onClick={onAction}>Action</button>
            </div>
        </div>
    )
}