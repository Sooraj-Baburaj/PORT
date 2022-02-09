import { useState } from 'react';
import axios from 'axios';
import './adminPanel.css';
import { useEffect } from 'react';

const AdminPanel = () => {
    const [loggedIn, setLoggedIn] = useState(true)
    const [formData, setFormData] = useState({
        businessName: "",
        state : "",
        locations : [],
        street: "",
        city: "",
        contact: "",
        eMail: "",
    });

    const handleSubmit = async() => {
        if(formData.businessName !== 0 && formData.state !== 0 && formData.locations.length !== 0 && formData.street !== 0 && formData.city !== 0 && formData.contact !== 0 && formData.eMail !== 0) {
            axios.post('https://port-ind.herokuapp.com/services', formData)
            .then(() => {setFormData({
                businessName: "",
                state : "",
                locations : [],
                street: "",
                city: "",
                contact: "",
                eMail: "",
            }); 
            window.alert("Successfully created!")
        })
        } else {
            window.alert("Fill all fields!!")
        }
    }
    useEffect(() => {
        if(localStorage.getItem('AdminData') === null) {
            setLoggedIn(false)
        }
    }, []);
    if(!loggedIn) return (
        <div>
            <h1 style={{textAlign: "center", paddingTop: 20}}>Not Authorized</h1>
        </div>
    )

  return (
      <div className="Port_AdminPanel">
          <div className="Port_AdminPanel-form">
              <input type="text" value={formData.businessName} onChange={(e) => setFormData({...formData, businessName: e.target.value})} placeholder="Service Name" />
              <input type="text" value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})} placeholder="State" />
              <input type="text" value={formData.locations} onChange={(e) => {let locArr = e.target.value.split(","); setFormData({...formData, locations: locArr})}} placeholder="Locations (separate cities using commas)" />
              <input type="text" value={formData.street} onChange={(e) => setFormData({...formData, street: e.target.value})} placeholder="Street" />
              <input type="text" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} placeholder="City" />
              <input type="tel" value={formData.contact} onChange={(e) => setFormData({...formData, contact: e.target.value})} placeholder="Contact" />
              <input type="email" value={formData.eMail} onChange={(e) => setFormData({...formData, eMail: e.target.value})} placeholder="E-mail" />
              <button onClick={() => handleSubmit()}>Add service</button>
          </div>
      </div>
  )
};

export default AdminPanel;
