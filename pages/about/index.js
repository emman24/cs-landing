import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";

import bannerVideo from "../../assets/videos/banner.mp4";
import imgOne from "../../assets/images/Group+333@2x.png";
import imgTwo from "../../assets/images/11500-Schools.png";

import blogImg from "../../assets/images/blog.png";
import webinarsImg from "../../assets/images/webinars.png";
import researchImg from "../../assets/images/research.png";
import aboutuscover from "../../assets/images/aboutuscover.jpg";

export default function Home() {
  return (
    <Layout>
      <section className="hero is-info is-medium has-text-weight-bold  is-clipped">
        <div className="hero-body  is-relative">
          <Image src={aboutuscover} className="hero-video-cover" />

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

      <section className="container p-6">
        <div className="columns features">
          <div className="column is-6">
            <div className="card">
              <div className="card-image has-text-centered">
                <i className="fa fa-paw"></i>
              </div>
              <div className="card-content">
                <div className="content  has-text-centered">
                  <h3 className="title is-size-1 has-text-weight-bold  has-text-info">
                    Vision
                  </h3>
                  <p>
                    A world where educators succeed and students thrive,
                    everywhere learning occurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-6">
            <div className="card">
              <div className="card-image has-text-centered">
                <i className="fa fa-empire"></i>
              </div>
              <div className="card-content">
                <div className="content has-text-centered">
                  <h3 className="title is-size-1 has-text-weight-bold  has-text-info">
                    Mission
                  </h3>
                  <p>
                    We create innovative, proven learning technology, partnering
                    with educators to ignite student potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container p-6">
        <div className="columns features mb-6">
          <div className="column is-6">
            <div className="has-text-centered">
              <h3 className="title is-size-3 has-text-weight-bold ">
                <span className="has-text-purple">We place</span> <br />{" "}
                educators first
              </h3>
              <p></p>
            </div>
          </div>

          <div className="column is-6">
            <div className="has-text-centered">
              <h3 className="title is-size-3 has-text-weight-bold ">
                Our <span className="has-text-aqua">purpose</span> <br /> is
                what fuels us
              </h3>
            </div>
          </div>
        </div>

        <div className="columns features mb-6">
          <div className="column is-4">
            <div className="has-text-centered">
              <h3 className="title is-size-3 has-text-weight-bold ">
                Our people <br />
                <span className="has-text-success"> are our heart </span>
              </h3>
            </div>
          </div>

          <div className="column is-4">
            <div className="has-text-centered">
              <h3 className="title is-size-3 has-text-weight-bold ">
                <span className="has-text-dark-green"> We lead</span> <br />
                with respect and trust
              </h3>
            </div>
          </div>

          <div className="column is-4">
            <div className="has-text-centered">
              <h3 className="title is-size-3 has-text-weight-bold ">
                We create <br />
                <span className="has-text-purple"> positive impact </span>
              </h3>
              <p></p>
            </div>
          </div>
        </div>

        <div className="columns features mb-6">
          <div className="column is-6">
            <div className="has-text-centered">
              <h3 className="title is-size-3 has-text-weight-bold ">
                <span className="has-text-warning"> Diversity </span> <br /> and
                inclusion strengthen us
              </h3>
            </div>
          </div>
          <div className="column is-6">
            <div className="has-text-centered">
              <h3 className="title is-size-3 has-text-weight-bold ">
                <span className="has-text-danger"> Empathy </span> <br />
                guides our actions
              </h3>
              <p></p>
            </div>
          </div>
        </div>
      </section>

      <section class="hero is-info is-clipped p-6">
        <div class="hero-body">
          <div className="container">
            <h1 className="title is-size-2">About CLINICSTANDARD</h1>
            <p class="subtitle">
              Edmentum is the leading provider of K-12 digital curriculum,
              assessments, and services to 43,000 schools in all 50 states and
              over 100 countries worldwide. We partner with educators to create
              instructional technology that is proven, easy-to-use,
              individualized, and aligned to state standards. Built on a 60-year
              history of innovation and impact, we believe that when educators
              succeed, students thrive, everywhere learning occurs.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
