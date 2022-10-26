import { useState } from "react";
import "./styles.css";
import "mvp.css";
import BreakingBad from "./BreakingBad";

export default function App({ bbChars }) {
  //To capture states for the search filter
  const [search, setSearch] = useState("");

  //To capture states for the season filter
  const [season, setSeason] = useState(0);

  //Applying the season and search filter
  const seasonFiltered = bbChars.filter((seasonChar) => {
    return season === 0
      ? seasonChar.appearance.length === 5
      : seasonChar.appearance.includes(season) &&
          seasonChar.name.toLowerCase().includes(search.toLowerCase());
  });

  //Setting a different class for one of the html tag elements.
  const [hover, setHover] = useState(false);
  const hoverClass = hover ? "on" : "";

  //To change Content Title depending on menu selection.
  const title =
    season === 0 ? "All Season Characters" : "Season " + season + " Characters";

  return (
    <>
      <header style={{ margin: `10px auto -10px auto` }}>
        <img
          src="https://cdn.shopify.com/s/files/1/0587/1429/2388/collections/BreakingBad-Collection_Banner-1920x814-Option2.jpg?v=1639766741"
          className="img-fluid rounded"
          alt="breakingBad"
          style={{
            height: `150px`,
            width: `100%`,
            margin: `auto`
          }}
        ></img>
      </header>
      <h2
        className="text-center font-weight-bolder"
        style={{ margin: `-40px auto 10px auto` }}
      >
        Characters
      </h2>
      <nav className="navbar navbar-expand-xl bg-dark navbar-dark justify-content-center">
        <button
          className="navbar-brand bg-dark btn-outline-dark"
          onClick={() => setSeason(0)}
        >
          <img
            src="https://cutewallpaper.org/24/breaking-bad-logo-png/197014482.jpg"
            alt="logo"
            style={{ width: `40px` }}
          ></img>
        </button>
        <div
          className="collapse navbar-collapse "
          style={{ margin: `auto 200px`, width: `100%` }}
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <button
                className="nav-link bg-dark btn-outline-dark menuItem"
                onClick={() => setSeason(1)}
              >
                Season 1
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link bg-dark btn-outline-dark menuItem"
                onClick={() => setSeason(2)}
              >
                Season 2
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link bg-dark btn-outline-dark menuItem"
                onClick={() => setSeason(3)}
              >
                Season 3
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link bg-dark btn-outline-dark menuItem"
                onClick={() => setSeason(4)}
              >
                Season 4
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link bg-dark btn-outline-dark menuItem"
                onClick={() => setSeason(5)}
              >
                Season 5
              </button>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search by Name"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            ></input>
          </form>
        </div>
      </nav>
      <div className="container">
        <h3
          className={hoverClass}
          onMouseOver={() => setHover(!hover)}
          style={{ margin: `-100px auto 40px auto` }}
        >
          {title}
        </h3>
        <div style={{ display: `flex`, flexWrap: `wrap` }}>
          {seasonFiltered.map((m, i) => (
            <BreakingBad character={m} key={i} season={season} />
          ))}
        </div>
      </div>
    </>
  );
}
