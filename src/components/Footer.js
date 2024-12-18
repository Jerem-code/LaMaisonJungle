import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert("Entrez une adresse mail valide");
    }
  }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div>Laissez-nous votre mail :</div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleBlur}
        placeholder="Entrez votre mail"
      />
    </footer>
  );
}

export default Footer;
