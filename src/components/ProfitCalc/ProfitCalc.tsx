import { useState } from "react";
import lossimg from "../../img/loss.gif";
import profitimg from "../../img/profit.webp";
import "./ProfitCalc.css";
import bills from "../../img/bills.jpg";

let isProfitcopy = false;
let isCalcDone = false;
let profitPercentcopy = "";
const ProfitCalc = () => {
  const [purchasePrice, setPurchasePrice] = useState<number>(NaN);
  const [quatity, setQuatity] = useState<number>(NaN);
  const [sellPrice, setSellPrice] = useState<number>(NaN);
  const [profit, setProfit] = useState<string>("");
  const [profitPercent, setProfitPercent] = useState<string>("");
  const [valall, setValall] = useState(true);
  const [isProfit, setIsProfit] = useState(false);
  const invalidateAmount = (e: number): boolean => isNaN(e) || e < 1;
  const imgsetter = () => {
    console.log(
      !isCalcDone,
      profitPercentcopy,
      parseFloat(profitPercentcopy) <= 50,
      !isProfit
    );
    if (!isCalcDone || parseFloat(profitPercentcopy) <= 50) {
      document.body.style.backgroundImage = `url("${String(bills)}")`;
    } else {
      if (!isProfitcopy) {
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
    let percent: number = (loss / (purchasePrice * quatity)) * 100;
    if (loss >= 1) {
      setIsProfit(false);
      isProfitcopy = false;

      setProfit(loss.toFixed(2));
      setProfitPercent(percent.toFixed(2));
      profitPercentcopy = percent.toFixed(2);
      imgsetter();
    } else {
      setIsProfit(true);
      isProfitcopy = true;
      setProfit((-1 * loss).toFixed(2));
      setProfitPercent((-1 * percent).toFixed(2));
      profitPercentcopy = (-1 * percent).toFixed(2);
      imgsetter();
    }
  };

  return (
    <div className="bcard">
      {/* <script>imgsetter();</script> */}
      <header className="head">
        <h1>Lets check your returns</h1>
      </header>

      <section className="input">
        <label>
          <div className="label">Purchase Price</div>
          <input
            type="number"
            value={purchasePrice}
            placeholder={"Enter cost price of stock"}
            onChange={(e) => {
              setPurchasePrice(parseFloat(e.target.value));
              isCalcDone = false;
              // imgsetter();
            }}
          />
        </label>

        <label>
          <div className="label"> Stock Quantity</div>
          <input
            type="number"
            value={quatity}
            placeholder={"Enter quantity of stock"}
            onChange={(e) => {
              setQuatity(parseFloat(e.target.value));
              isCalcDone = false;
              imgsetter();
            }}
          />
        </label>

        <label>
          <div className="text"> Current Price</div>
          <input
            type="number"
            value={sellPrice}
            placeholder={"Enter current price of stock"}
            onChange={(e) => {
              setSellPrice(parseFloat(e.target.value));
              isCalcDone = false;
              imgsetter();
            }}
          />
        </label>
      </section>

      <button
        className="button"
        onClick={() => {
          if (
            invalidateAmount(purchasePrice) ||
            invalidateAmount(quatity) ||
            invalidateAmount(sellPrice)
          ) {
            setValall(false);
          } else {
            isCalcDone = true;
            setValall(true);
            console.log(isCalcDone);
            calcRevenue(purchasePrice, quatity, sellPrice);
          }
        }}
      >
        Check
      </button>
      <div>
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
      </div>
    </div>
  );
};
export default ProfitCalc;
