import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "./styles.scss";
import eng from "../../text/eng";

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

interface modalProps {
  order:cakeOrder
  closeModal: () => void,
} 


function ModalComponent({order,closeModal}:modalProps){

  function formatDate(){
    const dateParts = order.date.split('-'); 
    const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
    return formattedDate;
  }

  function formatCake(){
    const cakeName = order.cake.split('-');
    const formatString = cakeName.map(part => part.charAt(0).toUpperCase() + part.slice(1));
    const formattedCakeName = formatString.join(' ');
    return formattedCakeName;
  }

  return (
    <div className="modal-component-container">
      <div className="modal-box">
        <div className={`modal-header`}>
          <h1>{eng["modal-title"]}</h1>
          <button onClick={closeModal}>
            <FontAwesomeIcon icon={faXmark} className="icon-close-modal" />
          </button>
        </div>
        <div className="modal-content-wrapper">
          <p><strong>{eng["modal-name"]}</strong>{order.name} {order.last}</p>
          <p><strong>{eng["modal-cake"]}</strong>{formatCake()}</p>
          <p><strong>{eng["modal-date"]}</strong> {formatDate()}</p>
          {order.time && <p><strong>{eng["modal-time"]} </strong>{order.time} </p>}
          <p><strong>{eng["modal-address"]} </strong>{order.streetAddres}</p>
 
          <button className="close rounded   px-5 py-3 mt-4 mb-3 text-light" onClick={closeModal}>{eng["modal-close"]}</button>
          <button className="contact rounded  px-5 py-3 "><span>{eng["modal-help-1"]}<strong>{eng["modal-help-2"]}</strong></span> <FontAwesomeIcon icon={faWhatsapp}/> </button>
        </div>
      </div>
    </div>
  )
}


export default ModalComponent;