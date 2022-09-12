import React, { Fragment } from "react";


import { Stepper, StepLabel, Step } from "@material-ui/core";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";


import "./CheckOutSteps.css";

const CheckoutSteps = ({ activeStep }) => {
  const steps = [
    {
      label: <h2>Shipping Details</h2>,
      icon: <LocalShippingIcon />,
    },
    {
      label: <h2>Confirm Order</h2>,
      icon: <LibraryAddCheckIcon />,
    },
    {
      label: <h2>Payment</h2>,
      icon: <AccountBalanceIcon />,
    },
  ];

  const stepStyles = {
    boxSizing: "border-box",
    backgroundColor: "#FFF5E4",
    fontfamily: "Montserrat",
  };

  return (
    <Fragment>
      <div className="checkOutBox">
        <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
          {steps.map((item, index) => (
            <Step
              key={index}
              active={activeStep === index ? true : false}
              completed={activeStep >= index ? true : false}
            >
              <StepLabel
                style={{
                  color:
                    activeStep >= index ? "#850E35" : "rgba(0, 0, 0, 0.649)",
                }}
                icon={item.icon}
              >
                {item.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    </Fragment>
  );
};

export default CheckoutSteps;
