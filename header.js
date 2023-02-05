class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="fixed-top">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-top">
        <a class="navbar-brand" href="index.html">
          <img class="logo" src="./img/logo.webp" alt="..." />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto gap-lg-4">
            <li class="nav-item">
              <a href="index.html" class="nav-link">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="cdr-report-writing.html"
                    >CDR Report Writing</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="career-episode-writing.html"
                    >Career Episode Writing</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="summary-statement-engineer-australia.html"
                    >Summary Statement</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="acs-rpl-report.html"
                    >ACS RPL Report Writing</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="ka02-knowledge-assessment.html"
                    >KA02 Knowledge Assessment</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="cdr-report-review-service-australia.html"
                  >
                    CDR Report Review Service in Australia</a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="anzsco-codes.html">ANZSCO Codes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="australia-pr-points-calculator.html"
                >PR Points Calculator</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pricing.html">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="cdr-report-samples.html"
                >CDR Samples</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="blog.html">Blogs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
      `;
  }
}
customElements.define("my-header", MyHeader);
