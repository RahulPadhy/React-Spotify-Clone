import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  // Like a Temporary storage in react
  // const [token, setToken] = useState(); // previouse code

  // Have to refactor it to use the reducer dispatch method


  const [{ user, token }, dispatch] = useDataLayerValue();


  // Run a code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    // convention for the one we are basically used for temporary storage
    const _token = hash.access_token;

    if (_token) {
      // setToken(_token);  // previouse code

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        // console.log('Person >>', user);
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });
    }

    // console.log('i have a token >>', token);
  }, []); // Run once after the value inside square bracket changes can add as many values inside it

  // console.log("user >>", user);
  // console.log("token >>", token);

  return (
    // BEM convention for CSS
    <div className="App">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }


    </div>
  );
}

export default App;
