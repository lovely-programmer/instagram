import "./Footer.css";
import { useEffect, useState } from "react";

function Footer() {
  const [lang, setLang] = useState("");
  useEffect(() => {
    const lang = localStorage.getItem("lang");
    setLang(lang);
    localStorage.setItem("lang", "English");
  });

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <ul>
            <li>
              <a href="">Meta</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Jobs</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
            <li>
              <a href="">API</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="">Top Accounts</a>
            </li>
            <li>
              <a href="">Locations</a>
            </li>
            <li>
              <a href="">Instagram Lite</a>
            </li>
            <li>
              <a href="">Contact Uploading & Non-users</a>
            </li>
            <li>
              <a href="">Meta Verified</a>
            </li>
          </ul>
        </div>
        <div className="footer__bottom">
          <ul>
            <li>
              <select value={lang}>
                <option>Afrikaans</option>
                <option>Čeština</option>
                <option>Dansk</option>
                <option>Deutsch</option>
                <option>Ελληνικά</option>
                <option>English</option>
                <option>English (UK)</option>
                <option>Español (España)</option>
                <option>Español</option>
                <option>Suomi</option>
                <option>Français</option>
                <option>Bahasa Indonesia</option>
                <option>Italiano</option>
                <option>日本語</option>
                <option>한국어</option>
                <option>Bahasa Melayu</option>
                <option>Norsk</option>
                <option>Nederlands</option>
                <option>Polski</option>
                <option>Português (Brasil)</option>
                <option>Português (Portugal)</option>
                <option>Русский</option>
                <option>Svenska</option>
                <option>ภาษาไทย</option>
                <option>Filipino</option>
                <option>Türkçe</option>
                <option>中文(简体)</option>
                <option>中文(台灣)</option>
                <option>বাংলা</option>
                <option>ગુજરાતી</option>
                <option>हिन्दी</option>
                <option>Hrvatski</option>
                <option>Magyar</option>
                <option>ಕನ್ನಡ</option>
                <option>മലയാളം</option>
                <option>मराठी</option>
                <option>नेपाली</option>
                <option>ਪੰਜਾਬੀ</option>
                <option>සිංහල</option>
                <option>Slovenčina</option>
                <option>தமிழ்</option>
                <option>తెలుగు</option>
                <option>Tiếng Việt</option>
                <option>中文(香港)</option>
                <option>Български</option>
                <option>Français (Canada)</option>
                <option>Română</option>
                <option>Српски</option>
                <option>Українська</option>
              </select>
            </li>
            <li>© 2023 Instagram from Meta</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
