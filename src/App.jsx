import React, { useState, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Academics from "./pages/Academics.jsx";
import Admissions from "./pages/Admissions.jsx";
import News from "./pages/News.jsx";
import Contact from "./pages/Contact.jsx";
import Donate from "./pages/Donate.jsx";
import Careers from "./pages/Careers.jsx";
import ApplyCareers from "./pages/ApplyCareers.jsx";
import ApplyStudent from "./pages/ApplyStudent.jsx";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case "academics":
        return <Academics />;
      case "admissions":
        return <Admissions navigate={setActivePage} />;
      case "news":
        return <News />;
      case "contact":
        return <Contact />;
      case "donate":
        return <Donate />;
      case "careers":
        return <Careers navigate={setActivePage} />;
      case "apply-careers":
        return <ApplyCareers />;
      case "apply-student":
        return <ApplyStudent />;
      case "home":
        return <Home navigate={setActivePage} />;
      case "about":
        return <About />;
      default:
        return <Home navigate={setActivePage} />;
    }
  };

  return (
    <div className="font-sans antialiased min-h-screen text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="min-h-[80vh]">{renderPage()}</main>
      <Footer navigate={setActivePage} />
    </div>
  );
}
