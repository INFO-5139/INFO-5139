import { useState } from 'react';

const Payment = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  return (
    <>
      <div>Payment renders</div>
    </>
  );
};

export default Payment;
