import { useState } from "react";
import "./App.css";

export default function App() {
  
  const [userDetails, setUserDetails] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    complaint: '',
    contact: '',
    consent: false
  })

  // const [userName, setUserName] = useState('')
  // const [userAddress, setUserAddress] = useState('')
  // const [userPhone, setUserPhone] = useState('')
  // const [userEmail, setUserEmail] = useState('')
  // const [userComplaint, setUserComplaint] = useState('')
  // const [userContact, setUserContact] = useState('')
  // const [userConsent, setUserConsent] = useState(false)

  // const getName = (event) => {
  //   const inputValue = event.target.value
  //   console.log(inputValue)
  //   setUserName(inputValue)
  // }

  // const getAddress = (event) => {
  //   const inputValue = event.target.value
  //   console.log(inputValue)
  //   setUserAddress(inputValue)
  // }

  // const getPhone = (event) => {
  //   const inputValue = event.target.value
  //   console.log(inputValue)
  //   setUserPhone(inputValue)
  // }

  // const getEmail = (event) => {
  //   const inputValue = event.target.value
  //   console.log(inputValue)
  //   setUserEmail(inputValue)
  // }

  // const getComplaint = (event) => {
  //   const inputValue = event.target.value
  //   console.log(inputValue)
  //   setUserComplaint(inputValue)
  // }

  // const getContact = (event) => {
  //   const inputValue = event.target.value
  //   console.log(inputValue)
  //   setUserContact(inputValue)
  // }

  // const getConsent = (event) => {
  //   const inputValue = event.target.checked
  //   console.log(inputValue)
  //   setUserConsent(inputValue)
  // }

  const handleChange = (event) => {
  const {name, value, checked, type} = event.target
  console.log(checked)
    if (type === 'checkbox' && name === 'consent') setUserDetails({...userDetails, consent: checked})
    else setUserDetails({...userDetails, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.value, userDetails)
  }
  

  return (
    <>
      <form className="form">
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="name" required onChange={handleChange}/>
          </label>
          <label>
            Address
            <input type="text" name="address" onChange={handleChange}/>
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" onChange={handleChange}/>
          </label>

          <label>
            Email
            <input type="email" name="email" onChange={handleChange}/>
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              value={userDetails.complaint}
              onChange={handleChange}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input 
                type="radio" 
                name="contact" 
                value="phone" 
                checked={userDetails.contact === 'phone'}
                onChange={handleChange} />
              Phone
            </label>

            <label>
              <input 
                type="radio" 
                name="contact" 
                value="email" 
                checked={userDetails.contact === 'email'}
                onChange={handleChange}/>
              Email
            </label>

            <label>
              <input 
                type="radio" 
                name="contact" 
                value="post" 
                checked={userDetails.contact === 'post'}
                onChange={handleChange}/>
              Slow Mail
            </label>

            <label>
              <input 
                type="radio" 
                name="contact" 
                value="none" 
                checked={userDetails.contact === 'none'}
                onChange={handleChange}/>
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input 
              type="checkbox" 
              name="consent" 
              id="consent" 
              checked={userDetails.consent}
              onChange={handleChange}/>
          </label>
        </div>
        <input type="submit" value="Submit!" onClick={handleSubmit} />
      </form>
    </>
  );
}
