import "./css/billings.css";
import React from "react";
import logo from "./img/logo.png";
import header_image from "./img/header_image.jpg";
import sidebarhome from "./img/sidebarhome.png";
import { NavLink } from "react-router-dom";

function BillingsPage() {
  return (
    <>

        <div class="container">
        <h2>Billing Information</h2>
        <form id="billingForm">
            <div class="form-group">
                <label for="name">Name on Card</label>
                <input type="text" id="name" name="name"  placeholder="John M. Doe" required>
            </div>
            <div class="form-group">
                <label for="card_number">Card Number</label>
                <div class="card-logo-input">
                    <i class="fab fa-cc-visa" style="color:navy;"></i>
                    <i class="fab fa-cc-mastercard" style="color:blue;"></i>
                    <i class="fab fa-cc-amex" style="color:red;"></i>
                    <i class="fab fa-cc-discover" style="color:orange;"></i>
                <input type="text" id="card_number" name="card_number"  placeholder="1111-2222-3333-4444" required>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="expirydate">Expiry Date</label>
                    <input type="text" id="expirydate" name="expirydate" placeholder="MM/YY" required>
                </div>
                <div class="form-group">
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="352" required>
                </div>
            </div>
            <button type="submit">Submit A Payment</button>
        </form>
        </div>
    </>
    );
}

export default BillingsPage;