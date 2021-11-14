import logo from './logo.svg';
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './Routes/Routes'
import cors from 'cors'


function App() {
  return (
    <Auth0Provider
    domain="enersolar.us.auth0.com"
    clientId="giYs4xAbL2uAxfO3eNC4gXaQVkUHDn0P"
    redirectUri={window.location.origin}
  >
    <Routes/>
  </Auth0Provider>
  );
}

export default App;
