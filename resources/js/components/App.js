import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div className="full-page">
            <div className="layer">
                <div className="columns quantum-layer">
                    <div className="column is-half is-relative px-0 py-0" id="navigation">
                        <div className="column is-one-fifth has-background-white hei-100 py-0 px-0">
                        </div>
                            <ul className="get-absolute top mx-4">
                                <li className="is-relative">
                                    <a className="button circular">
                                    <span className="icon">
                                        <i className="fas fa-user-ninja"></i>
                                    </span>
                                    </a>
                                    <span className="get-label">Biodata</span>
                                </li>
                                <li className="is-relative">
                                    <a className="button circular">
                                    <span className="icon">
                                        <i className="fas fa-magic"></i>
                                    </span>
                                    </a>
                                    <span className="get-label">Skillset</span>
                                </li>
                                <li className="is-relative">
                                    <a className="button circular">
                                    <span className="icon">
                                        <i className="fas fa-images"></i>
                                    </span>
                                    </a>
                                    <span className="get-label">Portofolio</span>
                                </li>
                            </ul>
                            <ul className="get-absolute bottom mx-4">
                                <li className="is-relative">
                                    <a className="button circular">
                                    <span className="icon">
                                        <i className="fas fa-home"></i>
                                    </span>
                                    </a>
                                    <span className="get-label">Home</span>
                                </li>
                            </ul>
                    </div>
                    <div className="column is-half has-background-white px-0 py-0">
                        <div className="py-5 px-5 quantum-dynamic">
                            {/* Dynamic Section  */}
                            <div className="content has-text-centered">
                            <h1>Hello World!</h1>
                            <p>My name is <b>Abdul Malik Aljun</b>, simply call me Jun or Zun. I’m a <b>Junior Web Programmer</b> and currently work as <b>Freelancer</b>.</p>
                            </div>
                        </div>
                            <footer className="has-text-centered quantum-footer">
                                Find Me on: <br/>
                                <a>
                                    <span className="icon">
                                        <i className="fab fa-linkedin"></i>
                                    </span>
                                </a>
                                <a>
                                    <span className="icon">
                                        <i className="fab fa-github"></i>
                                    </span>
                                </a>
                                <a>
                                    <span className="icon">
                                        <i className="fab fa-facebook"></i>
                                    </span>
                                </a>
                                <a>
                                    <span className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </span>
                                </a>
                                <a>
                                    <span className="icon">
                                        <i className="fab fa-instagram"></i>
                                    </span>
                                </a>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
