import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Stations extends Component {
    constructor(props) {
        super(props);
        
    }    
    render() {
                return (
                    <div>
                      <h3>Stations</h3>
                      <div className="list-group">
                      {
                        Object.keys(this.props.stations).map(genre => {
                          return (
                            <div className="list-group-item" key={genre}>
                              <Link to={`/stations/${genre}`}>{genre}</Link>
                            </div>
                          );
                        })
                      }
                      </div>
                    </div>
                  );
    }
}

export default Stations;