import * as React from 'react';

import Login from './components/Login';
import '../styles/App.scss';

class App extends React.Component<{}, null> {
    render() {
        return (
            <div className="App">
                <Login />
            </div>
        );
    }
}

export default App;
