import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  InputField,
  PaymentFormWrapper,
  SubmitPaymentButton,
  FieldWrapper,
} from './payment.styles';

const Payment = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [expirationDateMonth, setExpirationDateMonth] = useState('');
  const [expirationDateYear, setExpirationDateYear] = useState('');
  const [errorMessage, setErrorMessage] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const themeColor = useSelector((state) => state.theme);

  const payButtonHandler = (e) => {
    e.preventDefault();
    const validate = [];
    setErrorMessage([]);
    setSuccessMessage('');
    if (firstName === '') {
      validate.push('Please enter a first name.');
    }
    if (lastName === '') {
      validate.push('Please enter a last name.');
    }
    if (creditCardNumber === '') {
      validate.push('Please enter the credit card number.');
    }
    if (securityCode === '') {
      validate.push('Please enter the security code.');
    }
    if (expirationDateMonth === '') {
      validate.push('Please enter the month of the expiration date.');
    }
    if (expirationDateYear === '') {
      validate.push('Please enter the year of the expiration date.');
    }
    if (validate.length === 0) {
      setSuccessMessage('Payment successful');
      setFirstName('');
      setLastName('');
      setCreditCardNumber('');
      setSecurityCode('');
      setExpirationDateMonth('');
      setExpirationDateYear('');
    } else {
      setErrorMessage(validate);
    }
    setTimeout(() => {
      setSuccessMessage('');
    }, 2500);
  };

  return (
    <>
      <PaymentFormWrapper>
        {errorMessage.length > 0 && (
          <div>
            <h3>Invalid Data:</h3>
            <ul>
              {errorMessage.map((error, index) => {
                return <li key={index}>{error}</li>;
              })}
            </ul>
          </div>
        )}
        {successMessage.length > 0 && successMessage}
        <FieldWrapper colors={themeColor}>
          <label>
            First Name
            <InputField
              type='text'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            Last Name
            <InputField
              type='text'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            Credit Card Number
            <InputField
              type='number'
              value={creditCardNumber}
              onChange={(e) => setCreditCardNumber(e.target.value)}
            />
          </label>
          <label>
            Security Code
            <InputField
              type='number'
              value={securityCode}
              onChange={(e) => setSecurityCode(e.target.value)}
            />
          </label>
          <label>
            Month
            <InputField
              type='number'
              value={expirationDateMonth}
              onChange={(e) => setExpirationDateMonth(e.target.value)}
            />
          </label>
          <label>
            Year
            <InputField
              type='number'
              value={expirationDateYear}
              onChange={(e) => setExpirationDateYear(e.target.value)}
            />
          </label>
        </FieldWrapper>
        <SubmitPaymentButton
          colors={themeColor}
          onClick={payButtonHandler}
        >
          Pay
        </SubmitPaymentButton>
      </PaymentFormWrapper>
    </>
  );
};

export default Payment;
