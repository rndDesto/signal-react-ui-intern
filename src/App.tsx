import { Link } from "react-router-dom";


function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/example">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
