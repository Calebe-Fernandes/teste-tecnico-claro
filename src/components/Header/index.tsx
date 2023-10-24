import eng from "../../text/eng";
import "./styles.scss";

function Header() {
  return (
    <header className="w-100">
      <h1>{eng["page-title"]}</h1>
      <p>{eng["page-description-line-1"]}</p>
    </header>
  );
}

export default Header;
