import './App.css';
import React from 'react';

function App() {
  const features1 = [
    { name: "Single User", isCorrect: true },
    { name: "50GB Storage", isCorrect: true },
    { name: "Unlimited Public Projects", isCorrect: true },
    { name: "Community Access", isCorrect: true },
    { name: "Unlimited Private Projects", isCorrect: false },
    { name: "Dedicated Phone Support", isCorrect: false },
    { name: "Free Subdomain", isCorrect: false },
    { name: "Monthly Status Reports", isCorrect: false }
  ]; // Features for the first card

  const features2 = [
    { name: "5 Users", isCorrect: true },
    { name: "50GB Storage", isCorrect: true },
    { name: "Unlimited Public Projects", isCorrect: true },
    { name: "Community Access", isCorrect: true },
    { name: "Unlimited Private Projects", isCorrect: true },
    { name: "Dedicated Phone Support", isCorrect: true },
    { name: "Free Subdomain", isCorrect: true },
    { name: "Monthly Status Reports", isCorrect: false }
  ]; // Features for the second card

  const features3 = [
    { name: "Unlimited Users", isCorrect: true },
    { name: "50GB Storage", isCorrect: true },
    { name: "Unlimited Public Projects", isCorrect: true },
    { name: "Community Access", isCorrect: true },
    { name: "Unlimited Private Projects", isCorrect: true },
    { name: "Dedicated Phone Support", isCorrect: true },
    { name: "Free Subdomain", isCorrect: true },
    { name: "Monthly Status Reports", isCorrect: true }
  ]; // Features for the third card

  return (
    <div className="container">
      <Cards method="Free" price="$0/month" features={features1} />
      <Cards method="Plus" price="$9/month" features={features2} />
      <Cards method="Pro" price="$49/month" features={features3} />
    </div>
  );
}

export default App;

function Cards(props) {
  return (
    <div className='cards'>
      <h5 className='price-method'>{props.method}</h5>
      <h1 className='price'>{props.price}</h1>
      <ul className='list-feature'>
        {props.features.map((feature, index) => (
          <li key={index} className={feature.isCorrect === false ? "red-text" : ""}>
            {feature.isCorrect ? "✔" : "✖"} &nbsp;{feature.name} 
          </li>
        ))}
      </ul>
      <button className='submit' type="button">Button</button>
    </div>
  )
}
