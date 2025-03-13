// src/pages/PhoneSignIn.jsx
import React, { useState } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../firebase";

const PhoneSignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);

  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        handleSignIn();
      }
    }, auth);
  };

  const handleSignIn = () => {
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
        console.log("SMS sent");
      }).catch((error) => {
        console.error("Error during sign-in", error);
      });
  };

  const verifyCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);
    auth.signInWithCredential(credential)
      .then((result) => {
        console.log("User signed in");
      }).catch((error) => {
        console.error("Error verifying code", error);
      });
  };

  return (
    <div className="container my-5">
      <h2>Sign in with Phone Number</h2>
      <div id="recaptcha-container"></div>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter phone number"
      />
      <button onClick={handleSignIn}>Send Verification Code</button>
      {verificationId && (
        <>
          <input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="Enter verification code"
          />
          <button onClick={verifyCode}>Verify Code</button>
        </>
      )}
    </div>
  );
};

export default PhoneSignIn;