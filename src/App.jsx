import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { getItems } from "./utils/api";
import itemsData from "./utils/Data";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true); 

    getItems()
      .then((data) => {
        console.log("FROM API:", data);
        setItems(data);
      })
      .catch((err) => {
        console.error("Using fallback data:", err);
        setItems(itemsData);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />

      {isLoading ? <p>Loading items...</p> : <Main items={items} />}

      <Footer />
    </div>
  );
}

export default App;
