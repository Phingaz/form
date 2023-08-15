/* eslint-disable react/prop-types */
import { Nav } from "./Nav";
import { Step } from "./Step";

export const Wrapper = (props) => {
  return (
    <div className="container">
      <Nav />
      <Step>{props.children}</Step>
    </div>
  );
};
