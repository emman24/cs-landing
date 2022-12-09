import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

import bannerVideo from "../assets/videos/banner.mp4";
import imgOne from "../assets/images/Group+333@2x.png";
import imgTwo from "../assets/images/11500-Schools.png";

import blogImg from "../assets/images/blog.png";
import webinarsImg from "../assets/images/webinars.png";
import researchImg from "../assets/images/research.png";

export default function Home() {
  return (
    <div>
      <Layout>
        <section className="hero is-info is-medium is-bold is-clipped">
          <div className="hero-body  is-relative">
            <video autoPlay muted loop className="hero-video-cover">
              <source src={bannerVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="container has-text-left">
              <h1 className="title is-size-1 has-text-weight-bold ">
                Where educators succeed <br />
                and students thrive
              </h1>
              <h2 className="subtitle">
                K-12 Curriculum, Assessments, and Services
              </h2>

              <button class="button is-primary">Explore Our Solutions</button>
            </div>
          </div>
        </section>

        <div className="box cta p-6">
          <h1 className="title is-size-3 has-text-centered">
            Download our latest whitepaper
          </h1>
          <h1 className="title has-text-info   is-size-5 has-text-centered">
            A Human-Centered Vision for Quality Virtual Learning Whitepaper
          </h1>
        </div>
        <section className="container p-6">
          <div className="columns features">
            <div className="column is-4">
              <div className="card">
                <div className="card-image has-text-centered">
                  <i className="fa fa-paw"></i>
                </div>
                <div className="card-content">
                  <div className="content  has-text-centered">
                    <figure className="image is-5by3">
                      <Image src={imgOne} alt="Description" />
                    </figure>
                    <h3>
                      Educators using Edmentum solutions to engage more than 6.2
                      million students
                    </h3>
                    <p>
                      <a href="#">Learn more</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4 is-flex is-align-items-center ">
              <div className="card">
                <div className="card-image has-text-centered">
                  <i className="fa fa-empire"></i>
                </div>
                <div className="card-content">
                  <div className="content has-text-centered">
                    <h3>
                      “I can’t imagine trying to bridge the gaps my school faces
                      without [your] curriculum.”
                    </h3>

                    <button class="button is-primary">
                      Explore Our Solutions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card ">
                <div className="card-image ">
                  <i className="fa fa-apple"></i>
                </div>
                <div className="card-content has-text-centered">
                  <div className="content">
                    <figure className="image is-5by3">
                      <Image src={imgTwo} alt="Description" />
                    </figure>
                    <h3>
                      Worldwide school, district, and institutional partners
                      served in 2022
                    </h3>

                    <p>
                      <a href="#">Learn more</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="intro column p-6 is-8 is-offset-2 has-text-centered">
            <h2 className="title is-size-2 mb-6">
              Perfect for developers or designers!
            </h2>
            <p className="subtitle">
              As one of the pioneers in K-12 learning technology, Edmentum draws
              on our 60-year history of innovation and impact to deliver a
              comprehensive set of products, services, and content to meet the
              needs of our partners.
            </p>

            <div className="columns">
              <div className="column features is-4"> </div>
              <div className="column features is-4">
                <button class="button is-primary">Our Products</button>
              </div>
              <div className="column features is-4"> </div>
            </div>
          </div>
        </section>

        <section class="hero is-info is-clipped ">
          <div className="slant-line"></div>
          <div class="hero-body">
            <div className="container">
              <h1 className="title is-size-2">
                Explore our insights and community
              </h1>
              <p class="subtitle">
                Ideas, research, and connections educators need
              </p>

              <div className="is-flex is-align-content-center ">
                <figure className="image is-256x256 p-3">
                  <Image src={blogImg} alt="Description" />
                </figure>
                <figure className="image is-256x256 p-3">
                  <Image src={webinarsImg} alt="Description" />
                </figure>
                <figure className="image is-256x256 p-3">
                  <Image src={researchImg} alt="Description" />
                </figure>
                <figure className="image is-256x256 p-3">
                  <Image src={blogImg} alt="Description" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section class="hero ">
          <div class="hero-body">
            <div className="container">
              <h1 className="title is-size-2 has-text-centered">
                See why more than 11,000 schools and <br /> districts partner
                with us
              </h1>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
