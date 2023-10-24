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
      <p className="mb-4">{eng["form-choose-your-cake"]}</p>
      <div className="cake-options">
        <div className="row mw-100">
          <div className="col-md-6 option-wrapper">
            <CakeOption 
              image={cake1} 
              alt={"champagne-cookie-cake"} 
              value={"champagne-cookie-cake"} 
              name={"cake"} 
              type={"radio"}
            />
          </div>
          <div className="col-md-6 option-wrapper">
            <CakeOption 
              image={cake2} 
              alt={"champagne-cookie-cake"} 
              value={"champagne-cookie-cake"} 
              name={"cake"} 
              type={"radio"}
            />
          </div>
          <div className="col-md-6 option-wrapper">
            <CakeOption 
              image={cake3} 
              alt={"champagne-cookie-cake"} 
              value={"champagne-cookie-cake"} 
              name={"cake"} 
              type={"radio"}
            />
          </div>
          <div className="col-md-6 option-wrapper">
            <CakeOption 
              image={cake4} 
              alt={"champagne-cookie-cake"} 
              value={"champagne-cookie-cake"} 
              name={"cake"} 
              type={"radio"}
            />            
          </div> 
        </div>
      </div>
      <button type="submit">Order</button>
    </form>
  );
}

export default Form;
