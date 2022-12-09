import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";

import supportImg from "../../assets/images/Support-Main-Image.png";
import corecurriculum from "../../assets/images/Solutions-Headers-Digital-Core-Curriculum.jpg";
import morecollections from "../../assets/images/Main-Solutions-DCC.png";
import careerspage from "../../assets/images/Update-Careers-Page-Main-Image-v2.jpg";

export default function Support() {
  return (
    <Layout>
      <section className="container mt-6">
        <div className="columns">
          <div className="column">
            <div className="content">
              <h1 className=" is-size-2 has-text-info has-text-weight-bold">
                Careers at <br /> Edmentum
              </h1>
              <p className="is-size-5 has-text-left has-text-grey">
                At Edmentum, we are a team committed to being educators most
                trusted partner in creating successful student outcomes
                everywhere learning occurs. We work hard to support educators
                across the country, and our key values of passion, people,
                respect, collaboration, and performance guide our mission. We
                are always looking for passionate, collaborative, and energetic
                people to join our team, where employees hard work is rewarded
                with a fun and flexible work environment that offers competitive
                pay and benefits, professional development, and growth
                opportunities.
              </p>
            </div>
          </div>

          <div className="column is-6">
            <figure className="image is-5by3">
              <Image src={careerspage} alt="Description" />
            </figure>
            <p className="has-text-centered mt-4 has-text-grey has-text-weight-bold">
              Are you ready to be a part of Edmentum?
            </p>
            <p className="has-text-centered has-text-grey has-text-weight-bold">
              Click below to search for job openings.
            </p>
            <div class="buttons is-centered mt-4">
              <a class="button is-info">Search job openings</a>
            </div>
          </div>
        </div>
      </section>

      <section class="hero  p-6">
        <div>
          <div className="container ">
            <h1 className="title is-size-2 has-text-centered has-text-info has-text-weight-bold">
              Edmentum Benefits
            </h1>
            <p className="has-text-centered has-text-grey">
              We offer a highly competitive benefits package that makes working
              at Edmentum a smart decision. We signficantly contribute to the
              cost of your benefits for you and your family, so no matter what
              your needs are, weve got you covered.
            </p>
          </div>
        </div>
      </section>

      <section class="container">
        <div className="columns">
          <div className="column has-background-light mr-1">
            <card>
              <h1 className="has-text-weight-bold mt-4">
                Medical, Dental, and Vision Insurance Access Transparency in
                Coverage MRFs
              </h1>
            </card>
          </div>
          <div className="column has-background-light mr-1">
            <card>
              <h1 className="has-text-weight-bold mt-4">
                Medical, Dental, and Vision Insurance Access Transparency in
                Coverage MRFs
              </h1>
            </card>
          </div>
          <div className="column has-background-light mr-1">
            <card>
              <h1 className="mt-4">
                Medical, Dental, and Vision Insurance Access Transparency in
                Coverage MRFs
              </h1>
            </card>
          </div>
          <div className="column has-background-light mr-1">
            <card>
              <h1 className="mt-4">
                Medical, Dental, and Vision Insurance Access Transparency in
                Coverage MRFs
              </h1>
            </card>
          </div>
          <div className="column has-background-light mr-1">
            <card>
              <h1 className="mt-4">
                Medical, Dental, and Vision Insurance Access Transparency in
                Coverage MRFs
              </h1>
            </card>
          </div>
        </div>

        <div className="columns">
          {/*----------------------------------------*/}
          <div className="column has-background-light mr-1 mt-1">
            <card>
              <h1 className="mt-4">
                Medical, Dental, and Vision Insurance Access Transparency in
                Coverage MRFs
              </h1>
            </card>
          </div>
          <div className="column has-background-light mr-1 mt-1">
            <card>
              <h1 className="mt-4">
                Medical, Dental, and Vision Insurance Access Transparency in
                Coverage MRFs
              </h1>
            </card>
          </div>
          <div className="column has-background-light mr-1 mt-1">
            <card>
              <h1 className="mt-4">
                Medical, Dental, and Vision Insurance Access Transparency in
                Coverage MRFs
              </h1>
            </card>
          </div>
          <div className="column has-background-light mr-1 mt-1">
            <card>
              <h1 className="mt-4">
                Medical, Dental, and Vision Insurance Access Transparency in
                Coverage MRFs
              </h1>
            </card>
          </div>
          <div className="column has-background-light mr-1 mt-1">
            <card>
              <h1 className="mt-4">
                Medical, Dental, and Vision Insurance Access Transparency in
                Coverage MRFs
              </h1>
            </card>
          </div>
          {/*------------------------*/}
        </div>
      </section>
      <section class="hero has-background-light mt-6">
        <div class="hero-body">
          <div className="container p-6 ">
            <h1 className="title is-size-2 has-text-centered">
              Solutions that Work
            </h1>

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
