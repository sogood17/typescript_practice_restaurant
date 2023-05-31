import { useState } from "react";
import "./styles.css";
import Store from "./Store";
import { Address, Restaurant } from "./restaurant";
import BestMenu from "./BestMenu";

let data = {
  name: "언니네 식당",
  category: "western",
  address: {
    city: "Incheon",
    detail: "somewhere",
    zipCode: 23425634
  },
  menu: [{ name: "rose pasta", price: 2000, category: "PASTA" }, {}]
};

const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
  };
  const showBestMenuName = (name: string) => {};
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Store info={myRestaurant} changeAddress={changeAddress} />
      <BestMenu
        name="불고기피자"
        category="피자"
        price={1000}
        showBestMenuName={showBestMenuName}
      />
    </div>
  );
};

export default App;
