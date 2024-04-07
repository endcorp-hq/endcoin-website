import Coin from './Coin';
import About from './About';
import Contact from './Contact';
import Hackathon from './Hackathon';
import WhitePaper from './WhitePaper';
import DataGraph from './DataGraph';

export default function Landing() {
  return (
    <>
      <div className="flex flex-col bg-[#09090E]">
        <Coin />
        <About />
        <Hackathon />
        <WhitePaper />
        <DataGraph />
        <Contact />
      </div>
    </>
  );
}
