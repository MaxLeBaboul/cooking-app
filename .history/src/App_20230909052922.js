import { useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
      .then((res) => console.log(res));
  }, []);
  return (
    <div className="app-container">
      <h1>Cooking App</h1>
      <input type="text" placeholder="Tapez le nom d'un aliment (en anglais)" />
      <div className="meals-container"></div>
    </div>
  );
};

export default App;
