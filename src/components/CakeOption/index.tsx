import Input from "../Input";
import './styles.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  image: string,
  alt: string,
  value: string,
  name: string,
  type: string
}

function CakeOption({ image, alt, name, type, value, ...props }: InputProps){
return (
  <div className="d-flex">
    <Input  type={type} name={name} value={value}/>
    <img src={image} alt={alt} />
  </div>
);
}

export default CakeOption;