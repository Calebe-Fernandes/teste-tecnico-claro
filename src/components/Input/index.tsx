interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelName?:string,
    labelId?:string,
}


function Input({ labelName, ...props }: InputProps) {
  return (
    <>  
        <label htmlFor={props.id}>{labelName}</label>
        <input {...props} /> 
    </>
  );
}

export default Input;