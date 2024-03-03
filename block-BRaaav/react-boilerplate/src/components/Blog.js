function Blog() {
  return (
    <section class="blog padding">
      <div class="container">
        <header class="sec-header text-center">
          <h2 class="heading">Our Blog</h2>
          <div class="dot-wrapper">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </header>
        <div class="flex wrap">
          <article class="flex article flex-48">
            <div class="flex-40 font-0">
              <img
                class="flexible-img"
                src="../../images/blog-image1.jpg"
                alt="Blog 1"
              />
            </div>

            <div class="flex-60 article-content">
              <time datetime="">
                <i class="far fa-clock"></i>
                December 22, 2017
              </time>
              <h3>How to find beautiful workspace?</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <a class="btn btn-tertiary" href="/">
                Read Article
              </a>
            </div>
          </article>
          <article class="flex article flex-48">
            <div class="flex-40 font-0">
              <img
                class="flexible-img"
                src="../../images/blog-image2.jpg"
                alt="Blog 1"
              />
            </div>

            <div class="flex-60 article-content">
              <time datetime="">
                <i class="far fa-clock"></i>
                December 18, 2017
              </time>
              <h3>Woman sportwear</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <a class="btn btn-tertiary" href="/">
                Read More
              </a>
            </div>
          </article>
          <article class="flex article flex-48">
            <div class="flex-40 font-0">
              <img
                class="flexible-img"
                src="../../images/blog-image3.jpg"
                alt="Blog 1"
              />
            </div>

            <div class="flex-60 article-content">
              <time datetime="">
                <i class="far fa-clock"></i>
                December 14, 2017
              </time>
              <h3>New creative fashion</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <a class="btn btn-tertiary" href="/">
                Read Article
              </a>
            </div>
          </article>
          <article class="flex article flex-48">
            <div class="flex-40 font-0">
              <img
                class="flexible-img"
                src="../../images/blog-image4.jpg"
                alt="Blog 1"
              />
            </div>

            <div class="flex-60 article-content">
              <time datetime="">
                <i class="far fa-clock"></i>
                December 10, 2017
              </time>
              <h3>Minimalist design trend in 2018</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <a class="btn btn-tertiary" href="/">
                View Detail
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Blog;
