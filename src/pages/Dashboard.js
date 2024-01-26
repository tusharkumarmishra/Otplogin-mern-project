import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const userValid = useCallback(() => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid");
    } else {
      navigate("*");
    }
  }, [navigate]);

  useEffect(() => {
    userValid();
  }, [userValid]);


  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome to my Website Sir</h1>
          </div>
          
        </div>
      </section>
    </>
  );
  
  

};

export default Dashboard;
