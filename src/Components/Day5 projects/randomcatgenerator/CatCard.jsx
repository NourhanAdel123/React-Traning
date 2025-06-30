import React, { useEffect, useState } from "react";
import { useTheme } from "../../../context/ThemeContext";

const CatCard = () => {
  const [cat, setCat] = useState(null);
  const { theme, ToggleTheme } = useTheme();

  useEffect(() => {
    const fetchCat = async () => {
      const res = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await res.json();
      setCat(data[0].url);
    };
    fetchCat();
  }, []);

  const getNewCat = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    setCat(data[0].url);
  };

  const styles = {
    card: {
      background: theme === "dark" ? "#222" : "#eee",
      color: theme === "dark" ? "#fff" : "#000",
      padding: "1rem",
      textAlign: "center",
      borderRadius: "12px",
      width: "300px",
      margin: "2rem auto",
    },
    img: {
      maxWidth: "100%",
      borderRadius: "10px",
    },
    btn: {
      marginTop: "1rem",
      padding: "0.5rem 1rem",
      cursor: "pointer",
    },
  };
  return (
    <div style={styles.card}>
      <h2>Random Cat 🐱</h2>
      {cat ? <img src={cat} alt="A Cat" style={styles.img} /> : "Loading..."}
      <br />
      <button onClick={ToggleTheme} style={styles.btn}>
        Toggle Theme ({theme === "dark" ? "🌙" : "☀️"})
      </button>
      <button onClick={getNewCat} style={styles.btn}>
        New Cat 🐾
      </button>
    </div>
  );
};

export default CatCard;
