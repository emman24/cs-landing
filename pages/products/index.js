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
import serviceImg from "../../assets/images/CW-Hero-Video-Image@2x.png";
import QualitySliderImg from "../../assets/images/Quality-Curricula-Slider-1.png";

export default function Support() {
  return (
    <Layout>
      <section class="hero ">
        <div class="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-6 is-flex is-align-items-center   ">
                <div>
                  <h1 className="title is-size-1 has-text-weight-bold has-text-dark-green">
                    Flexible Digital <br /> Curriculumfor Every <br />{" "}
                    Environment
                  </h1>

                  <p className="mb-5">
                    Educators report that incorporating Courseware into their
                    blended and virtual learning programs has helped increase
                    school ratings and improve graduation rates.
                  </p>

                  <button class="button is-link is-medium">Get a quote</button>
                </div>
              </div>

              <div className="column is-6">
                <figure className="image is-5by3">
                  <Image src={serviceImg} alt="Description" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="hero has-background-light ">
        <div class="hero-body">
          <div className="container">
            <h1 className="title is-size-2 has-text-centered">
              See why more than 11,000 schools and <br /> districts partner with
              us
            </h1>
          </div>
        </div>
      </section>

      <section class="hero">
        <div class="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-2 mb-6 has-text-purple">
              Quality Curricula for All Students and Teachers
            </h1>
            <Image
              src={QualitySliderImg}
              alt="Description"
              className="is-fullwidth mb-6"
            />

            <div className="columns">
              <div className="column is-4">
                <div className="card">
                  <div className="card-image has-text-centered">
                    <i className="fa fa-empire"></i>
                  </div>
                  <div className="card-content">
                    <div className="content has-text-centered">
                      <h3>Credit Recovery</h3>
                      <p>
                        Get students back on track with Courseware! Exemptive
                        pretests ensure that students only work on what they
                        need to, and engaging, scaffolded instruction keeps
                        students motivated to recover skills, units, or entire
                        credits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-4">
                <div className="card">
                  <div className="card-image has-text-centered">
                    <i className="fa fa-empire"></i>
                  </div>
                  <div className="card-content">
                    <div className="content has-text-centered">
                      <h3>Continuous, Flexible Learning</h3>
                      <p>
                        Offer the depth, breadth, and flexibility to support
                        teacher-led classroom instruction and effective virtual
                        and blended solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-4">
                <div className="card">
                  <div className="card-image has-text-centered">
                    <i className="fa fa-empire"></i>
                  </div>
                  <div className="card-content">
                    <div className="content has-text-centered">
                      <h3>First-Time Credit</h3>
                      <p>
                        Digital courseware is for so much more than your
                        alternative program! Supercharge learning with
                        standards-aligned, multimodal instruction in your 21st
                        century flipped, flex, or otherwise blended classroom.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
