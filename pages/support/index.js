import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";

import supportImg from "../../assets/images/Support-Main-Image.png";

export default function Support() {
  return (
    <Layout>
      <section class="hero ">
        <div class="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-6 is-flex is-align-items-center   ">
                <div>
                  <h1 className="title is-size-1 has-text-weight-bold">
                    Support & <br /> Getting Started
                  </h1>

                  <p>
                    Edmentum empowers you with the programs you need to be more
                    effective. We are committed to helping you get started
                    quickly and providing ongoing support to optimize student
                    success. Read about our program updates on our Whats New
                    page.
                  </p>
                </div>
              </div>

              <div className="column is-6">
                <figure className="image is-5by3">
                  <Image src={supportImg} alt="Description" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
