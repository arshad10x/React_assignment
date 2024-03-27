import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  errorContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div style={styles.errorContainer}>
      <h1>Oops! home</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
};
export default ErrorPage;
