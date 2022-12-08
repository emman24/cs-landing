import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";

import supportImg from "../../assets/images/Support-Main-Image.png";
import corecurriculum from "../../assets/images/Solutions-Headers-Digital-Core-Curriculum.jpg";
import morecollections from "../../assets/images/Main-Solutions-DCC.png";
export default function Support() {
  return (
    <Layout>
      <section className="hero is-info is-medium has-text-weight-bold  is-clipped">
        <div className="hero-body  is-relative">
          <Image src={corecurriculum} className="hero-video-cover" />
          <div className="container has-text-centered">
            <h1 className="title is-size-1 has-text-weight-bold ">
              Digital Core Curriculum
            </h1>
          </div>
        </div>
      </section>

      <section class="hero  p-6">
        <div class="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-2">
              Provide high-quality K-12 core curriculum for virtual and blended
              learning
            </h1>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="columns mb-6">
          <div className="column">
            <div className="content">
              <p className="is-size-5 has-text-left">
                The benefits of using a digital curriculum for core instruction
                are many: it’s flexible, customizable, easily personalized,
                provides on-demand scaffolds and supports, and presents
                instruction in formats that address a variety of learning
                preferences. <br /> It also prepares students for the digital
                world in which they will learn, work, and live. Edmentum digital
                curriculum—rooted in a rich base of instructional research and
                evidence of effectiveness—includes robust, K-12 resources that
                teachers can use as the foundation of their classes or in
                blended learning models to ensure students master grade-level
                and course standards.
              </p>
            </div>
            <button class="button is-info is-button-hover has-text-weight-semibold mt-4">
              Get A Quote
            </button>
          </div>

          <div className="column is-6">
            <figure className="image is-5by3">
              <Image src={morecollections} alt="Description" />
            </figure>
          </div>
        </div>
      </section>

      <section class="container mt-6">
        <div className="columns">
          <div className="column is-4">
            <div className="has-border-top-green">
              <h1 className="is-size-5 has-text-weight-bold mt-4">
                Good instruction is just good instruction
              </h1>
            </div>

            <p>
              Digital resources play an increasing role in student learning, so
              you and your students deserve first-class instruction in their
              technology-enhanced learning experiences too. Our core curriculum
              is developed by educators,{" "}
              <a href="#">
                based on leading instructional research and pedagogy
              </a>{" "}
              , and is vetted for its alignment with standards, resulting in
              highly effective lessons and courses for K-12 students.
            </p>
          </div>
          <div className="column is-4">
            <div className="has-border-top-red">
              <h1 className="is-size-5 has-text-weight-bold mt-4">
                Flexible to match your needs
              </h1>
            </div>
            <p>
              Edmentum curriculum is not one-size-fits all; it’s flexible so
              each district and teacher can adapt its use for the needs of their
              programs, classrooms, and students.
            </p>
          </div>
          <div className="column is-4 ">
            <div className="has-border-top-blue">
              <h1 className="is-size-5 has-text-weight-bold mt-4">
                Just-in-time feedback for continuous insight
              </h1>
            </div>
            <p>
              The teacher relationship is the most valuable part of a student’s
              educational experience. That’s why we build our digital core
              curriculum with accessible and easy-to-use gradebooks, reports,
              and dashboard that provide an ongoing stream of data about student
              progress and achievement toward learning goals and state standards
              proficiency.
            </p>
          </div>
        </div>
      </section>
      <section class="hero has-background-light mt-6">
        <div class="hero-body">
          <div className="container p-6 ">
            <h1 className="title is-size-2 has-text-centered">
              Solutions that Work
            </h1>
            <p class="subtitle has-text-centered">
              Educators across the county trust Edmentum to provide core
              curriculum solutions for their students and have evidence that
              their students succeed.
            </p>
            <p className="subtitle has-text-centered">
              Learn more about the{" "}
              <a href="" className="is-button-flat">
                {" "}
                impact of Edmentum{" "}
              </a>{" "}
              core curriculum.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
