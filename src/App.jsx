import Card from "./components/Card";
import { cardContent } from "./content";

function App() {
  return (
    <>
      <section className="w-full h-screen bg-[#FAFAF9] px-8 flex justify-center items-center">
        <Card content={cardContent} />
      </section>
    </>
  );
}

export default App;
