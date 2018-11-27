import React from 'react';
import Article from './article';
import data from '../../../data/data';

class Articles extends React.Component {
    render() {
        const articles = data;
        return (
            <article>
                {articles.map(article => <Article
                    source={article.src}
                    title={article.title}
                    escription={article.description}
                    key={article.src}
                />)}
            </article>
        );
    }
}

export default Articles;
