import { createRoot } from "react-dom/client";
import "mvp.css";
import "bootstrap-css-only";
import App from "./App";

(async function () {
  const url = "https://www.breakingbadapi.com/api/characters";
  const apiResponse = await fetch(url);
  const bbChars = await apiResponse.json();
  //const [isShown, setIsShown] = useState(true);

  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);
  console.log(bbChars);

  root.render(
    <>
      <div>
        <App bbChars={bbChars} />
      </div>
    </>
  );
})();
