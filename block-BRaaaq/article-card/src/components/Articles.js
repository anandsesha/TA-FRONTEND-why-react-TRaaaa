import data from '../data.json';
import PropTypes from 'prop-types';

function Articles() {
  return (
    <section className="articles container">
      <h2>Articles</h2>
      <div className="article-wrapper">
        {data.map((article) => (
          <Article key={article.publishedAt} {...article} />
        ))}
      </div>
    </section>
  );
}

function Article(props) {
  console.log(props);
  return (
    <div className="article">
      <img src={props.urlToImage} alt={props.title} />
      <p>{props.title.slice(0, 30).concat('...')}</p>
    </div>
  );
}

// To run typechecking on the props for a component, we have used the special propTypes property
Article.propTypes = {
  urlToImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Articles;
