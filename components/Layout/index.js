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
              <div className="tabs is-right">
                <ul>
                  <li className="">
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
                <span className="navbar-item">
                  <a
                    className="button is-white is-outlined"
                    href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/hero.html"
                  >
                    <span className="icon">
                      <i className="fa fa-github"></i>
                    </span>
                    <span title="Hello from the other side">View Source</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {children}

      <footer className="footer">
        <div className="container">
          <div className="columns">
            <div className="column is-3 is-offset-2">
              <h2>
                <strong>Category</strong>
              </h2>
              <ul>
                <li>
                  <a href="#">Lorem ipsum dolor sit amet</a>
                </li>
                <li>
                  <a href="#">Vestibulum errato isse</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum dolor sit amet</a>
                </li>
                <li>
                  <a href="#">Aisia caisia</a>
                </li>
                <li>
                  <a href="#">Murphys law</a>
                </li>
                <li>
                  <a href="#">Flimsy Lavenrock</a>
                </li>
                <li>
                  <a href="#">Maven Mousie Lavender</a>
                </li>
              </ul>
            </div>
            <div className="column is-3">
              <h2>
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
