import "./App.css";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="min-h-screen relative">
      <div className="bg-image absolute inset-0 z-0"></div>
      <div className="bg-yellow-500 opacity-10 absolute inset-0 z-0"></div>
      <div className="relative z-10 flex items-center justify-center">
        <Pages />
      </div>
    </div>
  );
}

export default App;
