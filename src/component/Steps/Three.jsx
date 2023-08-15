import { useState } from "react";
import "./Three.scss";
import { Wrapper } from "../Utility/Wrapper";
import { useNavigate } from "react-router-dom";

export const Three = () => {
  const required = false;

  const navigate = useNavigate();

  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(true);
  const [three, setThree] = useState(false);

  const [final, setFinal] = useState({ one, two });

  const handleAddon = () => {
    setFinal({
      one,
      two,
    });
  };

  return (
    <Wrapper>
      <div className="three">
        <h1 onClick={handleAddon}>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>

        <form className="form">
          <div className="input_wrapper">
            <label htmlFor="online" className={`plan ${one ? "active" : ""}`}>
              <div className="plan__wrapper">
                <input
                  id="online"
                  name="one"
                  value="One"
                  type="checkbox"
                  checked={one}
                  onChange={() => setOne((p) => !p)}
                />
                <div className="info">
                  <h2>Online service</h2>
                  <p>Access to multiplayer games</p>
                </div>
              </div>
              <p className="plan__month">+$1/mo</p>
            </label>
            <label htmlFor="storage" className={`plan ${two ? "active" : ""}`}>
              <div className="plan__wrapper">
                <input
                  id="storage"
                  name="storage"
                  value="Two"
                  type="checkbox"
                  checked={two}
                  onChange={() => setTwo((p) => !p)}
                />
                <div className="info">
                  <h2>Larger storage</h2>
                  <p>Extra 1TB of cloud save</p>
                </div>
              </div>
              <p className="plan__month">+$2/mo</p>
            </label>
            <label htmlFor="profile" className={`plan ${three ? "active" : ""}`}>
              <div className="plan__wrapper">
                <input
                  id="profile"
                  name="three"
                  value="Three"
                  type="checkbox"
                  checked={three}
                  onChange={() => setThree((p) => !p)}
                />
                <div className="info">
                  <h2>Customizable profile</h2>
                  <p>Custom theme on your profile</p>
                </div>
              </div>
              <p className="plan__month">+$2/mo</p>
            </label>
          </div>

          <div className="btns">
            <button onClick={() => navigate("/plan")}>Go back</button>
            <button onClick={() => navigate("/summary")}>Next Step</button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
