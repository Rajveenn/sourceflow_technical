"use client";
import { Hero } from "@/modules/home";
import { Partners } from "@/modules/home";
import { Jobs } from "@/modules/home";
import { useState } from "react";
import Loader from "../components/loader";

const MainPage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Hero />
          <Partners />
          <Jobs />
        </div>
      )}
    </div>
  );
};
export default MainPage;
