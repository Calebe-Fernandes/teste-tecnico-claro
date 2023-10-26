import { Controller, useForm } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelName?:string,
    labelId?:string,
    isRequired:boolean,
    name:string,
    icon?:string,
    control:any
}


function Input({ labelName, isRequired, name, control, icon, ...props }: InputProps) {
  return (
    <>  
      <label htmlFor={props.id}>{labelName}{isRequired && labelName &&<span>*</span>}</label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input
            className="w-100"
            {...props}
            {...field}
            required={isRequired}
          />
        )}
      />
      {icon && <img onClick={()=>{alert('click')}}draggable="false" className="inpt-icon" src={icon} alt="ícone" />}
    </>
  );
}

export default Input;