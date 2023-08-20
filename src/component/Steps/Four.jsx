import "./Four.scss";
import { Wrapper } from "../Utility/Wrapper";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const Four = () => {
  const plan = useSelector((state) => state.userForm.plan);
  const price = useSelector((state) => state.userForm.pricing);
  const addons = useSelector((state) => state.userForm.addOns);

  const [total, setTotal] = useState(0);
  const [finalPlan, setFinalPlan] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const online = addons.online
      ? plan.isYearly
        ? price.online.yearly
        : price.online.monthly
      : 0;
    const storage = addons.storage
      ? plan.isYearly
        ? price.storage.yearly
        : price.storage.monthly
      : 0;
    const profile = addons.profile
      ? plan.isYearly
        ? price.profile.yearly
        : price.profile.monthly
      : 0;

    switch (plan.selectedPlan) {
      case "arcade":
        plan.isYearly
          ? setFinalPlan(price.arcade.yearly)
          : setFinalPlan(price.arcade.monthly);
        break;
      case "advanced":
        plan.isYearly
          ? setFinalPlan(price.advanced.yearly)
          : setFinalPlan(price.advanced.monthly);
        break;
      case "pro":
        plan.isYearly
          ? setFinalPlan(price.pro.yearly)
          : setFinalPlan(price.pro.monthly);
        break;
      default:
        break;
    }
    setTotal(online + storage + profile + finalPlan);
  }, [
    addons.online,
    addons.profile,
    addons.storage,
    finalPlan,
    plan.isYearly,
    plan.selectedPlan,
    price.advanced.monthly,
    price.advanced.yearly,
    price.arcade.monthly,
    price.arcade.yearly,
    price.online.monthly,
    price.online.yearly,
    price.pro.monthly,
    price.pro.yearly,
    price.profile.monthly,
    price.profile.yearly,
    price.storage.monthly,
    price.storage.yearly,
  ]);

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
                <a onClick={() => navigate("/")}>Change</a>
              </div>
              <p className="month">
                {plan.isYearly ? <>${finalPlan}/yr</> : <>${finalPlan}/mo</>}
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
                <p className="month">+${total}/yr</p>
              ) : (
                <p className="month">+${total}/mo</p>
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
