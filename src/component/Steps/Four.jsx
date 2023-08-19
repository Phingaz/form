import "./Four.scss";
import { Wrapper } from "../Utility/Wrapper";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Four = () => {
  const plan = useSelector((state) => state.userForm.plan);
  const price = useSelector((state) => state.userForm.pricing);
  const addons = useSelector((state) => state.userForm.addOns);
  console.log(addons);
  console.log(price);

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
                <h2>
                  {plan.selectedPlan} ({plan.isYearly ? "Yearly" : "Monthly"})
                </h2>
                <a>Change</a>
              </div>
              <p className="month">
                {plan.isYearly ? (
                  <>${price.arcade.yearly}/yr</>
                ) : (
                  <>${price.arcade.monthly}/mo</>
                )}
              </p>
            </div>
            {addons.online && (
              <div className="category">
                <p>Online service</p>
                {plan.isYearly ? (
                  <p className="plan__month">+${price.online.yearly}/yr</p>
                ) : (
                  <p className="plan__month">+${price.online.monthly}/mo</p>
                )}
              </div>
            )}
            {addons.storage && (
              <div className="category">
                <p>Larger Storage</p>
                {plan.isYearly ? (
                  <p className="plan__month">+${price.storage.yearly}/yr</p>
                ) : (
                  <p className="plan__month">+${price.storage.monthly}/mo</p>
                )}
              </div>
            )}
            {addons.profile && (
              <div className="category">
                <p>Profile service</p>
                {plan.isYearly ? (
                  <p className="plan__month">+${price.profile.yearly}/yr</p>
                ) : (
                  <p className="plan__month">+${price.profile.monthly}/mo</p>
                )}
              </div>
            )}
            <div className="category total">
              <p>Total ({plan.isYearly ? "per year" : "per month"})</p>
              {plan.isYearly ? (
                <p className="month">+${price.profile.yearly}/yr</p>
              ) : (
                <p className="month">+${price.profile.monthly}/mo</p>
              )}
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
