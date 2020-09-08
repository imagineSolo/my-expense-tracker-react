import React from 'react'

export const Goal = () => {
    return (
        <div className="goal">
            <h3>Your Goal</h3>
            <form className='goal-form'>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Goal name..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" placeholder="Enter amount..." />
                </div>
                <button className="btn-goal">Add</button>
            </form>
            <p>Your goal is completed in x.x%</p>
        </div>
    )
}
