import { useState } from "react";
import "./One.scss";
import { Wrapper } from "../Utility/Wrapper";
import { useNavigate } from "react-router-dom";

export const One = () => {
  const required = false;
  const [one, setOne] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleOneForm = (e) => {
    const { id, value } = e.target;
    setOne((p) => ({ ...p, [id]: value }));
  };

  return (
    <Wrapper>
      <div className="one">
        <h1>Personal info</h1>
        <p>Plese provide your name, email address, and phone number.</p>

        <form className="form">
          <div className="input_wrapper">
            <div className="input">
              <label htmlFor="name">
                Name
                <p>Error</p>
              </label>
              <input
                id="name"
                placeholder="e.g. Stephen King"
                value={one.name}
                onChange={handleOneForm}
                required={required}
              />
            </div>

            <div className="input">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="e.g.stephenking@lorem.com"
                value={one.email}
                onChange={handleOneForm}
                required={required}
              />
            </div>

            <div className="input">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                placeholder="e.g. +1 234 567 890"
                value={one.phone}
                onChange={handleOneForm}
                required={required}
              />
            </div>
          </div>

          <div className="btn">
            <button onClick={() => navigate("/plan")}>Next Step</button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
