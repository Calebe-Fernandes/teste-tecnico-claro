import { Controller, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';

import "./styles.scss";
import Input from "../Input";
import eng from "../../text/eng";

import CakeOption from "../CakeOption";

import cake1 from '../../assets/cake1.jpg'
import cake2 from '../../assets/cake2.jpg'
import cake3 from '../../assets/cake3.jpg'
import cake4 from '../../assets/cake4.jpg'


interface cakeOrder{
  cake:string,
  city:string,
  country:string,
  date:string,
  email:string,
  name:string,
  last:string,
  phone:string,
  region:string,
  streetAddress:string,
  streetAddressLine2:string,
  time:string,
  zipCode:string,
  [key: string]: string;
}

function Form() {  
  const {control, handleSubmit,reset} = useForm();
  const [today,setToday] =useState<string>("");
  const[hour,setHour] = useState<string>("");
  const [countries, setCountries] = useState<any[]>([]);

  const cakeOptions = [
    {
      image:cake1,
      name:'champagne-cookie-cake'
    },
    {
      image:cake2,
      name:'strawberry-cake'
    },
    {
      image:cake3,
      name:'chocolate-cake'
    },
    {
      image:cake4,
      name:'rainbow-cake'
    },
  ]
  
  const orderInfoInputs = [
    {
      name:'name',
      labelName:'Name',
      placeHolder:'First',
      type:'text',
      min:'',
      isRequired:true
    },
    {
      name:'last',
      labelName:'',
      placeHolder:'Last',
      type:'text',
      min:'',
      isRequired:true
    },
    {
      name:'date',
      labelName:'Delivery date',
      placeHolder:'',
      type:'date',
      min:today,
      isRequired:true
    },
    {
      name:'time',
      labelName:'Prefered delivery time',
      placeHolder:'',
      type:'time',
      min:'',
      isRequired:false
    },
    {
      name:'phone',
      labelName:'Phone',
      placeHolder:'### ### ###',
      type:'number',
      min:'',
      isRequired:true
    },
    {
      name:'email',
      labelName:'Email',
      placeHolder:'',
      type:'email',
      min:'',
      isRequired:true
    }
  ]
  
  const addresInputs = [
    {
      name:'streetAddres',
      labelName:'Street Address',
      type:'text',
      isRequired:true
    },
    {
      name:'streetAddresLine2',
      labelName:'Street Address Line 2',
      type:'text',
      isRequired:false
    },
    {
      name:'city',
      labelName:'City',
      type:'text',
      isRequired:true
    },
    {
      name:'region',
      labelName:'Region',
      type:'text',
      isRequired:true
    },
    {
      name:'zipCode',
      labelName:'Postal / Zip Code',
      type:'number',
      isRequired:true
    },
  ]

  useEffect(()=>{
    setToday(getFormattedCurrentDate());
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

  function getFormattedCurrentDate(){
    let date = new Date().toISOString().split('T')[0];
    return date;
  }

  function getTime(){
    const dateAndHour = new Date();
    let formatedHour = `${String(dateAndHour.getHours()).padStart(2, '0')}:${String(dateAndHour.getMinutes()).padStart(2, '0')}`;
    setHour(formatedHour);
  }

  function validateFormFields(data:cakeOrder){
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
        emptyField === 'streetAddres'||
        emptyField === 'country'||
        emptyField === 'city'||
        emptyField === 'zipCode'
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
    }else if(!data.email.match(/\S+@\S+\.\S+/)){
      toast.error(`${eng["error-invalid-email"]}`, {
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
    }else if(data.time < hour && data.time !=='' && data.date === today){
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

  async function registerOrder(data:cakeOrder){
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

  async function onsubmit(data:Object){
    getTime();
    validateFormFields(data as cakeOrder);
  }

  return (
    <form 
      onSubmit={handleSubmit(onsubmit)} 
      className="mt-4"
    >
      <p className="mb-4">{eng["form-choose-your-cake"]}<span>*</span></p>
      <div className="row">
        {cakeOptions.map((cake, index) => (
            <div className="col-md-6 mb-4" key={Input.name}>
                <CakeOption
                  image={cake.image}
                  alt={cake.name}
                  value={cake.name}
                  name="cake"
                  type="radio"
                  control={control}
                />
            </div>
          ))
        }
      </div> 

      <div className="order-info mt-3">
        <p>{eng["form-order-information"]}</p>

        <div className="row">
          {orderInfoInputs.map((input, index) => (
              <div className={`col-md-6 mb-4 ${input.name === 'last' ? 'd-flex align-items-end' : ''}`} key={input.name}>
                {
                  input.min ==='' && input.labelName !== '' ?
                    <>
                      <Input
                        control={control}
                        name={input.name}
                        labelName={input.labelName}
                        placeholder={input.placeHolder}
                        type={input.type}
                        isRequired={input.isRequired}
                      />
                      {input.name === 'email' ?  <p>{eng["form-order-email-info"]}</p> : false}
                    </>
                  : false
                }
                {
                  input.labelName === ''?
                    <Input
                      control={control}
                      name={input.name}
                      placeholder={input.placeHolder}
                      type={input.type}
                      isRequired={input.isRequired}
                    />
                    : false
                }
                {
                  input.min !== '' ?
                  <Input
                    control={control}
                    name={input.name}
                    labelName={input.labelName}
                    placeholder={input.placeHolder}
                    type={input.type}
                    min={input.min}
                    isRequired={input.isRequired}
                  />
                  : false
                }
              </div>
            ))
          }
        </div>
      </div>

      <div className="address row">
        <p>{eng["form-addres"]}<span>*</span></p>
        
        {addresInputs.map((input, index) => (
            <>
              {index <=1 && 
                <div className="col-md-12 mb-3" key={input.name}>
                  <Input
                    control={control}
                    name={input.name}
                    placeholder={input.labelName}
                    type={input.type}
                    isRequired={input.isRequired}
                  />
                </div>
              }
              {index > 1 &&
                <div className="col-md-6 mb-3" key={input.name}>
                  <Input
                    control={control}
                    name={input.name}
                    placeholder={input.labelName}
                    type={input.type}
                    isRequired={input.isRequired}
                  />
                </div>
              }
            </>
          ))
        }

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
