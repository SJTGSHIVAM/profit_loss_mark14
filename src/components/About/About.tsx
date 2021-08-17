import "./About.css";
const About = () => {
  return (
    <div className="bcard mid-section">
      <header className="head">
        <h1>About</h1>
      </header>
      <section className="about">
        <h1 id="description">Description</h1>
        <p>
          This is a web app that calculate net and percent profit or loss and a
          trade give prices and quantity of stocks. Built using ReactJS.
        </p>
        <h1 id="live-link">Github Link</h1>
        <p>
          <a href="https://github.com/SJTGSHIVAM/profit_loss_mark14">
            Click here
          </a>
        </p>
        <h1 id="salient-features-are">Salient features are</h1>
        <ol className="">
          <li>Built using ReactJS.</li>
          <li>
            Have an input field to take the price of one stock when the user
            bought it
          </li>
          <li>Have an input field to take the quantity of the stocks</li>
          <li>Have an input field to take the current price per stock</li>
          <li>
            Show the total profit or loss made by the user in percentage and
            absolute value
          </li>
          <li>
            Change backgroud accordingly if profit or loss is greater than 50%
          </li>
        </ol>
      </section>
    </div>
  );
};
export default About;
