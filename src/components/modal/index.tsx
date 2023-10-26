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
  order:cakeOrder,
  image:string
  closeModal: () => void,
} 


function ModalComponent({order,closeModal,image}:modalProps){

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

  function wppMessage(){
    const phoneNumber = '5511982077494';
    const message = `Hello! My name is ${order.name} ${order.last} and i would like some help with my order`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
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
          <p>
            <span className="weight-500">{eng["modal-name"]} </span>
            {order.name} {order.last}
          </p>
          
          <div className="mt-3 mb-4 border-top border-bottom border-primary">
            <div className="cake-card">
              <img src={image} alt="" />

              <p>
                <span className="weight-600">{eng["modal-cake"]}</span><br></br>
                {formatCake()}
              </p>
            </div>
          </div>
          
          <div className="delivery-infos">
            <p>
              <span className="weight-500">{eng["modal-date"]} </span>
              {formatDate()}
            </p>
            {
              order.time && 
              <p>
                <span className="weight-500">{eng["modal-time"]} </span>
                {order.time} 
              </p>
            }
          </div>

          <p>
            <span className="weight-500">{eng["modal-address"]} </span>
            {order.streetAddres}, {order.streetAddressLine2 && <span>{order.streetAddressLine2}, </span>} {order.zipCode}, {order.city}, {order.region} - {order.country}
          </p>
 
          <button
            className="close rounded px-5 py-3 mt-5 mb-3 text-light"
            onClick={closeModal}
          >
            <span className="weight-600">{eng["modal-close"]}</span>
          </button>

          <button
            className="contact rounded px-5 py-3 mb-5"
            onClick={wppMessage}
          >
            <span>{eng["modal-help-1"]}</span>
            <span><strong>{eng["modal-help-2"]}</strong></span>
            <FontAwesomeIcon icon={faWhatsapp} className="whats-icon"/>
          </button>
        </div>
      </div>
    </div>
  )
}


export default ModalComponent;