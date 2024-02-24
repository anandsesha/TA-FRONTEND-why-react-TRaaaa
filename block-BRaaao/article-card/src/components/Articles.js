import data from '../data.json';

function Articles() {
  return (
    <section className="articles container">
      <h2>Articles</h2>
      <div class="article-wrapper">
        {data.map((article) => (
          <Article {...article} />
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

export default Articles;
