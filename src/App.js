
import React,{Component} from "react";
import Form from "./Component/Form";
import Weather from "./Component/wheather";

const API_KEY="e36ed364400282e43250b6c4c0274d44";
//http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component{
 state={
  tempreature:'',
  city:'',
  country:'',
  humidity:'',
  description:'',
  message:'',
 }
 
  getWeather= async(e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`);
    const data= await api.json();

    if (city && country) {
      
      if(api.status === 200){
        
        this.setState({

          tempreature:data.main.temp,
          city:data.name,
          country:data.sys.country,
          humidity:data.main.humidity,
          description:data.weather[0].description,
        })
      }else{
        this.setState({

          message : data.message
        })
      }
    
    }else{
      this.setState({
        message : data.message
      })

    }
   

  }
  render() {
    return (
       <div className="wrapper">
          <div className="form-container">
            <div className="logo"></div>
            <Form getWeather={this.getWeather}/>
            <Weather
            tempreature={this.state.tempreature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            message = {this.state.message}
            />
          </div>
       </div>
    );
  }
}


export default App;