import SmoothScroll from "./components/SmoothScroll";
import "./App.css";

const App = () => {
  return (
    <SmoothScroll>
      <div data-scroll-section className="p-10 bg-red-50 text-6xl">
        <h1 data-scroll>Hey</h1>
        <p data-scroll>👋</p>
      </div>
      <div data-scroll-section className="p-10 bg-red-50 text-6xl">
        <h2 data-scroll data-scroll-speed="1">
          What's up?
        </h2>
        <p data-scroll data-scroll-speed="-4">
          😬
        </p>
      </div>
    </SmoothScroll>
  );
};
export default App;
