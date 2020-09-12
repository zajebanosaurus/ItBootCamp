import React from 'react'

const InputSelect = ({allLaunches, setYear}) => {
    
    const uniqueYears = new Set(allLaunches.map(el => {
        return el.launch_year
    }))

    const handleChange = (e) => {
        setYear(e.target.value)
    }
    return (
        <select className="select" name="Years" onChange={handleChange}>
            <option>All Years</option>
            {[...uniqueYears].map( el => <option key={el.launch_date_unix}>{el}</option>)}
        </select>
    )
}

export default InputSelect