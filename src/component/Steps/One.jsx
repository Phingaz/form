import { useState } from "react";
import "./One.scss";
import { Wrapper } from "../Utility/Wrapper";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../../redux/userSlice";

export const One = () => {
  const required = false;

  const user = useSelector((state) => state.userForm.user);

  const [one, setOne] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
  });
  const [error, setError] = useState({
    state: false,
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const dispatch = useDispatch(one);

  const handleOneForm = (e) => {
    setError({ state: false, name: "", email: "", phone: "" });
    const { id, value } = e.target;
    setOne((p) => ({ ...p, [id]: value }));
  };

  const handleForm = (e) => {
    const emailPattern = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    e.preventDefault();
    if (one.name.trim().length <= 3) {
      setError({
        state: true,
        name: "Please enter your full name",
      });
      return;
    }
    if (emailPattern.test(one.email) === false) {
      setError({
        state: true,
        email: "Please enter a valid email address",
      });
      return;
    }
    if (one.phone < 8) {
      setError({
        state: true,
        phone: "Please enter a valid phone number",
      });
      return;
    }
    dispatch(userInfo(one));
    navigate("/plan");
  };

  return (
    <Wrapper>
      <div className="one">
        <h1>Personal info</h1>
        <p>Plese provide your name, email address, and phone number.</p>

        <form className="form" onSubmit={handleForm}>
          <div className="input_wrapper">
            <div className="input">
              <label htmlFor="name">
                Name
                {error.state && <p>{error.name}</p>}
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
              <label htmlFor="email">
                Email Address
                {error.state && <p>{error.email}</p>}
              </label>
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
              <label htmlFor="phone">
                Phone
                {error.state && <p>{error.phone}</p>}
              </label>
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
            <button>Next Step</button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
