import "./Four.scss";
import { Wrapper } from "../Utility/Wrapper";
import { useNavigate } from "react-router-dom";

export const Four = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="four">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>

        <form className="form">
          <div className="input_wrapper">
            <div className="category first">
              <div className="info">
                <h2>Arcade (Monthly)</h2>
                <a>Change</a>
              </div>
              <p className="month">+$2/mo</p>
            </div>
            <div className="category">
              <p>Online service</p>
              <p className="month">+$2/mo</p>
            </div>
            <div className="category">
              <p>Larger storage</p>
              <p className="month">+$2/mo</p>
            </div>
            <div className="category last">
              <p>Total (per month)</p>
              <p className="month">+$2/mo</p>
            </div>
          </div>

          <div className="btns">
            <button onClick={() => navigate("/addons")}>Go back</button>
            <button onClick={() => navigate("/final")}>Confirm</button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
