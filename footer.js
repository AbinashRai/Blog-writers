class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="about-us">
        <div class="container">
            <div class="section-heading">
                <h3>About Us</h3>
            </div>
            <p class="text-center">
                CDRWriterAustralia.com is not affiliated with or endorsed by
                Engineers Australia. We are service providers in exchange for
                rewards. We are there 24/7 to facilitate you with our services from
                our expert and experienced writers. Our group of professional domain
                specific writers will help you get the report that can help achieve
                a 100% positive skills assessment. Feel free to contact us. Prepare
                your own reports as needed, using our services as a guide.
            </p>
        </div>
    </section>
    <section class="form-info">
      <div class="container">
        <div class="section-heading">
          <h3>CDR Writer Australia</h3>
        </div>
        <div class="row g-0 justify-content-around">
          <div class="col-12 col-lg-8">
            <div class="card">
              <div class="card-body">
                <form action="">
                  <div class="row g-4 g-md-5">
                    <div class="col-12 col-md-4">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Full Name*"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email*"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Phone Number*"
                      />
                    </div>
                    <div class="col-12 col-md-12">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Message"
                      />
                    </div>
                    <div class="form-button">
                      <button class="btn-all">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-8 col-lg-4">
            <div class="card">
              <div class="card-body">
                <p class="info-icon">
                  <i class="bi-envelope"></i>
                  <a href="mailto:info@cdrwriteraustralia.com">
                    info@cdrwriteraustralia.com</a
                  >
                </p>
                <p class="info-icon">
                  <i class="bi-geo-alt"></i>
                  <a href="#">George Street, Sydney, NSW, 2000 </a>
                </p>
                <p class="info-icon">
                  <i class="bi-telephone"></i>
                  <a href="#"> +61 480097490</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="container">
        <div class="row g-4 g-md-5 justify-content-around">
          <div class="col-12 col-md-6 col-lg-3">
            <h5>LOGO</h5>
            <p>
              Our boundless imagination helps us to help business solve their
              problem with technology in an innovative way.
            </p>
                <a href="#"><i class=" bi-twitter"></i></a>
                <a href="#"><i class="bi-facebook"></i></a>
                <a href="#"><i class="bi bi-reddit"></i> </a>
                <a href="#"><i class="bi bi-linkedin"></i> </a>
          </div>
          <div class="col-12 col-md-6 col-lg-2">
            <h4>USEFUL LINKS</h4>
            <ul>
              <li><a href="#">ANZSCO codes</a></li>
              <li><a href="#">CDR Samples</a></li>
              <li><a href="#">Positive Skill Assessment</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">PR point calculator</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Ask a expert</a></li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <h4>OUR SERVICES</h4>
            <ul>
              <li><a href="#">CDR Report Writing</a></li>
              <li><a href="#">ACS RPL Report Writing</a></li>
              <li><a href="#">KA02 Knowledge Accessment</a></li>
              <li><a href="#">Career Episode Writing</a></li>
              <li><a href="#">Summary Statement</a></li>
              <li><a href="#">CDR Report Review Service in Australia</a></li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <h4>BLOGS</h4>
            <ul>
              <li><a href="#">CDR Report For Electronics Engineer</a></li>
              <li>
                <a href="#">Complete CDR Report for Electrical Engineers</a>
              </li>
              <li>
                <a href="#"
                  >National Engineering Register|Engineers Australia NER</a
                >
              </li>
              <li>
                <a href="#"
                  >Everything to know about mechanical engineers'CDR reports</a
                >
              </li>
              <li>
                <a href="#">Skilled Independent Work Visa (Subclass 189)</a>
              </li>
              <li>
                <a href="#"
                  >How can a Relationship Statement be written for your
                  Partner's Visa</a
                >
              </li>
            </ul>
          </div>
        </div>
        <p class="text-center">© Copyright @ 2023 - CDR Writer Australia</p>
      </div>
    </footer>
      `;
  }
}
customElements.define("my-footer", MyFooter);
