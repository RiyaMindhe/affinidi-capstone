import React, { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from './ConfirmationModal';
import './Checkout.css';

const Checkout = ( {clearCart} ) => {
  const { profile } = useContext(UserContext);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: profile?.givenName || '',
    lastName: profile?.familyName || '', 
    email: profile?.email || '',
    phone: profile?.phoneNumber || '', 
    address: profile?.streetAddress || '', 
    postalCode: profile?.postalCode || '',
    city: profile?.locality || '', 
    country: profile?.country || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmationModal(true)
    clearCart();
  };

  const closeConfirmationModal = () => {
    setShowConfirmationModal(false);
    navigate('/');
  };
  return (
    <div className="CheckoutContainer">
      <div className="Checkout">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            value={userData.email} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="firstName">First Name</label>
          <input 
            type="text" 
            name="firstName" 
            id="firstName"
            value={userData.firstName} 
            onChange={handleChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input 
            type="text" 
            name="lastName" 
            id="lastName"
            value={userData.lastName} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="gender">Phone Number</label>
          <input 
            type="text" 
            name="gender" 
            id="gender"
            value={userData.gender} 
            onChange={handleChange} 
            required 
          />
          
          <label htmlFor="address">Address</label>
          <input 
            type="text" 
            name="address" 
            id="address"
            value={userData.address} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="postalCode">Postal Code</label>
          <input 
            type="text" 
            name="postalCode" 
            id="postalCode"
            value={userData.postalCode} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="city">City</label>
          <input 
            type="text" 
            name="city" 
            id="city"
            value={userData.city} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="country">Country</label>
          <input 
            type="text" 
            name="country" 
            id="country"
            value={userData.country} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="phonenumber">Phone Number</label>
          <input 
            type="text" 
            name="phonenumber" 
            id="phonenumber"
            value={userData.phoneNumber} 
            onChange={handleChange} 
            required 
          />


          <button type="submit" className="ContinueButton">Submit Order</button>
        </form>
      </div>
      {showConfirmationModal && (
        <ConfirmationModal closeModal={closeConfirmationModal} />
      )}
    </div>
  );
};

export default Checkout;