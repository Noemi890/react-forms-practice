import { useState } from "react";
import "./App.css";

export default function App() {
  
  // const [userDetails, setUserDetails] = useState({
  //   name: '',
  //   address: '',
  //   phone: '',
  //   email: '',
  //   complaint: '',
  //   contact: '',
  //   consent: false
  // })

  const [userName, setUserName] = useState('')
  const [userAddress, setUserAddress] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userComplaint, setUserComplaint] = useState('')
  const [userContact, setUserContact] = useState('')
  const [userConsent, setUserConsent] = useState(false)

  const getName = (event) => {
    const inputValue = event.target.value
    console.log(inputValue)
    setUserName(inputValue)
  }

  const getAddress = (event) => {
    const inputValue = event.target.value
    console.log(inputValue)
    setUserAddress(inputValue)
  }

  const getPhone = (event) => {
    const inputValue = event.target.value
    console.log(inputValue)
    setUserPhone(inputValue)
  }

  const getEmail = (event) => {
    const inputValue = event.target.value
    console.log(inputValue)
    setUserEmail(inputValue)
  }

  const getComplaint = (event) => {
    const inputValue = event.target.value
    console.log(inputValue)
    setUserComplaint(inputValue)
  }

  const getContact = (event) => {
    const inputValue = event.target.value
    console.log(inputValue)
    setUserContact(inputValue)
  }

  const getConsent = (event) => {
    const inputValue = event.target.checked
    console.log(inputValue)
    setUserConsent(inputValue)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.value, userName, userEmail, userPhone, userAddress, userComplaint)
  }
  

  return (
    <>
      <form className="form">
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="name" required onChange={getName}/>
          </label>
          <label>
            Address
            <input type="text" name="address" onChange={getAddress}/>
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" onChange={getPhone}/>
          </label>

          <label>
            Email
            <input type="email" name="email" onChange={getEmail}/>
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              value={userComplaint}
              onChange={getComplaint}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input 
                type="radio" 
                name="contact" 
                value="phone" 
                checked={userContact === 'phone'}
                onChange={getContact} />
              Phone
            </label>

            <label>
              <input 
                type="radio" 
                name="contact" 
                value="email" 
                checked={userContact === 'email'}
                onChange={getContact}/>
              Email
            </label>

            <label>
              <input 
                type="radio" 
                name="contact" 
                value="post" 
                checked={userContact === 'post'}
                onChange={getContact}/>
              Slow Mail
            </label>

            <label>
              <input 
                type="radio" 
                name="contact" 
                value="none" 
                checked={userContact === 'none'}
                onChange={getContact}/>
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input 
              type="checkbox" 
              name="consent" 
              id="consent" 
              checked={userConsent}
              onChange={getConsent}/>
          </label>
        </div>
        <input type="submit" value="Submit!" onClick={handleSubmit} />
      </form>
    </>
  );
}
