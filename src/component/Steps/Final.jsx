import "./Final.scss";
import { Wrapper } from "../Utility/Wrapper";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
export const Final = () => {
  return (
    <main className="main">
      <Wrapper>
        <div className="final">
          <CheckOutlinedIcon className="icon"/>
          <h1>Thank you</h1>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at piinoya@gmail.com
          </p>
        </div>
      </Wrapper>
    </main>
  );
};
