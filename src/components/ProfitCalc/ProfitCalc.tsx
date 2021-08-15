import { useState } from "react";
import "./ProfitCalc.css";
const ProfitCalc = () => {
  const [purchasePrice, setPurchasePrice] = useState<number>(NaN);
  const [quatity, setQuatity] = useState<number>(NaN);
  const [sellPrice, setSellPrice] = useState<number>(NaN);

  const [valall, setValall] = useState(false);

  const [revenue, setRevenue] = useState<number>(NaN);

  const invalidateAmount = (e: number): boolean => isNaN(e);

  return (
    <>
      <div className="bcard">
        <header className="head">
          <h1>Lets check your returns</h1>
        </header>

        <section className="input">
          <label>
            <span className="label">Purchase Price</span>
            <input
              type="number"
              value={purchasePrice}
              placeholder={"Enter cost price of stock"}
              onChange={(e) => {
                setPurchasePrice(parseFloat(e.target.value));
              }}
            />
          </label>

          <label>
            <span className="label"> Stock Quantity</span>
            <input
              type="number"
              value={quatity}
              placeholder={"Enter quantity of stock"}
              onChange={(e) => {
                setQuatity(parseFloat(e.target.value));
              }}
            />
          </label>

          <label>
            <span className="label"> Current Price</span>
            <input
              type="number"
              value={sellPrice}
              placeholder={"Enter current price of stock"}
              onChange={(e) => {
                setSellPrice(parseFloat(e.target.value));
              }}
            />
          </label>

          <button
            onClick={() => {
              if (
                invalidateAmount(purchasePrice) ||
                invalidateAmount(quatity) ||
                invalidateAmount(sellPrice)
              ) {
                setValall(false);
              } else {
              }
            }}
          >
            Check
          </button>
        </section>
        <span>{revenue}</span>
      </div>
    </>
  );
};
export default ProfitCalc;
