import Button from "./button";
import React, { useState } from 'react';
import RoundedIcon from "./rounded_icon";
import calender from "../assets/calendar.svg";
import male from "../assets/mars-symbol.svg";
import female from "../assets/venus-symbol.svg";
import { Input, Label } from "./form_components";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [customerId, setCustomerID] = useState("");
  const [membership, setMembership] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  function clearFormFields() {
    setName("");
    setEmail("");
    setMobile("");
    setDateOfBirth("");
    setGender("");
    setMembership("");
    setCustomerID("")
  }

  function saveForm() {
    console.log(gender)
    console.log(membership)
    clearFormFields()
  }

  return ( 
    <form className="w-full">
      <div className="md:flex md:items-center mb-6 md:mb-3">
        <Label label="Name" />
        <div className="md:w-2/3">
          <Input onChange={(e) => setName(e.target.value)} value={name} placeholder="Kendall Jenner" />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6 md:mb-3">
        <Label label="Gender" />
        <div className="md:w-2/3">
          <div className="flex items-center justify-between w-full">
            <RoundedIcon 
              className="justify-between" 
              selected={gender === "Male" ? true : false}  
              icon={male} title="Male" 
              onClick={() => setGender("Male")}
             />
            <RoundedIcon 
              className="justify-between" 
              selected={gender === "Female" ? true : false} 
              icon={female} title="Female" 
              onClick={() => setGender("Female")} 
            />
          </div>
        </div>
      </div>
      <div className="md:flex md:items-center md:mb-3 mb-6">
        <Label label="Date of Birth" />
        <div className="md:w-2/3 relative flex items-center justify-end">
          <img src={calender} alt="calender" className='absolute pointer-events-none mr-7 sm:mr-5' />
          <Input 
            onChange={(e) => setDateOfBirth(e.target.value)} 
            value={dateOfBirth} 
            placeholder="01/02/1983"
            name="DateofBirth"
          />
        </div>
      </div>
      <div className="relative md:flex md:items-center mb-6 md:mb-3">
        <div className="absolute w-3 h-3 md:h-2 md:w-2 rounded-full bg-tangerine md:-left-3 -left-4"></div>
        <Label label="Email" type="Email" />
        <div className="md:w-2/3">
          <Input 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            placeholder="kendall@email.com"
            name="Email"
           />
           <div className="flex justify-end">
            <small className="text-tangerine text-right">Invalid email address</small>
           </div>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6 md:mb-3">
        <Label label="Mobile" />
        <div className="md:w-2/3">
          <Input 
            onChange={(e) => setMobile(e.target.value)} 
            value={mobile} 
            placeholder="+91 98765 43210" 
            name="Mobile"
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6 md:mb-3">
        <Label label="Customer ID" />
        <div className="md:w-2/3">
          <Input 
            onChange={(e) => setCustomerID(e.target.value)} 
            value={customerId} 
            placeholder="576802-ERD0348 45"
            name="CustomerID"
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6 md:mb-3">
        <Label label="Membership" />
        <div className="md:w-2/3">
          <div className="flex flex-col md:flex-row md:items-center w-full">
            <div className="flex justify-between mb-4 md:mb-0">
              <RoundedIcon 
                className="justify-between" 
                title="Classic" 
                selected={membership === "Classic" ? true : false}  
                onClick={() => setMembership("Classic")} 
                />
              <RoundedIcon 
                className="justify-between" 
                title="Silver" 
                selected={membership === "Silver" ? true : false} 
                onClick={() => setMembership("Silver")} 
              />
            </div>            
            <RoundedIcon 
              className="justify-start" 
              selected={membership === "Gold" ? true : false} 
              title="Gold" 
              onClick={() => setMembership("Gold")} 
            />
          </div>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"/>
        <div className="md:w-2/3 md:flex justify-between">
          <Button 
            className="bg-paleGrey w-full md:w-1/2 md:mr-2 hover:text-white hover:bg-gray-500" 
            type="button" 
            onClick={clearFormFields}
          >
            CANCEL
          </Button>
          <Button 
            className="bg-blueGreen text-white w-full md:w-1/2 hover:font-bold" 
            type="submit" 
            onClick={saveForm}
          >
            SAVE
          </Button>
        </div>
      </div>
    </form>
   );
}

export default React.memo(Form);