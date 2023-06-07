import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="container flex">
        <Sidebar />
        <div>Ana içerik buraya gelecek</div>
      </div>
    </>
  );
}

export default App;
