import { useState } from "react";
import "./Three.scss";
import { Wrapper } from "../Utility/Wrapper";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAddons } from "../../redux/userSlice";

export const Three = () => {
  const navigate = useNavigate();
  const addOns = useSelector((state) => state.userForm.addOns);
  const price = useSelector((state) => state.userForm.pricing);

  const [one, setOne] = useState(addOns.online);
  const [two, setTwo] = useState(addOns.storage);
  const [three, setThree] = useState(addOns.profile);

  const yearly = useSelector((state) => state.userForm.plan.isYearly);
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(userAddons({ one, two, three }));
    navigate("/summary");
  };

  return (
    <Wrapper>
      <div className="three">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>

        <form className="form" onSubmit={handleForm}>
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
              {yearly ? (
                <p className="plan__month">+${price.online.yearly}/yr</p>
              ) : (
                <p className="plan__month">+${price.online.monthly}/mo</p>
              )}
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
              {yearly ? (
                <p className="plan__month">+${price.storage.yearly}/yr</p>
              ) : (
                <p className="plan__month">+${price.storage.monthly}/mo</p>
              )}
            </label>
            <label
              htmlFor="profile"
              className={`plan ${three ? "active" : ""}`}
            >
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
              {yearly ? (
                <p className="plan__month">+${price.profile.yearly}/yr</p>
              ) : (
                <p className="plan__month">+${price.profile.monthly}/mo</p>
              )}
            </label>
          </div>

          <div className="btns">
            <button type="button" onClick={() => navigate("/plan")}>
              Go back
            </button>
            <button>Next Step</button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
