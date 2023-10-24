import { Controller, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

import "./styles.scss";
import Input from "../Input";
import eng from "../../text/eng";

import CakeOption from "../CakeOption";

import cake1 from '../../assets/cake1.jpg'
import cake2 from '../../assets/cake2.jpg'
import cake3 from '../../assets/cake3.jpg'
import cake4 from '../../assets/cake4.jpg'

function Form() {
  const {control, handleSubmit,reset} = useForm();
  const [today,setToday] =useState<string>("");
  const[hour,setHour] = useState<string>("");
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(()=>{
    setToday(formatCurrentDate());
    setCountriesList();
  },[]);

  function setCountriesList(){
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
      })
      .catch(error => {
        console.error('Erro ao buscar países:', error);
      });
  }

  function formatCurrentDate(){
    let date = new Date().toISOString().split('T')[0];
    return date;
  }

  function getTime(){
    const dateAndHour = new Date();
    let formatedHour = `${String(dateAndHour.getHours()).padStart(2, '0')}:${String(dateAndHour.getMinutes()).padStart(2, '0')}`;
    setHour(formatedHour);
  }

  function validateFormFields(data:any){
    let emptyField;

    for(let key in data){
      if (data[key] === null || data[key] === undefined || data[key] === '') {
        emptyField = key 
      }
    }
    
    if(
        emptyField === 'name' ||
        emptyField === 'last' ||
        emptyField === 'email'|| 
        emptyField === 'phone'||
        emptyField === 'last' ||
        emptyField === 'region'||
        emptyField === 'street-addres'||
        emptyField === 'country'||
        emptyField === 'city'||
        emptyField === 'zip'
      ){
        toast.error(`${eng["error-complete-required-fields"]}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    }else if(data.cake === ''){
      toast.error(`${eng["error-select-an-item"]}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }else if(data.date < today){
      toast.error(`${eng["error-select-future-date"]}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }else if(data.time < hour && data.time !==''){
      toast.error(`${eng["error-select-future-hour"]}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }else{
      registerOrder(data);
    }
  }

  async function registerOrder(data:any){
    await fetch('https://jsonplaceholder.typicode.com/posts',{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(async (response) => {
      if(response.status == 201){
        const responseData = await response.json();
        
        console.log(response.status)
        console.log(responseData);

        toast.success(`${eng.succes}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        reset();
      }else{
        toast.error(`${eng.error}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    })
  }

  async function onsubmit(data:{}){
    getTime();
    validateFormFields(data);
  }

  return (
    <form 
      onSubmit={handleSubmit(onsubmit)} 
      className="mt-4"
    >
      <p className="mb-4">{eng["form-choose-your-cake"]}<span>*</span></p>
      <div className="row">

        <div className="col-md-6 mb-4">
          <CakeOption 
            image={cake1} 
            alt={"champagne-cookie-cake"} 
            value={"champagne-cookie-cake"} 
            name={"cake"} 
            type={"radio"}
            control={control}
          />
        </div>

        <div className="col-md-6 mb-4">
          <CakeOption 
            image={cake2} 
            alt={"strawberry-cake"} 
            value={"strawberry-cake"} 
            name={"cake"} 
            type={"radio"}
            control={control}
          />
        </div>

        <div className="col-md-6 mb-4">
          <CakeOption 
            image={cake3} 
            alt={"chocolate-cake"} 
            value={"chocolate-cake"} 
            name={"cake"} 
            type={"radio"}
            control={control}
          />
        </div>

        <div className="col-md-6 mb-4">
          <CakeOption 
            image={cake4} 
            alt={"rainbow-cake"} 
            value={"rainbow-cake"} 
            name={"cake"} 
            type={"radio"}
            control={control}
          />            
        </div> 

      </div> 

      <div className="order-info mt-3">
        <p>{eng["form-order-information"]}</p>

        <div className="row">
          <div className="col-md-6 mb-4">
            <Input control={control} name="name" labelName="Name" placeholder="First" isRequired={true}/>
          </div>

          <div className="col-md-6 d-flex align-items-end mb-4">
            <Input control={control} name="last" placeholder="Last" isRequired={true}/>
          </div>

          <div className="col-md-6 mb-4">
            <Input control={control} name="date" labelName="Delivery date" type="date" min={today} isRequired={true}/>
          </div>

          <div className="col-md-6 mb-4">
            <Input control={control} name="time" labelName="Prefered delivery time" type="time" isRequired={false}/>
          </div>

          <div className="col-md-6 mb-4">
            <Input control={control} name="phone" labelName="Phone" placeholder="### ### ###" type="number" isRequired={true}/>
          </div>

          <div className="col-md-6 mb-4">
            <Input control={control} name="email" labelName="Email" type="text" isRequired={true}/>
            <p>{eng["form-order-email-info"]}</p>
          </div>
        </div>
      </div>

      <div className="addres row">

        <p>{eng["form-addres"]}<span>*</span></p>

        <div className="col-md-12 mb-3">
          <Input control={control} name="street-addres" placeholder="Street Address" type="text" isRequired={true}/>
        </div>

        <div className="col-md-12 mb-3">
          <Input control={control} name="street-address-line-2" placeholder="Street Address Line 2" type="text" isRequired={true}/>
        </div>

        <div className="col-md-6 mb-3">
          <Input control={control} name="city" placeholder="City" type="text" isRequired={true}/>
        </div>

        <div className="col-md-6 mb-3">
          <Input control={control} name="region" placeholder="Region" type="text" isRequired={true}/>
        </div>

        <div className="col-md-6 mb-3">
          <Input control={control} name="zip" placeholder="Postal / Zip Code" type="number" isRequired={true}/>
        </div>

        <div className="col-md-6 mb-3">
          <Controller
            name="country"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select {...field} required>
                <option value="Country">Country</option>
                {countries.map((country) => (
                  <option key={country.cca2} value={country.name.common}>
                    {country.name.common}
                  </option>
                ))}
              </select>
            )}
          />
        </div>
      </div>

      <div className="text-center">
        <button className="px-5 py-2 rounded-pill text-light" type="submit">Order</button>
      </div>
    </form>
  );
}

export default Form;
