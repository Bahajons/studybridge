import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import ContactForm from "../layout/ContactForm";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                {/* <Navbar /> */}
                <ContactForm />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
