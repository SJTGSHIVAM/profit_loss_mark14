import { useState } from "react";
import "./ProfitCalc.css";
const ProfitCalc = () => {
  const [purchasePrice, setPurchasePrice] = useState<number>(NaN);
  const [sellPrice, setSellPrice] = useState<number>(NaN);
  const [quatity, setQuatity] = useState<number>(NaN);

  const [valall, setValall] = useState(false);

  const [revenue, setRevenue] = useState(0);

  const validateAmount = (e: number): boolean => isNaN(e) || e < 1;

  return (
    <>
      <div className="bcard">
        <header className="head">
          <h1>Lets check your returns</h1>
        </header>

        <section className="input">
          <label>
            <span className="label">Purchase Price</span>
            <input type="number" value={0} onChange={() => {}} />
          </label>

          <label>
            <span className="label"> Stock Quantity</span>
            <input type="number" value={0} onChange={() => {}} />
          </label>

          <label>
            <span className="label"> Current Price</span>
            <input type="number" value={0} onChange={() => {}} />
          </label>

          <button>Check</button>
        </section>
        <span>{revenue}</span>
      </div>
    </>
  );
};
export default ProfitCalc;
