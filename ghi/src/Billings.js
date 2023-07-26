import "./css/billings.css";
import React, { useState } from "react";


function BillingsPage() {
    const [name, setName] = useState([]);
    const [card_number, setCard_number] = useState([]);
    const [expirydate, setExpirydate] = useState([]);
    const [cvv, setCvv] = useState([]);

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }
    const handleCard_NumberChange = (event) => {
        const value = event.target.value;
        setCard_number(value);
    }
        const handleExpirydateChange = (event) => {
        const value = event.target.value;
        setExpirydate(value);
    }
    const handleCvvChange = (event) => {
        const value = event.target.value;
        setCvv(value);
    }
        const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.name = name;
        data.card_number = card_number;
        data.expirydate = expirydate;
        data.cvv = cvv;
        console.log(data);
        const url = 'http://localhost:8000/create/billings/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setName('');
            setCard_number('');
            setExpirydate('');
            setCvv('');

        }
    }

  return (
    <>
            <div class="container">
            <div className='row'>
            <div className='offset-3 col-6'>
                <div className="shadow p-4 mt-4">
                    <h1>Billing Information</h1>
                    <form onSubmit={handleSubmit} id="create-billings-form">
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                                required
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                value={name}
                            />
                        </div>
                        <div className="form-group">
                            <label for="card_number">Card Number</label>
                            <input
                                onChange={(e) => setCard_number(e.target.value)}
                                placeholder="Card_number"
                                required
                                type="text"
                                name="card_number"
                                id="card_number"
                                className="form-control"
                                value={card_number}
                            />
                        </div>
                        <div class="card-logo-input">
                            <i className="fab fa-cc-visa" style={{ color: "navy" }}></i>
                            <i className="fab fa-cc-mastercard" style={{ color: "blue" }}></i>
                            <i className="fab fa-cc-amex" style={{ color: "red" }}></i>
                            <i className="fab fa-cc-discover" style={{ color: "orange" }}></i>

                        </div>
                        <div className="form-row">
                            <div class="form-group">
                            <label for="expiry_date">Expiry Date</label>
                            <input
                                onChange={(e) => setExpirydate(e.target.value)}
                                placeholder="Expirydate"
                                required
                                type="month"
                                name="expirydate"
                                id="expirydate"
                                className="form-control"
                                value={expirydate}
                                max="9999-12"
                                min="0001-01"
                            />
                            
                        </div>
                        <div className="form-floating mb-3">
                            <label htmlFor="cvv">CVV</label>
                            <input
                                onChange={(e) => setCvv(e.target.value)}
                                placeholder="Cvv"
                                required
                                type="text"
                                name="cvv"
                                id="cvv"
                                className="form-control"
                                value={cvv}
                            />
                            </div>
                        </div>
                        <button className="btn btn-primary">Submit A Payment</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    
    </>
    );
}; 

export default BillingsPage;