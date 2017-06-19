import * as React from 'react';

interface LoginProps {
    handleLogin?: (username: string, password: string) => void;
}

export default class Login extends React.Component<LoginProps, object> {
    render() {
        return (
            <div className="login-page">
                <form>
                    Username:<br />
                    <input type="text" name="username" /><br />
                    Password:<br />
                    <input type="password" name="password" /><br />
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}