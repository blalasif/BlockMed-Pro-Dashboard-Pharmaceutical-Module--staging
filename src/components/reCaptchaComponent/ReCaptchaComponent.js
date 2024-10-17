import React, { useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const DELAY = 1500;

const ReCaptchaComponent = ({ onValueChange, onExpiredChange }) => {
  const [callback, setCallback] = useState('false');
  const [load, setLoad] = useState(false);
  const reCaptchaRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(true);
    }, DELAY);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (value) => {
    onValueChange(value);  // Call the parent function to update the state
    if (value === null) {
      onExpiredChange('true');  // Update the parent state when expired
    } else {
      onExpiredChange('false');
    }
  };

  const asyncScriptOnLoad = () => {
    setCallback('true');
  };

  return (
    <div className="recaptcha-container">
      {load && (
        <ReCAPTCHA
          style={{ display: 'inline-block' }}
          ref={reCaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_TEST_SITE_KEY}
          onChange={handleChange}
          asyncScriptOnLoad={asyncScriptOnLoad}
        />
      )}
    </div>
  );
};

export default ReCaptchaComponent;
