import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './AddWarehouse.scss';
import arrowBackIcon from '../../assets/icons/arrow_back-24px.svg';

const AddWarehouse = () => {
  const [formData, setFormData] = useState({
    warehouseName: '',
    streetAddress: '',
    city: '',
    country: '',
    contactName: '',
    position: '',
    phoneNumber: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return email.includes('@') && email.includes('.');
  };

  const validatePhoneNumber = (phoneNumber) => {
    return phoneNumber.startsWith('+1');
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.warehouseName) newErrors.warehouseName = 'Warehouse Name is required';
    if (!formData.streetAddress) newErrors.streetAddress = 'Street Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.contactName) newErrors.contactName = 'Contact Name is required';
    if (!formData.position) newErrors.position = 'Position is required';
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone Number must start with +1';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid Email';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      return true; 
    } else {
      return false; 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data to the backend
      console.log('Form submitted:', formData);
      // Add API call here
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="add-warehouse">
      <div className="add-warehouse__header">
        <Link to="/" className="add-warehouse__back-link">
          <img
            src={arrowBackIcon}
            alt="Back"
            className="add-warehouse__back-icon"
          />
        </Link>
        <h1 className="add-warehouse__title">Add New Warehouse</h1>
      </div>
      <div className="add-warehouse__divider"></div>
      <form className="add-warehouse__form" onSubmit={handleSubmit}>
        <div className="add-warehouse__form-sections">
          <div className="add-warehouse__section">
            <h2 className="add-warehouse__section-title">Warehouse Details</h2>
            <div className="add-warehouse__form-group">
              <label className="add-warehouse__label">Warehouse Name</label>
              <input
                type="text"
                name="warehouseName"
                value={formData.warehouseName}
                onChange={handleChange}
                className={`add-warehouse__input ${errors.warehouseName ? 'add-warehouse__input--error' : ''}`}
              />
              {errors.warehouseName && (
                <span className="add-warehouse__error-message">{errors.warehouseName}</span>
              )}
            </div>
            <div className="add-warehouse__form-group">
              <label className="add-warehouse__label">Street Address</label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className={`add-warehouse__input ${errors.streetAddress ? 'add-warehouse__input--error' : ''}`}
              />
              {errors.streetAddress && (
                <span className="add-warehouse__error-message">{errors.streetAddress}</span>
              )}
            </div>
            <div className="add-warehouse__form-group">
              <label className="add-warehouse__label">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`add-warehouse__input ${errors.city ? 'add-warehouse__input--error' : ''}`}
              />
              {errors.city && (
                <span className="add-warehouse__error-message">{errors.city}</span>
              )}
            </div>
            <div className="add-warehouse__form-group">
              <label className="add-warehouse__label">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`add-warehouse__input ${errors.country ? 'add-warehouse__input--error' : ''}`}
              />
              {errors.country && (
                <span className="add-warehouse__error-message">{errors.country}</span>
              )}
            </div>
          </div>
          <div className="add-warehouse__divider-horizontal"></div>
          <div className="add-warehouse__divider-vertical"></div>
          <div className="add-warehouse__section">
            <h2 className="add-warehouse__section-title">Contact Details</h2>
            <div className="add-warehouse__form-group">
              <label className="add-warehouse__label">Contact Name</label>
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                className={`add-warehouse__input ${errors.contactName ? 'add-warehouse__input--error' : ''}`}
              />
              {errors.contactName && (
                <span className="add-warehouse__error-message">{errors.contactName}</span>
              )}
            </div>
            <div className="add-warehouse__form-group">
              <label className="add-warehouse__label">Position</label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className={`add-warehouse__input ${errors.position ? 'add-warehouse__input--error' : ''}`}
              />
              {errors.position && (
                <span className="add-warehouse__error-message">{errors.position}</span>
              )}
            </div>
            <div className="add-warehouse__form-group">
              <label className="add-warehouse__label">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`add-warehouse__input ${errors.phoneNumber ? 'add-warehouse__input--error' : ''}`}
              />
              {errors.phoneNumber && (
                <span className="add-warehouse__error-message">{errors.phoneNumber}</span>
              )}
            </div>
            <div className="add-warehouse__form-group">
              <label className="add-warehouse__label">Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`add-warehouse__input ${errors.email ? 'add-warehouse__input--error' : ''}`}
              />
              {errors.email && (
                <span className="add-warehouse__error-message">{errors.email}</span>
              )}
            </div>
          </div>
        </div>
        <div className="add-warehouse__buttons">
          <Link to="/" className="add-warehouse__cancel-button">
            Cancel
          </Link>
          <button type="submit" className="add-warehouse__submit-button">
            + Add Warehouse
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddWarehouse;