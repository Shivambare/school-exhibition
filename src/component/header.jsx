import React, { useState, useEffect } from "react";
import logo from "../assets/logo.PNG"; 

const TOKEN = {
  navyDark: "#0d0a2e",
  purpleBtn: "#2d1b8e",
  white: "#ffffff",
};

export default function PremierHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: isScrolled ? "70px" : "100px",
        background: isScrolled ? "linear-gradient(90deg, #1a1058, #2d1b6e)" : "#ffffff",
        transition: "all 0.4s ease",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        boxShadow: isScrolled ? "0 4px 15px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div style={{ 
        maxWidth: "1400px", 
        width: "100%", 
        margin: "0 auto", 
        padding: "0 40px", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between" 
      }}>
        
        {/* LOGO BOX */}
        <div style={{
          width: isScrolled ? "60px" : "120px",
          height: isScrolled ? "60px" : "120px",
          background: "white", 
          padding: "5px", 
          borderRadius: "4px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          marginTop: isScrolled ? "0px" : "30px", 
          transition: "all 0.4s ease",
          overflow: "hidden"
        }}>
          <img src={logo} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* DYNAMIC BUTTON */}
        <button 
          onClick={() => setIsClicked(!isClicked)}
          style={{
            cursor: "pointer",
            border: isScrolled ? "none" : (isClicked ? "none" : `2px solid ${TOKEN.navyDark}`),
            background: isClicked ? TOKEN.navyDark : "transparent",
            padding: 0,
            borderRadius: "4px",
            overflow: "hidden",
            height: "40px",
            display: "flex",
            alignItems: "center",
            transition: "all 0.4s ease"
          }}
        >
          {isScrolled ? (
            /* Scrolled State: No border */
            <div style={{
              background: TOKEN.white, 
              color: TOKEN.purpleBtn,
              padding: "16px 24px", 
              borderRadius: "0px",
              fontWeight: "700", 
              fontSize: "14px",
              display: "flex", 
              alignItems: "center", 
              gap: "8px"
            }}>
              Register Now →
            </div>
          ) : (
            /* Initial State */
            <>
              <div style={{ 
                background: TOKEN.navyDark, 
                color: "white", 
                padding: "0 16px", 
                height: "100%", 
                display: "flex", 
                alignItems: "center",
                transition: "all 0.4s ease"
              }}>
                {isClicked ? "→" : "↗"}
              </div>
              <div style={{ 
                background: isClicked ? TOKEN.navyDark : TOKEN.white, 
                color: isClicked ? "white" : TOKEN.navyDark, 
                padding: "0 18px", 
                fontWeight: "800", 
                fontSize: "13px", 
                letterSpacing: "1px",
                transition: "all 0.4s ease"
              }}>
                REGISTER NOW
              </div>
            </>
          )}
        </button>
      </div>
    </header>
  );
}