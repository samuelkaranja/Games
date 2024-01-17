import { useState } from "react";
import Button from "./Button";
import Form from "./Form";
import "./Pricing.css";

const Pricing = () => {
  const [amount, setAmount] = useState(30);

  const handleAmountChange = (newAmount) => {
    setAmount(newAmount);
  };

  const handleClick = () => {
    console.log("Button Clicked");
  };
  return (
    <div className="pricing">
      <div className="stk_push">
        <div className="amount1">
          <Button onClick={handleClick} label="Daily 30" />
          <Button onClick={handleClick} label="Weekly 150" />
        </div>
        <div className="amount2">
          <Button onClick={handleClick} label="Two Weeks 300" />
          <Button onClick={handleClick} label="Monthly 440" />
        </div>
      </div>
      <h2 style={{ fontSize: "26px", fontWeight: "400", padding: "20px 0" }}>
        Or
      </h2>
      <div className="pay">
        <h2>Deposit</h2>
        <Form amount={amount} onChangeAmount={handleAmountChange} />
      </div>
      <div className="paybill">
        <p>
          Mpesa Paybill: <span>4018397</span>
        </p>
        <p>
          Account: <span>KK VENTURES LTD</span>
        </p>
      </div>
    </div>
  );
};

export default Pricing;
