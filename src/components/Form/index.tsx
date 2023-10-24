import { Controller, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
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
  const [today,setToday] =useState("");
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
    var date = new Date().toISOString().split('T')[0];
    var [year,month,day] = date.split('-')
    var formattedDate = `${day}/${month}/${year}`
    return formattedDate
  }

  function onsubmit(data:any){
    console.log(data);
    reset();
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
            alt={"champagne-cookie-cake"} 
            value={"champagne-cookie-cake"} 
            name={"cake"} 
            type={"radio"}
            control={control}
          />
        </div>

        <div className="col-md-6 mb-4">
          <CakeOption 
            image={cake3} 
            alt={"champagne-cookie-cake"} 
            value={"champagne-cookie-cake"} 
            name={"cake"} 
            type={"radio"}
            control={control}
          />
        </div>

        <div className="col-md-6 mb-4">
          <CakeOption 
            image={cake4} 
            alt={"champagne-cookie-cake"} 
            value={"champagne-cookie-cake"} 
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
            <Input control={control} name="last" placeholder="Last" isRequired={false}/>
          </div>

          <div className="col-md-6 mb-4">
            <Input control={control} name="date" labelName="Delivery date"  type="date" min={today} isRequired={false}/>
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

        <p>{eng["form-addres"]}</p>

        <div className="col-md-12 mb-3">
          <Input control={control} name="street-addres" placeholder="Street Address" type="text" isRequired={false}/>
        </div>

        <div className="col-md-12 mb-3">
          <Input control={control} name="street-address-line-2" placeholder="Street Address Line 2" type="text" isRequired={false}/>
        </div>

        <div className="col-md-6 mb-3">
          <Input control={control} name="city" placeholder="City" type="text" isRequired={false}/>
        </div>

        <div className="col-md-6 mb-3">
          <Input control={control} name="region" placeholder="Region" type="text" isRequired={false}/>
        </div>

        <div className="col-md-6 mb-3">
          <Input control={control} name="zip" placeholder="Postal / Zip Code" type="number" isRequired={false}/>
        </div>

        <div className="col-md-6 mb-3">
          <Controller
            name="country"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select {...field}>
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
