import { doc } from "prettier";
import { useState } from "react";
import lossimg from "../../img/loss.gif";
import profitimg from "../../img/profit.webp";
import "./ProfitCalc.css";
const ProfitCalc = () => {
  const [purchasePrice, setPurchasePrice] = useState<number>(NaN);
  const [quatity, setQuatity] = useState<number>(NaN);
  const [sellPrice, setSellPrice] = useState<number>(NaN);
  const [profit, setProfit] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [profitPercent, setProfitPercent] = useState<string>("");
  const [isCalcDone, setIsCalcDone] = useState(false);
  const [valall, setValall] = useState(true);
  const [isProfit, setIsProfit] = useState(false);

  const invalidateAmount = (e: number): boolean => isNaN(e) || e < 1;
  const imgsetter = () => {
    console.log(!isCalcDone, parseFloat(profitPercent) <= 50, !isProfit);
    if (!isCalcDone || parseFloat(profitPercent) <= 50) {
      document.body.style.backgroundImage = `url()`;
    } else {
      if (!isProfit) {
        document.body.style.backgroundImage = `url(${String(lossimg)})`;
        console.log(document.body.style.backgroundImage);
      } else document.body.style.backgroundImage = `url(${String(profitimg)})`;
    }
  };
  const calcRevenue = (
    purchasePrice: number,
    quatity: number,
    sellPrice: number
  ) => {
    let loss: number = (purchasePrice - sellPrice) * quatity;
    let percent: number = (loss / purchasePrice) * 100;
    if (loss >= 1) {
      setIsProfit(false);
      imgsetter();
      setProfit(loss.toFixed(2));
      setProfitPercent(percent.toFixed(2));
    } else {
      setIsProfit(true);
      imgsetter();
      setProfit((-1 * loss).toFixed(2));
      setProfitPercent((-1 * percent).toFixed(2));
    }
  };

  return (
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
              setIsCalcDone(false);
              imgsetter();
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
              setIsCalcDone(false);
              imgsetter();
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
              setIsCalcDone(false);
              imgsetter();
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
              setIsCalcDone(true);
              setValall(true);
              console.log(isCalcDone);
              calcRevenue(purchasePrice, quatity, sellPrice);
            }
          }}
        >
          Check
        </button>
      </section>
      <span>
        {valall
          ? isCalcDone &&
            (isProfit
              ? "You gained " +
                profitPercent +
                "%. Your total profit is ₹" +
                profit
              : "You lost " +
                profitPercent +
                "%. Your total loss is ₹" +
                profit)
          : "Please enter values greater than 0 (only numbers are allowed in above fields)"}
      </span>
    </div>
  );
};
export default ProfitCalc;
