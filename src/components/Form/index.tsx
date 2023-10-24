import { useForm } from "react-hook-form";
import { useState } from "react";
import "./styles.scss";
import Input from "../Input";
import eng from "../../text/eng";

import CakeOption from "../CakeOption";

import cake1 from '../../assets/cake1.jpg'
import cake2 from '../../assets/cake2.jpg'
import cake3 from '../../assets/cake3.jpg'
import cake4 from '../../assets/cake4.jpg'

function Form() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  
  return (
    <form action="" className="mt-4">
      <p className="mb-4">{eng["form-choose-your-cake"]}<span>*</span></p>
      <div className="row">
        <div className="col-md-6 mb-4">
          <CakeOption 
            image={cake1} 
            alt={"champagne-cookie-cake"} 
            value={"champagne-cookie-cake"} 
            name={"cake"} 
            type={"radio"}
          />
        </div>
        <div className="col-md-6 mb-4">
          <CakeOption 
            image={cake2} 
            alt={"champagne-cookie-cake"} 
            value={"champagne-cookie-cake"} 
            name={"cake"} 
            type={"radio"}
          />
        </div>
        <div className="col-md-6 mb-4">
          <CakeOption 
            image={cake3} 
            alt={"champagne-cookie-cake"} 
            value={"champagne-cookie-cake"} 
            name={"cake"} 
            type={"radio"}
          />
        </div>
        <div className="col-md-6 mb-4">
          <CakeOption 
            image={cake4} 
            alt={"champagne-cookie-cake"} 
            value={"champagne-cookie-cake"} 
            name={"cake"} 
            type={"radio"}
          />            
        </div> 
      </div>

      <div className="order-info mt-3">
        <p>{eng["form-order-information"]}</p>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <Input labelName="Name" placeholder="First"/>
        </div>
        <div className="col-md-6 d-flex align-items-end mb-3">
          <Input placeholder="Last"/>
        </div>
        <div className="col-md-6 mb-3">
          <Input />
        </div>
        <div className="col-md-6 mb-3">
          <Input/>
        </div>
      </div>

      <div className="text-center">
        <button className="px-5 py-2 rounded-pill text-light" type="submit">Order</button>
      </div>
    </form>
  );
}

export default Form;
