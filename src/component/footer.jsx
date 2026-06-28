import React from "react";
import logo from "../assets/logo.png";
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineYoutube } from "react-icons/ai";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";

const Footer = () => {
  const styles = {
    footer: {
      fontFamily: "Arial, sans-serif",
    },
    top: {
      background: "linear-gradient(90deg, #3b0a6b, #0a1a5e)",
      color: "#fff",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      padding: "45px 60px",
      gap: "30px",
      fontSize: "14px",
    },
    logo: {
      width: "120px",
    },
    column: {
      maxWidth: "220px",
    },
    title: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "15px", 
      fontSize: "15px",
    },
    icon: {
      background: "rgba(255,255,255,0.2)",
      padding: "8px",
      borderRadius: "10px",
      fontSize: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paragraph: {
      margin: 0,
      lineHeight: "1.6",
    },
    socials: {
      display: "flex",
      gap: "12px",
      marginTop: "15px", // Added gap for social section
    },
    socialBtn: {
      width: "36px",
      height: "36px",
      background: "rgba(255,255,255,0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "10px",
      color: "#fff",
      fontSize: "20px",
      textDecoration: "none",
    },
    bottom: {
      background: "#ffffff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "12px 20px",
      position: "relative",
      fontSize: "13px",
    },
  };

  return (
    <footer style={styles.footer}>
      {/* Top Section */}
      <div style={styles.top}>
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" style={styles.logo} />
        </div>

        {/* Corporate Office */}
        <div style={styles.column}>
          <div style={styles.title}>
            <span style={styles.icon}><IoLocationOutline /></span>
            <h4 style={{ margin: 0 }}>Corporate Office:</h4>
          </div>
          <p style={styles.paragraph}>
            Suite B-5, Ballygunge Park Tower,
            <br />
            67B Ballygunge Circular Road,
            <br />
            Kolkata - 700019
          </p>
        </div>

        {/* Ahmedabad Office */}
        <div style={styles.column}>
          <div style={styles.title}>
            <span style={styles.icon}><IoLocationOutline /></span>
            <h4 style={{ margin: 0 }}>Ahmedabad Office:</h4>
          </div>
          <p style={styles.paragraph}>
            12/AA, Swastik Chambers, Near CU
            <br />
            Shah College, Ashram Road,
            <br />
            Ahmedabad - 380009
          </p>
        </div>

        {/* Contact */}
        <div style={styles.column}>
          <div style={styles.title}>
            <span style={styles.icon}><IoCallOutline /></span>
            <h4 style={{ margin: 0 }}>Call us on</h4>
          </div>
          <p style={styles.paragraph}>
            9674805912
            <br />
            9674585012
          </p>
        </div>

        {/* Social */}
        <div style={styles.column}>
          <h4 style={{ margin: "0 0 15px 0", fontSize: "15px" }}>Follow us on</h4>
          <div style={styles.socials}>
            <a href="#" style={styles.socialBtn}><AiOutlineInstagram /></a>
            <a href="#" style={styles.socialBtn}><AiOutlineFacebook /></a>
            <a href="#" style={styles.socialBtn}><AiOutlineYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div style={styles.bottom}>
        <p style={{ margin: 0 }}>
          Copyright 2025 | All rights reserved. Premier Schools Exhibition
        </p>
      </div>
    </footer>
  );
};

export default Footer;