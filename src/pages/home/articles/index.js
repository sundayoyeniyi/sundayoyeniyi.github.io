import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import Article from './article';
import data from '../../../data/data';

class Articles extends React.Component {
    render() {
        return (
            <article>
                {data.map(article => <Article
                    source={article.src}
                    title={article.title}
                    description={article.description}
                    key={article.src}
                />)}
            </article>
        );
    }
}

export default Articles;
