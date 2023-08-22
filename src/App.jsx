import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Card from "./components/Card";

function App() {
  return (
    <div className="flex items-center justify-center md:h-screen px-6 py-8">
      <div className="flex flex-col max-w-3xl">
        <Header />
        <Search />
        <Card />
      </div>
    </div>
  );
}

export default App;
