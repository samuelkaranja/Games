import React, { useState } from "react";
import "./ToggleText.css";

const ToggleText = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="toggletext">
      <h2>Explore what OasisTips has to offer</h2>
      <span className="tt">Registration</span>
      <span className="tt">Step 1</span>
      <span className="info">
        To register go to the Oasis Tips Website and click sign up. All you need
        is to provide your personal information Phone number and your desired
        password.
      </span>

      {!showMore ? (
        <button className="more" onClick={handleToggle}>
          See more
        </button>
      ) : (
        <>
          <span className="tt">Step 2</span>
          <span className="info">
            After confirming your password and clicking agreeing to sign up to
            the terms conditions and privacy policy of oasis tips you will
            receive a verification token message with a code that you will enter
            to finish signing up. Entering the code will confirm you have
            registered successfully with oasis tips. Once you log in and have a
            valid subscription, today´s tips will be at your disposal for 24
            hours if you go with the daily plan for kshs 30.
          </span>
          <span className="tt">Deposit</span>
          <span className="info">
            To use oasis tips betting tips you have to make a Subscription to
            our daily tips depending on the duration. For daily tips, you part
            with kshs 30, weekly ksh150, two weeks kshs 300, and a monthly
            subscription of kshs 440 for almost accurate premier tips.
          </span>
          <span className="tt">Step 1</span>
          <span className="info">
            To make your deposit to your Oasis tips account Go to your Mpesa
            enter Oasis tips pay bill number 4018397 with the amount you wish to
            deposit and your phone number as the account number. <b>NOTE</b>.
            Standard money transfer charges apply
          </span>
          <span className="tt">Step 2</span>
          <span className="info">
            Your oasis account will be credited with the money you have
            deposited immediately. You will receive a message from their company
            KK ventures with your 10 daily tips or you can log into your account
            and view tip. e.g OASISTIPS GAME PREDICTIONS 13.00 Morocco vs
            Croatia X2 Germany vs Japan 1Over You can log into your desired
            betting platform and bet.
          </span>
          <span className="tt">About the Oasis tips app</span>
          <span className="info">
            Oasis tips have a unique and easy-to-use app. It is available on
            your android phone and can easily be downloaded from the Google Play
            store.
          </span>
          <span className="tt">Sports news</span>
          <span className="info">
            Oasis tips are not only about betting tips have recently introduced
            a news section. You are provided with purely sports news from
            trending stories, biographies of major players, etc. Football,
            athletics, and all competitive sports events.
          </span>
          <span className="tt">Terms of use</span>
          <span className="info">
            This app is purely for fun and information sourcing. It is not a
            betting app, which means, it is by no means related to betting or
            gambling. We simply do not encourage betting and gambling. Use this
            app for fun! Have fun Responsibly! For 18+ Only.
          </span>
          <span className="tt">Contact us</span>
          <span className="info">
            If you have any issues, you are free to contact our support team. At
            Oasis, we believe in our customers and are happy to hear from them.
            Let not your concerns, questions, and feedback go unanswered. Reach
            us at :
            <p>
              Twitter -
              <a href="https://twitter.com/OasisTips254">
                https://twitter.com/OasisTips254
              </a>
            </p>
            <p>
              Facebook -{" "}
              <a href="https://web.facebook.com/oasistips1/">
                https://web.facebook.com/oasistips1/
              </a>
            </p>
          </span>
          <button className="more" onClick={handleToggle}>
            See less
          </button>
        </>
      )}
    </div>
  );
};

export default ToggleText;
