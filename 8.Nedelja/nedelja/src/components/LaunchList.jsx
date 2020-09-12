import React from 'react'

const LaunchList = ({allLaunches, year}) => {
    
    return ( 
        <>
        <div className="launch-list">
            {allLaunches.filter(el => year === 'All Years' ? el : el.launch_year.includes(year)).map( el =>
                <div className="launch" key={el.launch_date_unix}>
                    <div className="inner-div-0">
                        <img src={el.links.mission_patch} alt={el.mission_name}/>
                    </div>
                    <div className="inner-div-1">
                        <span>{el.rocket.rocket_name}</span>
                    </div>
                    <div className="inner-div-2">
                        <span>{el.launch_year}</span>
                    </div>
                </div>
            )}
        </div>
        </>
    )
}
export default LaunchList