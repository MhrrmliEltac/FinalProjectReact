import React, { useRef, useState } from "react";
import "../CSS/paymentsection.css";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/signin");
  };

  const location = useLocation();
  const { packageDetails } = location.state || {};

  const ref = useRef();

  const [formData, setFormData] = useState({
    domain: "",
    packageType: packageDetails?.package || "",
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
    paymentMethod: "",
  });

  const [errors, setErrors] = useState({});

  const handleCheck = () => {
    const newErrors = {};

    if (!formData.domain) {
      newErrors.domain = "!";
    }

    if (!formData.cardName) {
      newErrors.cardName = "!";
    }

    if (!formData.cardNumber) {
      newErrors.cardNumber = "!";
    }

    if (!formData.expDate) {
      newErrors.expDate = "!";
    }

    if (!formData.cvv) {
      newErrors.cvv = "!";
    }

    if (!formData.paymentMethod) {
      newErrors.paymentMethod = "!";
    }

    if (!ref.current.checked) {
      newErrors.privacy = "!";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("All information is valid. Proceeding to checkout...");
      // Proceed with the checkout process
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePaymentMethodChange = (e) => {
    setFormData((prevData) => ({ ...prevData, paymentMethod: e.target.value }));
  };

  return (
    <section className="payment-section">
      <div className="container">
        <div className="logo">
          <img src="/demo-hosting-logo-white.webp" alt="" />
          <h2>Checkout</h2>
        </div>
        <div className="info-section">
          <div className="container">
            <div className="heading-info">
              <span className="info-head">Already a Hosting Customer?</span>
              <button onClick={handleSignIn}>Sign In</button>
            </div>
            <div className="information">
              <div className="name-domain">
                <p>1. Choose a Domain</p>
                <div className="domain-name">
                  <span>Enter Your Domain</span>
                  <div className="enter-domain">
                    <input
                      type="search"
                      name="domain"
                      id="search"
                      value={formData.domain}
                      onChange={handleInputChange}
                    />
                    {errors.domain && (
                      <span className="error">{errors.domain}</span>
                    )}
                    <select
                      name="domainExtension"
                      id="domain"
                      className="domain-type"
                      onChange={handleInputChange}
                    >
                      <option value=".com">.com</option>
                      <option value=".net">.net</option>
                      <option value=".az">.az</option>
                      <option value=".site">.site</option>
                    </select>
                    <button className="search">Search</button>
                  </div>
                </div>
              </div>
              <div className="hosting-plan">
                <p>2. Choose a Hosting Plan</p>
                <div className="select-type">
                  <span>Package Type</span>
                  <select
                    name="packageType"
                    id="type"
                    className="type"
                    value={formData.packageType}
                    onChange={handleInputChange}
                  >
                    <option>{packageDetails.package}</option>
                  </select>
                </div>
              </div>
              <div className="billing-info">
                <p>3. Enter your Billing Info</p>
                <div className="payment-type">
                  <h3 className="type-head">Account Information</h3>
                  <div className="radio">
                    <div className="card-info">
                      <input
                        type="radio"
                        name="paymentMethod"
                        id="card"
                        value="card"
                        onChange={handlePaymentMethodChange}
                      />
                      <div className="img-card">
                        <img
                          className="discover"
                          src="https://static.registration.hostgator.com/46/static/reggie/img/credit-card-discover.svg"
                          alt=""
                        />
                        <img
                          src="https://static.registration.hostgator.com/46/static/reggie/img/credit-card-visa.svg"
                          alt=""
                          className="visa"
                        />
                        <img
                          className="mastercard"
                          src="https://static.registration.hostgator.com/46/static/reggie/img/credit-card-mastercard.svg"
                          alt=""
                        />
                        <img
                          className="amex"
                          src="https://static.registration.hostgator.com/46/static/reggie/img/credit-card-amex.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="paypal">
                      <input
                        type="radio"
                        name="paymentMethod"
                        id="paypal"
                        value="paypal"
                        onChange={handlePaymentMethodChange}
                      />
                      <img
                        className="paypal"
                        src="https://static.registration.hostgator.com/46/static/reggie/img/paypal.png"
                        alt=""
                      />
                    </div>
                  </div>
                  {errors.paymentMethod && (
                    <span className="error">{errors.paymentMethod}</span>
                  )}
                  <div className="info-card">
                    <label htmlFor="card-name">Name On Card</label>
                    <input
                      required
                      type="text"
                      name="cardName"
                      id="card-name"
                      value={formData.cardName}
                      onChange={handleInputChange}
                    />
                    {errors.cardName && (
                      <span className="error">{errors.cardName}</span>
                    )}
                    <label htmlFor="number">Credit Card Number</label>
                    <input
                      required
                      type="number"
                      name="cardNumber"
                      id="number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                    />
                    {errors.cardNumber && (
                      <span className="error">{errors.cardNumber}</span>
                    )}
                    <label htmlFor="datetime">Exp</label>
                    <input
                      type="text"
                      name="expDate"
                      id="datetime"
                      className="datetime"
                      value={formData.expDate}
                      onChange={handleInputChange}
                    />
                    {errors.expDate && (
                      <span className="error">{errors.expDate}</span>
                    )}
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="number"
                      name="cvv"
                      id="cvv"
                      className="cvv-number"
                      value={formData.cvv}
                      onChange={handleInputChange}
                    />
                    {errors.cvv && <span className="error">{errors.cvv}</span>}
                  </div>
                </div>
              </div>
              <div className="order-detail">
                <p>4. Review Order Details</p>
                <div className="detail-info">
                  <div className="live-chat">
                    <span>24/7/365 Live Chat, Email Support</span>
                    <span>FREE!</span>
                  </div>
                  <div className="instant">
                    <span>Instant Account Activation</span>
                    <span>FREE!</span>
                  </div>
                  <div className="hosting-addons">
                    <span className="amount">Amount</span>
                    <span>{packageDetails.price}$</span>
                  </div>
                </div>
              </div>
              <div className="privacy">
                <span>
                  By clicking "Checkout Now" you agree to the Auto Renewal
                  Terms, Terms of Service, Cancellation Policy and Privacy
                  Notice. All plans and products automatically renew until you
                  cancel. The renewal will be for the same term length and at
                  the then current regular rates. You may cancel any time, prior
                  to your renewal to prevent recurring charges, by logging into
                  your online billing portal or calling customer support at
                  (866) 96-GATOR.
                </span>
                <div className="paragraph">
                  <input
                    type="checkbox"
                    name="check"
                    id="check"
                    className="agree-check"
                    ref={ref}
                  />
                  <label htmlFor="check">
                    Yes, I want to hear more about how HostGator can help me
                    grow my business. Details.
                  </label>
                  {errors.privacy && (
                    <span className="error">{errors.privacy}</span>
                  )}
                </div>
              </div>
              <div className="check">
                <button onClick={handleCheck} className="check-btn">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-info"></div>
      </div>
    </section>
  );
};

export default Payment;
