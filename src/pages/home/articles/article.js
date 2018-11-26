import React from 'react';
import PropTypes from 'prop-types';

class Article extends React.Component {
    static propTypes = {
        source: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }

    render() {
        const { source, title, description } = this.props;
        return (
            <section>
                <header>
                    <h1>
                        <a href={source}>
                            {title}
                        </a>
                    </h1>
                </header>
                <p>
                    {description}
                </p>
            </section>
        );
    }
}

export default Article;
