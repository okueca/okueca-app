"use client";

import { useState, useEffect } from "react";
import Header from "./components/header";
import Main from "./components/main";
import Side from "./components/side";
import Footer from "./components/footer";

export default function Home() {
  const [data, setData] = useState(null);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      });
      let data = await res.json();
      setData(data);
      setScreenSize(window.innerWidth)
    }
    fetchPosts();
  }, []);

  

  return (
    <main className=" container mx-auto ">
      <Header screen={screenSize} data={data} />
      <section className="flex flex-row gap-5   flex-wrap w-100">
        <Main />
        <Side data={data} />
      </section>
      <Footer/>
    </main>
  );
}
