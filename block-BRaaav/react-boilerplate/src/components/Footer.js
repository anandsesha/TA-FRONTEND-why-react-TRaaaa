function Footer() {
  return (
    <footer class="footer padding">
      <div class="container">
        <div class="flex align-start">
          <div class="flex-40">
            <h3>Hydro Company</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              veniam autem illo recusandae sit velit adipisci ab perspiciatis
              voluptate. Eos fuga soluta necessitatibus provident ad culpa
              explicabo quod error maxime!
            </p>
          </div>
          <div class="flex-20">
            <h3>Company</h3>
            <nav>
              <ul>
                <li>
                  <a href="/">About us</a>
                </li>
                <li>
                  <a href="/">Join our team</a>
                </li>
                <li>
                  <a href="/">Read blog</a>
                </li>
                <li>
                  <a href="/">Press</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="flex-20">
            <h3>Services</h3>
            <nav>
              <ul>
                <li>
                  <a href="/">Pricing</a>
                </li>
                <li>
                  <a href="/">Documentation</a>
                </li>
                <li>
                  <a href="/">Support</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="flex-20">
            <h3>Find Us</h3>
            <address>
              AltCampus, Thehr, Khaniyara,
              <br />
              Kangra, Himachal Pradesh, 176218
            </address>
          </div>
        </div>
        <hr />
        <div class="flex footer-additional-info">
          <small> Copyright &copy; 2017 Your Company </small>
          <div class="flex">
            <p>Call us (+66) 010-020-0340</p>
            <nav>
              <ul class="flex">
                <li class="social-media-item">
                  <a href="/">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li class="social-media-item">
                  <a href="/">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="social-media-item">
                  <a href="/">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
