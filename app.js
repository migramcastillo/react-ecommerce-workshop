import React, { useState } from "react";
import NavHeader from "./components/nav-header";
import Filter from "./components/filter";
import Card from "./components/card";
import products from "./helpers/products";

const App = () => {
  const [currentFilter, setCurrentFilter] = useState("");

  return (
    <>
      <NavHeader />
      <main>
        <Filter active={currentFilter} setFilter={setCurrentFilter} />
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between font-nunito">
            {products
              .filter(item => {
                if (!currentFilter) {
                  return true;
                }

                return item.category.indexOf(currentFilter) !== -1;
              })
              .map((item, index) => (
                <Card
                  key={item.name}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  url={item.url}
                  category={item.category}
                />
              ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
