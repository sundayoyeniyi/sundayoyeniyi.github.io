import React from 'react';
import Header from './header/index';
import Articles from './articles/index';
import Footer from './footer/index';

class Home extends React.Component {
    render() {
        return (
            <main>
                <Header />
                <Articles />
                <Footer />
            </main>
        );
    }
}

export default Home;
