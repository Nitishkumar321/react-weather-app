import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import DisplayWeather from './DisplayWeather';
import env from "react-dotenv";

function Weather() {
    

    const [form, setForm] = useState({
        city: '',
        country: '',
    })

    const [weather, setWeather] = useState([])

    async function getWeatherData(e){
        e.preventDefault()
        if(form.city === ""){
            alert("Add values")
        }else{
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},&${form.country}&appid=${env.APIKEY}`).then(res=>{
                console.log(res);
                setWeather({data: res.data})
            }).catch(error => {
                console.log(error);
                setWeather({data: "Error retreiving data"})
            })
        }
    }

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        if (name === 'city') {
            setForm({ ...form, city: value })
        }

        if (name === 'country') {
            setForm({ ...form, country: value })
        }
    }
    return (

        // <Container>
        //     <Form>
        //         <Form.Group controlId="form.Name">
        //             <Form.Label>Name</Form.Label>
        //             <Form.Control type="text" placeholder="Enter name" />
        //         </Form.Group>
        //         <Form.Group controlId="form.Email">
        //             <Form.Label>Email address</Form.Label>
        //             <Form.Control type="email" placeholder="name@example.com" />
        //         </Form.Group>
        //         <Form.Group controlId="form.Textarea">
        //             <Form.Label>Comment</Form.Label>
        //             <Form.Control as="textarea" rows={3} />
        //         </Form.Group>
        //     </Form>
        // </Container>
        <div className="weather">
            <span className="title">Weather App</span>
            <form>
                <input type="text" name="city" placeholder="city" onChange={e => handleChange(e)}/>
                <input type="text" name="country" placeholder="country" onChange={e => handleChange(e)}/>
                <button className="getweather" onClick={e => getWeatherData(e)}>Submit</button>
            </form>

            {
                weather.data !== undefined ? (
                    <div>
                        <DisplayWeather data={weather.data} />
                    </div>
                ): null
            }
        </div>
    )
}

export default Weather
