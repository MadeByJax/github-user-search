import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Card from "./components/Card";

function App() {
  return (
    <div className="mx-auto px-6 py-8">
      <Header />
      <Search />
      <Card />
    </div>
  );
}

export default App;
