import Mealplan from "./components/MealPlan";
import headerImage from "./assets/mensamatch_logo.png";

function App() {
  return (
    <>
      <div className="header">
        <img src={headerImage} alt="Logo" />
      </div>
      <div className="box">
        <Mealplan></Mealplan>
      </div>
    </>
  );
}

export default App;
