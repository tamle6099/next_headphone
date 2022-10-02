import React from "react";
import Head from "next/head";
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";

function Layuot({ children }) {
  return (
    <div className="layuot">
      <Head>
        <title>Phone Strore</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layuot;
