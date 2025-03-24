import React, { useState } from 'react';
import './form.css'
import emailjs from '@emailjs/browser';


const EventInquiryForm = () => {
    
    const initialState = {
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    additionalInfo: ''
  };


  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    setFormData({...initialState});
    
    emailjs.send(
        "service_3ez3bfn",
        "template_c8p213q", 
        formData, 
        "sbYMKwRg_y5ldJenP" 
    )
    .then((response) => {
        console.log("Email sent successfully!", response);
    })
    .then(() => {
        alert("Your Inquiry has been submitted! Thanks for reaching out. We will get back to you soon");
    })
    .catch((error) => {
        console.error("Email failed to send:", error);
    });

};

  return (
    <div className="event-form">
      <h2>Event Inquiry Form</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-row1">
            <div className="form-name">
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
            </div>

            <div className="form-email">
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
            </div>
        </div>

        <div className="form-row2">
            <div className="form-tel">
                <label>
                    Phone Number:<span>(optional)</span>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange}  />
                </label>
            </div>

            <div className="form-event-type">
                <label>
                    Event Type:
                    <select name="eventType" value={formData.eventType} onChange={handleChange} required>
                        <option value="">Select Event Type</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="other">Other</option>
                    </select>
                </label>
            </div>
        </div>

        <div className="form-row3">
            <div className="form-event-date">
                <label>
                    Event Date:
                    <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
                </label>
            </div>

            <div className="form-guests">
                <label>
                    Number of Guests:
                    <input type="number" name="guests" value={formData.guests} onChange={handleChange} required />
                </label>
            </div>
        </div>

        <div className="form-additional-info">
            <label>
                Additional Information:<span>(optional)</span>
                <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange}></textarea>
            </label>
        </div>

        <div className="form-submit">
            <button type="submit" className='submit-btn'>SUBMIT INQUIRY</button>
        </div>
      </form>
    </div>
  );
};

export default EventInquiryForm;