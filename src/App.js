import Content from "./components/layout/Content";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-4">
        <div className="container lg:col-span-1">
          <Sidebar />
        </div>

        <Content />
      </div>
    </>
  );
}

export default App;
