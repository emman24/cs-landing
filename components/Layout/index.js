import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import bannerVideo from "../../assets/videos/banner.mp4";
import imgOne from "../../assets/images/Group+333@2x.png";
import imgTwo from "../../assets/images/11500-Schools.png";

import blogImg from "../../assets/images/blog.png";
import webinarsImg from "../../assets/images/webinars.png";
import researchImg from "../../assets/images/research.png";

export default function Layout({ children }) {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="../">
              CLINICSTANDARD
            </a>
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <div className="tabs is-right ">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/products">Products & Service</Link>
                  </li>
                  <li>
                    <Link href="/support">Help</Link>
                  </li>
                </ul>

                {/* -----------------------SOLUTIONS-----------------------------------*/}
                <div className="navbar-item has-dropdown is-hoverable is-mega">
                  <div className="navbar-link">Solutions</div>
                  <div id="blogDropdown" className="navbar-dropdown">
                    <div className="container is-fluid">
                      <div className="columns">
                        <div className="column">
                          <h1 className="title is-7 is-mega-menu-title has-text-link is-uppercase has-text-weight-bold mb-2">
                            Digital Core Curriculum
                          </h1>

                          <Link
                            className="navbar-item  border-0"
                            href="/digital-core-curriculum"
                          >
                            <div className="navbar-content">
                              <p className="tabs">First Time Credit </p>
                            </div>
                          </Link>
                          <Link
                            className="navbar-item  border-0"
                            href="/careers"
                          >
                            <div className="navbar-content">
                              <p className="tabs">Careers </p>
                            </div>
                          </Link>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Advanced Placements</p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">
                                Career & Technical Education
                              </p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0 mb-4" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Alternative Programs</p>
                            </div>
                          </a>

                          <h1 className="title is-7 is-mega-menu-title has-text-link is-uppercase has-text-weight-bold mb-2">
                            Teacher Support
                          </h1>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Instructional Services</p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Professional Services</p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Educator Community</p>
                            </div>
                          </a>
                        </div>

                        <div className="column">
                          <h1 className="title is-7 is-mega-menu-title has-text-link is-uppercase has-text-weight-bold mb-2">
                            Learning Acceleration
                          </h1>

                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Credit Recovery</p>
                            </div>
                          </a>

                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">
                                Skill Remediation & Grade-Level Proficiency
                              </p>
                            </div>
                          </a>

                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Intervention</p>
                            </div>
                          </a>

                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Early Literacy</p>
                            </div>
                          </a>

                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">English Language Learners </p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0 mb-4" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Tutoring</p>
                            </div>
                          </a>

                          <h1 className="title is-7 is-mega-menu-title has-text-link is-uppercase has-text-weight-bold mb-2">
                            Assessments
                          </h1>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Diagnostic</p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Benchmark</p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Formative</p>
                            </div>
                          </a>
                        </div>

                        <div className="column">
                          <h1 className="title is-7 is-mega-menu-title has-text-link is-uppercase has-text-weight-bold mb-2">
                            Test Readiness
                          </h1>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">
                                Standards Growth & Mastery{" "}
                              </p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">End of Course </p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0 mb-4" href="#">
                            <div className="navbar-content">
                              <p className="tabs">
                                College Entrance & High School Equivalency
                              </p>
                            </div>
                          </a>

                          <h1 className="title is-7 is-mega-menu-title has-text-link is-uppercase has-text-weight-bold mb-2">
                            Whole Learner Support
                          </h1>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">
                                Social & Emotional Learning
                              </p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Executive Functioning</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*--------------------------------SOLUTIONS END----------------------------------*/}

                {/*--------------------------------PRODUCT & SERVICES-------------------------------*/}
                <div className="navbar-item has-dropdown is-hoverable is-mega">
                  <div className="navbar-link">Product & Services</div>
                  <div id="blogDropdown" className="navbar-dropdown">
                    <div className="container is-fluid">
                      <div className="columns">
                        <div className="column">
                          <h1 className="title is-7 is-mega-menu-title has-text-link has-text-weight-bold mb-2">
                            CURRICULUM
                          </h1>

                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs mb-0 has-text-weight-bold">
                                Courseware
                              </p>
                              <p className="is-size-7 has-text-grey ">
                                Secondary Curriculum, Credit Recovery <br />
                                College and Career Readiness
                              </p>
                            </div>
                          </a>

                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Apex Course</p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">EdOptions Academy</p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Calvert Learning</p>
                            </div>
                          </a>
                        </div>
                        <div className="column">
                          <a className="navbar-item  border-0 mt-6" href="#">
                            <div className="navbar-content">
                              <p className="tabs">BASE Education</p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Reading Eggs</p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Find Out What's New</p>
                            </div>
                          </a>
                        </div>
                        <div className="column">
                          <h1 className="title is-7 is-mega-menu-title has-text-link  has-text-weight-bold mb-2">
                            ASSESSMENT & PERSONALIZED LEARNING
                          </h1>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Exact Path</p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Study Island</p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Apex Tutorial</p>
                            </div>
                          </a>
                        </div>
                        <div className="column">
                          <h1 className="title is-7 is-mega-menu-title has-text-link  has-text-weight-bold mb-2">
                            SERVICES
                          </h1>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Instructional Services</p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0 mb-4" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Consulting Services</p>
                            </div>
                          </a>
                          <h1 className="title is-7 is-mega-menu-title has-text-link  has-text-weight-bold mb-2">
                            VIRTUAL SCHOOLS
                          </h1>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">
                                Apex Learning Virtual School
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*-------------------------------PRODUCT & SERVICES END----------------------------------*/}
                {/* -----------------------SPECIALTY START-----------------------------------*/}
                <div className="navbar-item has-dropdown is-hoverable is-mega">
                  <div className="navbar-link">Specialty</div>
                  <div id="blogDropdown" className="navbar-dropdown">
                    <div className="container is-fluid">
                      <div className="columns">
                        <div className="column">
                          <h1 className="title is-7 is-mega-menu-title has-text-link is-uppercase has-text-weight-bold mb-2">
                            Select a Specialty
                          </h1>

                          <Link
                            className="navbar-item  border-0"
                            href="/specialty/dentist"
                          >
                            <div className="navbar-content">
                              <p className="tabs">Dentist</p>
                            </div>
                          </Link>
                          <Link className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Family Doctor, GP </p>
                            </div>
                          </Link>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Pharmacy, Medical Supplier</p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Psychiatry, Psychology</p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Surgery</p>
                            </div>
                          </a>

                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Physio, Recovery, Therapy</p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">
                                Sexual Health, Reproductive
                              </p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Gynaecology, OB-GYN</p>
                            </div>
                          </a>
                        </div>
                        <div className="column mt-5">
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Alternative Medicine, TCM</p>
                            </div>
                          </a>

                          <Link
                            className="navbar-item  border-0"
                            href="/specialty/pediatrician"
                          >
                            <div className="navbar-content">
                              <p className="tabs">
                                General Pediatric / Pediatrician
                              </p>
                            </div>
                          </Link>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Dermatology, Aesthetic</p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Emergency, Ambulance</p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Veterinary</p>
                            </div>
                          </a>
                          <Link
                            className="navbar-item  border-0"
                            href="/specialty/dialysis"
                          >
                            <div className="navbar-content">
                              <p className="tabs">Dialysis Center</p>
                            </div>
                          </Link>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Dermatology, Aesthetic</p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Dermatology, Aesthetic</p>
                            </div>
                          </a>
                        </div>
                        <div className="column mt-5">
                          <Link
                            className="navbar-item  border-0"
                            href="/specialty/neurology"
                          >
                            <div className="navbar-content">
                              <p className="tabs">Neurology</p>
                            </div>
                          </Link>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Oncology</p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Ophthalmology, Optometry</p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Urology, Nephrology</p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Cardiology, Pulmonology</p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Diagnostics, Laboratory</p>
                            </div>
                          </a>
                          <a className="navbar-item  border-0" href="#">
                            <div className="navbar-content">
                              <p className="tabs">Nutrition,Obesity</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*--------------------------------SPECIALTY END----------------------------------*/}
            </div>
          </div>
        </div>
      </nav>

      {children}

      <footer className="footer">
        <div className="container">
          <div className="columns">
            <div className="column is-3 is-offset-2 ">
              <h2 className="is-uppercase">
                <strong>Digital Core Curriculum</strong>
              </h2>
              <ul>
                <li>
                  <a href="#">First Time Credit</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Advanced Placements</a>
                </li>
                <li>
                  <a href="#">Career & Technical Education</a>
                </li>
                <li>
                  <a href="#">Alternative Programs</a>
                </li>
              </ul>
            </div>
            <div className="column is-3">
              <h2 className="is-uppercase">
                <strong>Category</strong>
              </h2>
              <ul>
                <li>
                  <a href="#">Labore et dolore magna aliqua</a>
                </li>
                <li>
                  <a href="#">Kanban airis sum eschelor</a>
                </li>
                <li>
                  <a href="#">Modular modern free</a>
                </li>
                <li>
                  <a href="#">The king of clubs</a>
                </li>
                <li>
                  <a href="#">The Discovery Dissipation</a>
                </li>
                <li>
                  <a href="#">Course Correction</a>
                </li>
                <li>
                  <a href="#">Better Angels</a>
                </li>
              </ul>
            </div>
            <div className="column is-4">
              <h2>
                <strong>Category</strong>
              </h2>
              <ul>
                <li>
                  <a href="#">Objects in space</a>
                </li>
                <li>
                  <a href="#">Playing cards with coyote</a>
                </li>
                <li>
                  <a href="#">Goodbye Yellow Brick Road</a>
                </li>
                <li>
                  <a href="#">The Garden of Forking Paths</a>
                </li>
                <li>
                  <a href="#">Future Shock</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
