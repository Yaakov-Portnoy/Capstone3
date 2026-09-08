import React from "react";
import "../App.css";

function About() {
  return (
    <div className="about-page">

      {/* =========================
          NAVIGATION
      ========================== */}
      <nav className="navbar">
        <div className="nav-container">

          <a href="/" className="brand">
            Tech<span>ids</span>
          </a>

          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/about" className="active">About</a>
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
          ABOUT HERO
      ========================== */}
      <section className="about-hero">

        <div className="section-container about-hero-grid">

          <div>

            <p className="section-label">
              WHO WE ARE
            </p>

            <h1>
              We're students
              <br />
              building a
              <br />
              <span>STEM future.</span>
            </h1>

            <p className="about-hero-text">
              Techids is a student-led nonprofit STEM education
              organization created by high school students who
              believe younger students should have the opportunity
              to experience engineering and STEM for themselves.
            </p>

          </div>


          {/* PHOTO PLACEHOLDER */}
          <div className="about-hero-photo">

            <div className="photo-placeholder">
              <span>📸</span>
              <p>Team Photo</p>
              <small>
                Add your team photo here
              </small>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          OUR STORY
      ========================== */}
      <section className="about-story">

        <div className="section-container story-grid">

          <div className="story-heading">

            <p className="section-label">
              OUR STORY
            </p>

            <h2>
              We know what it's
              <br />
              like to be
              <span> curious.</span>
            </h2>

          </div>


          <div className="story-text">

            <p className="large-copy">
              Techids started with a simple idea:
              younger students deserve the chance to
              experience engineering by actually doing it.
            </p>

            <p>
              We are a team of high school students who
              are passionate about engineering, technology,
              science, and education.
            </p>

            <p>
              We noticed that many younger students learn
              about STEM primarily through textbooks,
              worksheets, and lectures. While those things
              can be useful, we believe there is something
              different about putting a project in a
              student's hands and letting them figure out
              how it works.
            </p>

            <p>
              That's why we created Techids.
            </p>

            <p>
              Our goal is to expose the younger generation
              to engineering and STEM through hands-on
              experiences where students can build,
              experiment, solve problems, make mistakes,
              and try again.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          MISSION
      ========================== */}
      <section className="about-mission">

        <div className="section-container">

          <div className="mission-intro">

            <p className="section-label">
              OUR PURPOSE
            </p>

            <h2>
              STEM shouldn't just be
              <span> something you study.</span>
            </h2>

            <p>
              It should be something you experience.
            </p>

          </div>


          <div className="mission-cards">

            <div className="about-value-card">
              <div className="about-value-icon">🔧</div>
              <h3>Hands-On</h3>
              <p>
                Students learn by building real projects,
                experimenting with ideas, and seeing concepts
                come to life.
              </p>
            </div>


            <div className="about-value-card">
              <div className="about-value-icon">💡</div>
              <h3>Curiosity</h3>
              <p>
                We encourage students to ask questions,
                explore possibilities, and discover how
                things work.
              </p>
            </div>


            <div className="about-value-card">
              <div className="about-value-icon">🧠</div>
              <h3>Problem Solving</h3>
              <p>
                Engineering is about trying, failing,
                improving, and finding creative solutions
                to challenging problems.
              </p>
            </div>


            <div className="about-value-card">
              <div className="about-value-icon">🌎</div>
              <h3>Access</h3>
              <p>
                We want more children to have meaningful
                opportunities to explore STEM regardless
                of their background or access to resources.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          TEAM
      ========================== */}
      <section className="team-section">

        <div className="section-container">

          <div className="center-heading">

            <p className="section-label">
              THE TEAM
            </p>

            <h2>
              Meet the people
              <br />
              behind Techids.
            </h2>

            <p>
              Techids is built by students who want to
              make STEM more accessible to the next generation.
            </p>

          </div>


          {/* FOUNDERS */}
          <div className="team-group">

            <div className="team-group-title">
              <span>01</span>
              <h3>Founders</h3>
            </div>


            <div className="team-grid founders-grid">

              {/* JACOB */}
              <div className="team-card founder-card">

                <div className="team-photo">

                  <img
                    src="/images/team/jacob.jpg"
                    alt="Jacob Portnoy"
                  />

                </div>

                <div className="team-info">

                  <p className="team-role">
                    CO-FOUNDER
                  </p>

                  <h3>Jacob Portnoy</h3>

                  <p>
                    Co-founder of Techids and a high school
                    student passionate about engineering,
                    technology, and creating opportunities
                    for younger students to explore STEM.
                  </p>

                </div>

              </div>


              {/* ZACK */}
              <div className="team-card founder-card">

                <div className="team-photo">

                  <img
                    src="/images/team/zack.jpg"
                    alt="Zack Hoisman"
                  />

                </div>

                <div className="team-info">

                  <p className="team-role">
                    CO-FOUNDER
                  </p>

                  <h3>Zack Hoisman</h3>

                  <p>
                    Co-founder of Techids and a high school
                    student helping build the organization's
                    programs, projects, and vision for
                    hands-on STEM education.
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* DEVELOPERS */}
          <div className="team-group">

            <div className="team-group-title">
              <span>02</span>
              <h3>Development Team</h3>
            </div>


            <div className="team-grid">

              {/* TREVOR */}
              <div className="team-card">

                <div className="team-photo">

                  <img
                    src="/images/team/trevor.jpg"
                    alt="Trevor Hull"
                  />

                </div>

                <div className="team-info">

                  <p className="team-role">
                    DEVELOPER
                  </p>

                  <h3>Trevor Hull</h3>

                  <p>
                    Part of the Techids development team,
                    helping build the technology and digital
                    experiences behind the organization.
                  </p>

                </div>

              </div>


              {/* ALBERTO */}
              <div className="team-card">

                <div className="team-photo">

                  <img
                    src="/images/team/alberto.jpg"
                    alt="Alberto Dichi"
                  />

                </div>

                <div className="team-info">

                  <p className="team-role">
                    DEVELOPER
                  </p>

                  <h3>Alberto Dichi</h3>

                  <p>
                    Part of the Techids development team,
                    contributing to the organization's
                    website and technology.
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* ADVISOR */}
          <div className="team-group advisor-group">

            <div className="team-group-title">
              <span>03</span>
              <h3>Advisor</h3>
            </div>


            <div className="advisor-card">

              <div className="advisor-photo">

                <img
                  src="/images/team/sam.jpg"
                  alt="Sam Muttkadapa"
                />

              </div>

              <div className="advisor-info">

                <p className="team-role">
                  ADVISOR
                </p>

                <h3>Sam Muttkadapa</h3>

                <p>
                  Sam serves as an advisor to Techids,
                  providing guidance and perspective as
                  the organization grows its programs,
                  partnerships, and impact.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          WHAT WE BELIEVE
      ========================== */}
      <section className="belief-section">

        <div className="section-container belief-grid">

          <div>

            <p className="section-label light-label">
              WHAT WE BELIEVE
            </p>

            <h2>
              Every child should
              <br />
              get to say:
              <br />
              <span>"I built that."</span>
            </h2>

          </div>


          <div className="belief-text">

            <p>
              We want students to leave a Techids experience
              with more than just information.
            </p>

            <p>
              We want them to leave with confidence.
            </p>

            <p>
              Confidence that they can understand difficult
              ideas. Confidence that they can solve problems.
              And confidence that they can build something
              that didn't exist before.
            </p>

            <p>
              That's the kind of STEM education we want to
              help create.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          FUTURE
      ========================== */}
      <section className="future-section">

        <div className="section-container future-grid">

          <div>

            <p className="section-label">
              WHERE WE'RE GOING
            </p>

            <h2>
              From local
              <br />
              workshops to a
              <span> STEM network.</span>
            </h2>

          </div>


          <div>

            <p className="future-copy">
              Our long-term vision is to grow Techids from
              local workshops into a national STEM-learning
              network serving schools, community organizations,
              families, and individual students.
            </p>

            <div className="future-list">

              <div>
                <span>→</span>
                <p>More hands-on workshops</p>
              </div>

              <div>
                <span>→</span>
                <p>STEM project kits for students</p>
              </div>

              <div>
                <span>→</span>
                <p>Online learning experiences</p>
              </div>

              <div>
                <span>→</span>
                <p>Partnerships with schools and organizations</p>
              </div>

              <div>
                <span>→</span>
                <p>Greater access to STEM education</p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================== */}
      <section className="about-cta">

        <div className="about-cta-box">

          <p className="section-label">
            JOIN US
          </p>

          <h2>
            Help us build the
            <br />
            next generation of
            <span> problem solvers.</span>
          </h2>

          <p>
            Whether you're a school, student, organization,
            company, educator, or community member,
            there's a way to get involved with Techids.
          </p>

          <div className="cta-buttons">

            <a
              href="/get-involved"
              className="primary-button"
            >
              Get Involved →
            </a>

            <a
              href="/contact"
              className="secondary-button"
            >
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

            <a href="/">Home</a>
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

export default About;