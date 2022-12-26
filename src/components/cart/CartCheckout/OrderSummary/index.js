import React from "react";
import OrderSummaryTitle from "./OrderSummaryTitle";
import "./index.css";
import SummaryGridContainer from "./SummaryGridContainer";
import CountName from "./CountName";
import ItemPrice from "../../ItemPrice";
import SubTotal from "../../SubTotal";

const OrderSummary = ({ checkout }) => {
  return (
    <div className="order-summary-container">
      {checkout.menuArray.map((menu) => {
        return (
          <SummaryGridContainer key={menu._id}>
            <CountName count={menu.count} name={menu.name} />
            <ItemPrice amount={menu.count * menu.price} />
          </SummaryGridContainer>
        );
      })}

      <hr
        style={{
          border: "1px solid white",
          width: "100%",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      />
      <SubTotal amount={checkout.restaurantTotalAmount} />
    </div>
  );
};

export default OrderSummary;
