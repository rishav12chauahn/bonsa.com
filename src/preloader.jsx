// Preloader.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Preloader = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart();
    const timeout = setTimeout(handleComplete, 1000); // Simulate loading for 1 second

    return () => clearTimeout(timeout);
  }, [location]);

  return loading ? (
    <div className="preloader">
      <div className="preloader-text">W2sInfotech</div>
    </div>
  ) : null;
};

export default Preloader;
