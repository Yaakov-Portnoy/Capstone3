import React from "react";
import "../App.css";

function Home() {
  return (
    <div className="home-page">

      {/* =========================
          NAVIGATION
      ========================== */}
      <nav className="navbar">
        <div className="nav-container">

          <a href="/" className="brand">
            Tech<span>ids</span>
          </a>

          <div className="nav-links">
            <a href="/" className="active">Home</a>
            <a href="/about">About</a>
            <a href="/workshops">Workshops</a>
            <a href="/videos">Lessons</a>
            <a href="/get-involved">Get Involved</a>
            <a href="/contact">Contact</a>

            <a href="/get-involved" className="nav-cta">
              Get Involved →
            </a>
          </div>

        </div>
      </nav>


      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="hero-section">

        <div className="hero-grid">

          {/* LEFT SIDE */}
          <div className="hero-content">

            <div className="hero-label">
              <span className="pulse-dot"></span>
              Student-Led STEM Education
            </div>

            <h1>
              Kids don't just
              <span> learn STEM.</span>
              <br />
              They <strong>build it.</strong>
            </h1>

            <p className="hero-description">
              Techids makes science, technology, engineering, and
              mathematics exciting, accessible, and hands-on for
              children.
            </p>

            <div className="hero-buttons">

              <a href="/workshops" className="primary-button">
                Explore Workshops
                <span>→</span>
              </a>

              <a href="/about" className="secondary-button">
                Discover Techids
              </a>

            </div>

            <div className="hero-subtext">
              Build. Experiment. Solve. Imagine.
            </div>

          </div>


          {/* RIGHT SIDE — STEM VISUAL */}
          <div className="hero-visual">

            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="floating-card card-top">
              <span>⚙️</span>
              <p>ENGINEER</p>
            </div>

            <div className="floating-card card-right">
              <span>💡</span>
              <p>CREATE</p>
            </div>

            <div className="floating-card card-bottom">
              <span>🔬</span>
              <p>DISCOVER</p>
            </div>

            <div className="floating-card card-left">
              <span>🚀</span>
              <p>IMAGINE</p>
            </div>

            <div className="stem-circle">

              <div className="stem-inner">
                <small>TECHIDS</small>
                <h2>STEM</h2>
                <div className="stem-plus">+</div>
                <strong>CREATIVITY</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          VALUES STRIP
      ========================== */}
      <section className="values-strip">

        <div className="value-item">
          <span>01</span>
          <div>
            <h3>Build</h3>
            <p>Turn ideas into something real.</p>
          </div>
        </div>

        <div className="value-item">
          <span>02</span>
          <div>
            <h3>Experiment</h3>
            <p>Ask questions and discover why.</p>
          </div>
        </div>

        <div className="value-item">
          <span>03</span>
          <div>
            <h3>Solve</h3>
            <p>Use creativity to overcome challenges.</p>
          </div>
        </div>

        <div className="value-item">
          <span>04</span>
          <div>
            <h3>Imagine</h3>
            <p>See what's possible.</p>
          </div>
        </div>

      </section>


      {/* =========================
          MISSION
      ========================== */}
      <section className="mission-section">

        <div className="section-container mission-grid">

          <div className="section-heading">

            <p className="section-label">
              WHY TECHIDS
            </p>

            <h2>
              STEM is better
              <br />
              when you're
              <br />
              <span>actually doing it.</span>
            </h2>

          </div>

          <div className="mission-copy">

            <p className="large-copy">
              We believe every child should have the opportunity
              to experience STEM by building something themselves.
            </p>

            <p>
              Techids is a student-led nonprofit STEM education
              organization designed to make science, technology,
              engineering, and mathematics accessible, engaging,
              and hands-on for children.
            </p>

            <p>
              Instead of simply reading about how something works,
              students get to build it, test it, improve it, and
              discover what happens next.
            </p>

            <a href="/about" className="text-link">
              Learn more about Techids →
            </a>

          </div>

        </div>

      </section>


      {/* =========================
          PROGRAMS
      ========================== */}
      <section className="programs-section">

        <div className="section-container">

          <div className="programs-heading">

            <div>
              <p className="section-label">
                WHAT WE DO
              </p>

              <h2>
                More ways to
                <br />
                experience STEM.
              </h2>
            </div>

            <p>
              Techids is building a connected STEM-learning
              ecosystem for students, schools, families,
              educators, and communities.
            </p>

          </div>


          <div className="program-grid">

            <a href="/workshops" className="program-card">

              <div className="program-number">01</div>

              <div className="program-icon">
                🔧
              </div>

              <h3>Techids Workshops</h3>

              <p>
                Hands-on STEM sessions where children build,
                experiment, collaborate, and solve problems.
              </p>

              <span>Explore Workshops →</span>

            </a>


            <div className="program-card">

              <div className="program-number">02</div>

              <div className="program-icon">
                📦
              </div>

              <h3>Techids Kits</h3>

              <p>
                Physical STEM projects that children can
                explore independently or with educators.
              </p>

              <span>Coming Soon →</span>

            </div>


            <a href="/videos" className="program-card">

              <div className="program-number">03</div>

              <div className="program-icon">
                💻
              </div>

              <h3>Techids Online</h3>

              <p>
                Activities, project instructions, resources,
                and interactive STEM experiences.
              </p>

              <span>Explore Online →</span>

            </a>


            <a href="/get-involved" className="program-card">

              <div className="program-number">04</div>

              <div className="program-icon">
                🏫
              </div>

              <h3>School Program</h3>

              <p>
                Bring Techids workshops and STEM programming
                directly to your school.
              </p>

              <span>Bring Techids →</span>

            </a>


            <a href="/get-involved" className="program-card">

              <div className="program-number">05</div>

              <div className="program-icon">
                🤝
              </div>

              <h3>Partnerships</h3>

              <p>
                Collaborate with Techids to expand access
                to meaningful STEM experiences.
              </p>

              <span>Partner With Us →</span>

            </a>


            <a href="/get-involved" className="program-card">

              <div className="program-number">06</div>

              <div className="program-icon">
                🌎
              </div>

              <h3>Community Outreach</h3>

              <p>
                Expand STEM opportunities for students who
                may have fewer opportunities to participate.
              </p>

              <span>Learn More →</span>

            </a>

          </div>

        </div>

      </section>


      {/* =========================
          HOW IT WORKS
      ========================== */}
      <section className="how-section">

        <div className="section-container">

          <div className="center-heading">

            <p className="section-label">
              THE TECHIDS METHOD
            </p>

            <h2>
              Learn by doing.
            </h2>

            <p>
              Every Techids experience starts with curiosity
              and ends with something students can be proud of.
            </p>

          </div>


          <div className="steps-grid">

            <div className="step-card">

              <div className="step-number">
                01
              </div>

              <h3>Discover</h3>

              <p>
                Start with a question, challenge, or idea
                that sparks curiosity.
              </p>

            </div>


            <div className="step-card">

              <div className="step-number">
                02
              </div>

              <h3>Build</h3>

              <p>
                Turn ideas into something real through
                hands-on projects and experimentation.
              </p>

            </div>


            <div className="step-card">

              <div className="step-number">
                03
              </div>

              <h3>Solve</h3>

              <p>
                Test, fail, improve, and discover how STEM
                works in the real world.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          VISION
      ========================== */}
      <section className="vision-section">

        <div className="section-container vision-grid">

          <div>

            <p className="section-label light-label">
              OUR VISION
            </p>

            <h2>
              A STEM opportunity
              <br />
              <span>for every child.</span>
            </h2>

            <p className="vision-description">
              Our long-term vision is to grow Techids from
              local workshops into a national STEM-learning
              network serving schools, community organizations,
              families, and individual students.
            </p>

            <a href="/about" className="light-button">
              Our Story →
            </a>

          </div>


          <div className="vision-art">

            <div className="vision-word">
              EVERY
            </div>

            <div className="vision-word">
              CHILD
            </div>

            <div className="vision-word accent">
              BUILDS.
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CALL TO ACTION
      ========================== */}
      <section className="cta-section">

        <div className="cta-box">

          <p className="section-label">
            GET INVOLVED
          </p>

          <h2>
            Let's build something
            <br />
            together.
          </h2>

          <p>
            Whether you're a school, educator, organization,
            company, student, or community member, there's
            a place for you at Techids.
          </p>

          <div className="cta-buttons">

            <a href="/get-involved" className="primary-button">
              Bring Techids to Your School →
            </a>

            <a href="/contact" className="secondary-button">
              Contact Us
            </a>

          </div>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================== */}
      <footer className="footer">

        <div className="section-container footer-grid">

          <div className="footer-brand">

            <a href="/" className="brand">
              Tech<span>ids</span>
            </a>

            <p>
              Building the future through hands-on
              STEM education.
            </p>

          </div>


          <div className="footer-column">

            <h4>Explore</h4>

            <a href="/about">About</a>
            <a href="/workshops">Workshops</a>
            <a href="/videos">Lessons</a>

          </div>


          <div className="footer-column">

            <h4>Get Involved</h4>

            <a href="/get-involved">Partnerships</a>
            <a href="/get-involved">Donate</a>
            <a href="/get-involved">Request a Visit</a>

          </div>


          <div className="footer-column">

            <h4>Connect</h4>

            <a href="/contact">Contact</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>

          </div>

        </div>


        <div className="footer-bottom section-container">

          <p>
            © 2026 Techids. All rights reserved.
          </p>

          <p>
            Learn. Build. Solve.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Home;