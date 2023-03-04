import React, { useRef, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { auth, app2 } from '../../api/firebaseConfig';
import { doc, setDoc } from "firebase/firestore"; 
import { 
    FormStyle,
    SendButton,
    HeaderStyle
} from './checkout.styles';

const Checkout = () => {
    const form = useRef();
    const [address, setAddress] = useState("")
    const [country, setCountry] = useState("")
    const [province, setProvince] = useState("")
    const [code, setCode] = useState("")
    const db = getFirestore(app2)

    const SaveToDB = async (e) => {
        e.preventDefault();
        await setDoc(doc(db, "Address", auth.currentUser.email), {
            Address: address,
            Country: country,
            Province: province,
            PostalCode: code
        })
    }

    return (
        <>
        <HeaderStyle>
            <h1>Shipping Information</h1>
        </HeaderStyle>

        <FormStyle>
        <form
            ref={form}
            onSubmit={SaveToDB}
        >
            <label>Address</label>
            <input
                type="text"
                name="Address"
                onChange={event => setAddress(event.target.value)}
                value = {address}
            />

            <label>Country</label>
            <input
                type="text"
                name="Country"
                onChange={event => setCountry(event.target.value)}
                value = {country}
            />

            <label>State/Province</label>
            <input
                type="text"
                name="State/Province"
                onChange={event => setProvince(event.target.value)}
                value = {province}
            />

            <label>Zip/Postal Code</label>
            <input
                type="text"
                name="Code"
                onChange={event => setCode(event.target.value)}
                value = {code}
            />
            <SendButton onClick={SaveToDB}>Save Address?</SendButton>
        </form>
        </FormStyle>
        </>
    )

}

export default Checkout