import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <hgroup>
                    <div>
                        <span>SO</span>
                    </div>
                    <div>
                        <h1>Sunday Oyeniyi</h1>
                        <h2>
                            brief on projects in my
                            <a href="https://github.com/sundayoyeniyi?tab=repositories">public github repo</a>
                        </h2>
                    </div>
                </hgroup>
            </header>
        );
    }
}

export default Header;
