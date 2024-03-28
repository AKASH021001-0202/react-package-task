import './App.css';
import React from 'react';


const freePlan = {
  method: "Free",
  price: "$0/month",
  features: [
    { name: "Single User", isCorrect: true },
    { name: "50GB Storage", isCorrect: true },
    { name: "Unlimited Public Projects", isCorrect: true },
    { name: "Community Access", isCorrect: true },
    { name: "Unlimited Private Projects", isCorrect: false },
    { name: "Dedicated Phone Support", isCorrect: false },
    { name: "Free Subdomain", isCorrect: false },
    { name: "Monthly Status Reports", isCorrect: false }
  ]
};

const plusPlan = {
  method: "Plus",
  price: "$9/month",
  features: [
    { name: "5 Users", isCorrect: true },
    { name: "50GB Storage", isCorrect: true },
    { name: "Unlimited Public Projects", isCorrect: true },
    { name: "Community Access", isCorrect: true },
    { name: "Unlimited Private Projects", isCorrect: true },
    { name: "Dedicated Phone Support", isCorrect: true },
    { name: "Free Subdomain", isCorrect: true },
    { name: "Monthly Status Reports", isCorrect: false }
  ]
};

const proPlan = {
  method: "Pro",
  price: "$49/month",
  features: [
    { name: "Unlimited Users", isCorrect: true },
    { name: "50GB Storage", isCorrect: true },
    { name: "Unlimited Public Projects", isCorrect: true },
    { name: "Community Access", isCorrect: true },
    { name: "Unlimited Private Projects", isCorrect: true },
    { name: "Dedicated Phone Support", isCorrect: true },
    { name: "Free Subdomain", isCorrect: true },
    { name: "Monthly Status Reports", isCorrect: true }
  ]
};

function App() {
  return (
    <div className="container">
      <Cards name={freePlan} />
      <Cards name={plusPlan} />
      <Cards name={proPlan} />
    </div>
  );
}

export default App;

function Cards(props) {
  // console.log(props)
  const plan = props.name;
 
  return (
    <div className='cards'>
      <h5 className='price-method'>{plan.method}</h5>
      <h1 className='price'>{plan.price}</h1>
      <ul className='list-feature'>
        {plan.features.map((feature, index) => (
          <li key={index} className={feature.isCorrect === false ? "red-text" : ""}>
            {feature.isCorrect ? "✔" : "✖"} &nbsp;{feature.name} 
          </li>
        ))}
      </ul>
      <button className='submit' type="button">Button</button>
    </div>
  )
}
