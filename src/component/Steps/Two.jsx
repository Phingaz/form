import { useState } from "react";
import "./Two.scss";
import { Wrapper } from "../Utility/Wrapper";
import { useNavigate } from "react-router-dom";
import GamepadIcon from "@mui/icons-material/Gamepad";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

export const Two = () => {
  const [checked, setChecked] = useState("arcade");
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  const handlePlan = (e) => {
    setChecked(e.target.id);
  };

  const handlePlanToggle = () => {
    setToggle((p) => !p);
  };

  return (
    <Wrapper>
      <div className="two">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>

        <form className="form">
          <div className="input_wrapper">
            <div className="cards">
              <div className={`card ${checked === "arcade" ? "active" : ""}`}>
                <label htmlFor="arcade">
                  <GamepadIcon className="icon" />
                  <div className="info">
                    <h2>Arcade</h2>
                    {!toggle ? <p>$9/mo</p> : <p>$90/yr</p>}
                    {toggle && <p className="month">2 Months free</p>}
                  </div>
                </label>
                <input
                  id="arcade"
                  type="radio"
                  checked={checked === "arcade"}
                  onChange={handlePlan}
                />
              </div>

              <div className={`card ${checked === "advanced" ? "active" : ""}`}>
                <label htmlFor="advanced">
                  <VideogameAssetIcon className="icon two" />
                  <div className="info">
                    <h2>Advanced</h2>
                    {!toggle ? <p>$12/mo</p> : <p>$120/yr</p>}
                    {toggle && <p className="month">2 Months free</p>}
                  </div>
                </label>
                <input
                  id="advanced"
                  type="radio"
                  checked={checked === "advanced"}
                  onChange={handlePlan}
                />
              </div>

              <div className={`card ${checked === "pro" ? "active" : ""}`}>
                <label htmlFor="pro">
                  <SportsEsportsIcon className="icon three" />
                  <div className="info">
                    <h2>Pro</h2>
                    {!toggle ? <p>$15/mo</p> : <p>$150/yr</p>}
                    {toggle && <p className="month">2 Months free</p>}
                  </div>
                </label>
                <input
                  id="pro"
                  type="radio"
                  checked={checked === "pro"}
                  onChange={handlePlan}
                />
              </div>
            </div>

            <div className="toggle">
              <h2 className={!toggle ? "active" : ""}>Monthly</h2>
              <label className="switch">
                <input
                  type="checkbox"
                  value={toggle}
                  onClick={handlePlanToggle}
                />
                <span className="slider round"></span>
              </label>
              <h2 className={toggle ? "active" : ""}>Yearly</h2>
            </div>
          </div>

          <div className="btns">
            <button onClick={() => navigate("/")}>Go back</button>
            <button onClick={() => navigate("/addons")}>Next Step</button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
