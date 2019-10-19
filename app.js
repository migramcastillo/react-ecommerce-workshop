import React from "react";
import NavHeader from "./components/nav-header";
import Filter from "./components/filter";
import LoginCta from "./components/login-cta";
import Card from "./components/card";

const cardsList = [
  {
    title: "Cancun",
    description: "Lorem ipsum"
  },
  {
    title: "Playa del Carmen",
    description: "Lorem ipsum"
  },
  {
    title: "Cozumel",
    description: "Lorem ipsum"
  },
  {
    title: "Isla Mujeres",
    description: "Lorem ipsum"
  },
  {
    title: "Puerto Morelos",
    description: "Lorem ipsum"
  },
  {
    title: "Holbox",
    description: "Lorem ipsum"
  }
];

const App = () => {
  return (
    <>
      <NavHeader />
      <main>
        <Filter />
        <div className="container mx-auto">
          <div className="card-container font-nunito">
            {cardsList.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <div className="container mx-auto py-4 md:text-center">
          <LoginCta />
        </div>
      </main>
    </>
  );
};

export default App;
