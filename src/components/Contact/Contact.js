import React, { useState } from 'react'
import './contact.css'
import Card from '../Card/card'

export default function Contact() {
const [values , setValues] = useState({name : "" , email: "" , phone:"" , message:""});

const handleChange=(e) => {
setValues({...values ,[e.target.name] : e.target.value });
}
const handleClick=(e)=>
{
e.preventDefault();
setValues({name : "" , email: "" , phone:"" , message:""});
}


  return (
    <div className='contactheader'>
     <div className='header'>
     <h1>GET IN TOUCH</h1>
     <p> Want to get in touch ? I'd love to hear from you. Here's how you can Contact me.</p>
     </div>

     <div className='container-fluid'>
  <div className='row formrow'>
<div className='col-md-6 '  >
<div className='form'>
<h2>Write me Here</h2>
<form autoComplete='off'  name="contactusform" id="contactus">
<input className='input' type="text" id="name" onChange={handleChange} name="name" placeholder="NAME"/>
<input className='input' type="text" id="email" onChange={handleChange} name="email" placeholder="abc@d.com"/>
<input className='input' type="tel" id="phone" onChange={handleChange} name="phone" placeholder="Phone Number"/>
<textarea className='input' type="text" id="message"  rows="3"  onChange={handleChange} name="message" placeholder="WRITE HERE.."/>
<br/>
<div className='button'>
<button type="submit"  onClick={handleClick} className="btn btn-outline-dark">Submit</button>
</div>
</form>
</div>
</div>

<div className='col-md-6  '  >
<div className='form'>
<h2>Have Some suggestions</h2>
<textarea className='input' type="text" id="fname"  rows="7"  name="fname" placeholder="WRITE ME HERE.."/>
<br/>
<div className='button'>
<button type="button" className="btn btn-outline-dark">Submit</button>
</div>
</div>
</div>

  </div>
 
     </div>
    </div>
  )
}
