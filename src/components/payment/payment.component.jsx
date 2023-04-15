import { useState } from 'react';

import { InputField, PaymentFormWrapper } from './payment.styles';

const Payment = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [expirationDateMonth, setExpirationDateMonth] = useState('');
  const [expirationDateYear, setExpirationDateYear] = useState('');

  return (
    <>
      <PaymentFormWrapper>
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
      </PaymentFormWrapper>
    </>
  );
};

export default Payment;
