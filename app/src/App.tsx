import * as React from 'react';

import Login from './components/Login';
import MyAnimeList from './api/myanimelist';
import '../styles/App.scss';

class App extends React.Component<{}, null> {
    render() {
        let MAL = new MyAnimeList();
        MAL.getAnimeList()
            .then((response: string) => console.log(response))
            .catch((reason: {}) => console.log(reason));

        return (
            <div className="App">
                <Login />
            </div>
        );
    }
}

export default App;
