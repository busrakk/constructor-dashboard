import Color from "./styles/color";
import { MENU_ICON } from "./icons/icons";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline" style={{ backgroundColor: Color.background }}>Hello world!</h1>
      <MENU_ICON size={24} />
    </div>
  );
}

export default App;
