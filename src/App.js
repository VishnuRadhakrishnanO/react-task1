import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Card from './cardcomp'
import { useState } from 'react';
function App() {
  let pData = [
    {
      plan: "FREE",
      cur: "$",
      Price: 0,
      period: "month",
      offers: [
        {
          name: "Single User",
          isEnbl : true
        },
        {
          name: "5GB Storage",
          isEnbl : true
        },
        {
          name: "Unlimited Public Projects",
          isEnbl : true
        },
        {
          name: "Community Access",
          isEnbl : true
        },
        {
          name: "Unlimited Private Projects",
          isEnbl : false
        },
        {
          name: "Dedicated Phone Support",
          isEnbl : false
        },
        {
          name: "Free Subdomain",
          isEnbl : false
        },
        {
          name: "Monthly Status Reports",
          isEnbl : false
        }

      ]
    },

    {
      plan: "PLUS",
      cur: "$",
      Price: 9,
      period: "month",
      offers: [
        {
          name: "5 Users",
          isEnbl : true
        },
        {
          name: "50GB Storage",
          isEnbl : true
        },
        {
          name: "Unlimited Public Projects",
          isEnbl : true
        },
        {
          name: "Community Access",
          isEnbl : true
        },
        {
          name: "Unlimited Private Projects",
          isEnbl : true
        },
        {
          name: "Dedicated Phone Support",
          isEnbl : true
        },
        {
          name: "Free Subdomain",
          isEnbl : true
        },
        {
          name: "Monthly Status Reports",
          isEnbl : false
        }

      ]
    },

    {
      plan: "PRO",
      cur: "$",
      Price: 49,
      period: "month",
      offers: [
        {
          name: "Unlimited Users",
          isEnbl : true
        },
        {
          name: "150GB Storage",
          isEnbl : true
        },
        {
          name: "Unlimited Public Projects",
          isEnbl : true
        },
        {
          name: "Community Access",
          isEnbl : true
        },
        {
          name: "Unlimited Private Projects",
          isEnbl : true
        },
        {
          name: "Dedicated Phone Support",
          isEnbl : true
        },
        {
          name: "Unlimited Free Subdomain",
          isEnbl : true
        },
        {
          name: "Monthly Status Reports",
          isEnbl : true
        }

      ]
    
    },

  ]

  let buttonclick = ()=>{
    setTime(time +1)
  }

  // hooks
  const [time,setTime] =useState(0)
  return (
    <>
    <h3>Button Clicked{time}times</h3>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {
              pData.map((obj)=>{
                return <Card data={obj} handleButtonClick={buttonclick}></Card>
              }
              )
            }
          </div>
        </div>

      </section>
    </>
  );
}

export default App;
