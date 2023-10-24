import { Controller, useForm } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelName?:string,
    labelId?:string,
    isRequired:boolean,
    name:string,
    control:any
}


function Input({ labelName, isRequired, name, control, ...props }: InputProps) {
  return (
    <>  
        <label htmlFor={props.id}>{labelName}{isRequired && <span>*</span>}</label>
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
    </>
  );
}

export default Input;