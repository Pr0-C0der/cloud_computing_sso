import "./App.css";
import Calculator from './Calculator';
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (<div>
          <div class="button-container">
            <button className="btn"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              LOGOUT
            </button>
          </div>
          <Calculator />
        </div>
        ) : (
          <div>

            <h1 className="intro">Welcome to Basic Calculator App. Please Login to continue.</h1>
            <div class="button-container">
              <button className="btn" onClick={() => loginWithRedirect()}>
                LOGIN
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;