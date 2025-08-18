import { lazy } from "react";
import Hero from "../components/Hero";
const Aboutus = lazy(() => import("../components/Aboutus"));
const Info = lazy(() => import("../components/Info"));
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