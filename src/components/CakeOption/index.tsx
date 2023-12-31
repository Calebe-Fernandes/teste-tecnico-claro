import React from "react";
import { Controller } from "react-hook-form";
import './styles.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  image: string,
  alt: string,
  value: string,
  name: string,
  type: string,
  control:any
}

function CakeOption({ image, alt, name, type, value, control}: InputProps){
return (
  <div className="d-flex cake-option">
    <Controller
        name={name}
        control={control}
        defaultValue={value}
        render={({ field }) => (
          <input type={type}  {...field} value={value} />
        )}
      />
    <img src={image} alt={alt} />
  </div>
);
}

export default CakeOption;