import React from "react";
import useCartInfo from "@/hooks/use-cart-info";

const RenderCartProgress = () => {
  const { total } = useCartInfo();
  const freeShippingThreshold = 200;
  const progress = (total / freeShippingThreshold) * 100;
  if (total < freeShippingThreshold) {
    const remainingAmount = freeShippingThreshold - total;
    return (
      <>
        <p>{`Add AED ${remainingAmount.toFixed(
          2
        )} more to qualify for free Gift Pack`}</p>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            data-width={`${progress}%`}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </>
    );
  }
  return (
    <>
      <p> You are eligible for Gift Pack 😍</p>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          data-width={`${progress}%`}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </>
  );
};

export default RenderCartProgress;
