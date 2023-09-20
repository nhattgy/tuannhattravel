import { Fragment } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Popular from "./components/Popular/Popular";
import BestValueTrip from "./components/BestValueTrip/BestValueTrip";
import WhychoiceUs from "./components/WhychoiceUs/WhychoiceUs";
import ArticelesTrip from "./components/ArticlesTrip/ArticelesTrip";
import Footer from "./components/Footter/Fotter";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Popular />
      <BestValueTrip />
      <WhychoiceUs />
      <ArticelesTrip />
      <Footer />
    </Fragment>
  );
}

export default App;
