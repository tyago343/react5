import React from 'react';
import { Link } from 'react-router-dom';
  
export default (props) => {
    console.log(props)
    return (
        <div>
            <h3>Stations</h3>
            <div className="list-group">
                {
                Object.keys(props.stations).map(station => {
                    return (
                    <div key={station} className="list-group-item" key={station}>
                        <Link to={`/station/${station}`}>{station}</Link>
                    </div>
                    );
                })
                }
            </div>
        </div>
    )
}