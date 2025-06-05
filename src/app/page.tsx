import Nav from "../components/Nav";
import Header from "../components/Header";
import Codepen from "../components/modules/Codepen";

export default function Home() {

  return (
    <div className="MainApp">
      {/* <Nav /> */}
      <Header />
      <main>
        <Codepen />
      </main>
    </div>
  );
}
