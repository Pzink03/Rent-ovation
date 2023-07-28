import "./css/billings.css";
import React, { useState } from "react";
import { useAuthContext } from "@galvanize-inc/jwtdown-for-react";


function BillingsPage() {
    const [name, setName] = useState([]);
    const [card_number, setCard_number] = useState([]);
    const [expirydate, setExpirydate] = useState([]);
    const [cvv, setCvv] = useState([]);
    const { token } = useAuthContext();
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
            const fetchOptions = {
                method: "post",
                body: JSON.stringify(data),
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        const createBillingsResponse = await fetch(url, fetchOptions);
        if (createBillingsResponse.ok) {
            setName('');
            setCard_number('');
            setExpirydate('');
            setCvv('');

        }
    };

  return (
    <>
    {/* Add the Font Awesome CSS link here */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
        <body class="specific">
            <div className="blur-background"></div>
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
                                placeholder="John M. Doe"
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
                            {/* Add the card-logo-input div here */}
                            <div className="card-logo-input">
                                <i className="fab fa-cc-visa" style={{ color: "navy" }}></i>
                                <i className="fab fa-cc-mastercard" style={{ color: "blue" }}></i>
                                <i className="fab fa-cc-amex" style={{ color: "red" }}></i>
                                <i className="fab fa-cc-discover" style={{ color: "orange" }}></i>
                            </div>
                            {/* End of card-logo-input div */}
                            <input
                                onChange={(e) => setCard_number(e.target.value)}
                                placeholder="1111222233334444"
                                required
                                type="text"
                                name="card_number"
                                id="card_number"
                                className="form-control"
                                value={card_number}
                            />

                        </div>
                        <div className="form-row">
                            <div class="form-group">
                            <label for="expiry_date">Expiry Date</label>
                            <input
                                onChange={(e) => setExpirydate(e.target.value)}
                                placeholder="MMYYYY"
                                required
                                type="text"
                                name="expirydate"
                                id="expirydate"
                                className="form-control"
                                value={expirydate}
                            />
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="cvv">CVV</label>
                            <input
                                onChange={(e) => setCvv(e.target.value)}
                                placeholder="123"
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
         {/* ... Your other HTML content ... */}
        </body>
    </>
    );
}; 

export default BillingsPage;