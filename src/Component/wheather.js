import React from 'react';

const Weather =(props)=>{

        return (
            <div className='info'>
              {
                props.city &&
                <p>
                    <label>City: </label>{props.city}
                </p>
              }
              {
                props.country && 
                <p>
                    <label>Country: </label>{props.country}
                </p>
              }
              {
                props.humidity && 
                <p>
                    <label>Humidity: </label>{props.humidity}
              </p>
              } 
              {
                props.tempreature &&
                <p>
                    <label>Tempreature: </label>{props.tempreature}
                </p>
              }
              {
                props.description &&
                <p>
                <label>Description: </label>{props.description}
                </p>
              } 
              {
                props.error && 
                <p>
                    <label>Error: </label>{props.error}
                </p>
              } 
            </div>
        )
    }
export default Weather;