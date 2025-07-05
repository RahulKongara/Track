import { lazy } from "react";
import Hero from "../components/Hero";
// import Aboutus from "../components/Aboutus";
const Aboutus = lazy(() => import("../components/Aboutus"));
// import Info from "../components/Info";
const Info = lazy(() => import("../components/Info"));
// import CheckOutMore from "../components/CheckOutMore";
const CheckOutMore = lazy(() => import("../components/CheckOutMore"));

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Aboutus />
      <Info />
      <CheckOutMore />
    </div>
  )
}

export default Home