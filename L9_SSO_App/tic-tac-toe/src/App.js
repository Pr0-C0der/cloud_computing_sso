import "./App.css";
import TicTacToe from './TicTacToe';
import { useAuth0 } from "@auth0/auth0-react";

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
          <TicTacToe />
        </div>
        ) : (
          <div>

            <h1 className="intro">Welcome to Tic Tac Toe Game. Please Login to continue.</h1>
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