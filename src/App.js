import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import GithubData from "./components/GithubData";
class App extends React.Component {
    state = {
        repositories: undefined
    }
    gettingWeather = async (e) => {
        const name = e.target.elements.city.value.trim();
        e.preventDefault();
        if(name) {
            const api_url = await fetch(`https://api.github.com/search/repositories?q=${name}+language:javascript&sort=stars&order=desc`);
        const res = await api_url.json();
        this.setState({repositories: res.items})
        }

    }
    render() {
        return (
            <div className="wrapper">
                <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 info"><Info/></div>
                        <div className="col-sm-7 form">
                        <Form weatherMethod={this.gettingWeather}/>
                <GithubData repositories={this.state.repositories}/>
                        </div>
                    </div>
                </div>
                </div>
                <button onClick={this.gettingWeather}></button>
            </div>
        );
    }
    
};
export default App;