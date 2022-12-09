import Head from "next/head";
import Image from "next/image";
import Layout from "../../../components/Layout";
import styles from "../../../styles/Home.module.css";

import bannerVideo from "../../../assets/videos/banner.mp4";

import dialysis_image from "../../../assets/images/dialysis-image.jpg";
import dialysis_image2 from "../../../assets/images/dialysis_image2.jpg";

export default function Index() {
	return (
		<Layout>
			<section class="hero has-background-white-ter">
				<div class="hero-body">
					<div className="container">
						<div className="columns">
							<div className="column is-6">
								<figure className="image is-5by3">
									<Image src={dialysis_image} alt="Description" />
								</figure>
							</div>
							<div className="column is-6">
								<figure className="image is-5by3">
									<Image src={dialysis_image2} alt="Description" />
								</figure>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="hero  p-6">
				<div>
					<div className="container ">
						<h1 className="title is-size-3 has-text-centered has-text-info has-text-weight-bold">
							Services
						</h1>
						<p className="has-text-centered has-text-grey">
							Dialysis Center provides dialysis, a lifesaving treatment for
							patients with chronic kidney failure. The center is a
							hospital-based unit with 14 dialysis stations. We offer
							hemodialysis and continuous ambulatory peritoneal dialysis (CAPD)
							treatments to a diverse group of adult patients who have chronic –
							or long-term – kidney failure.
						</p>
					</div>
				</div>
			</section>
			<section class="container mt-6 mb-6 p-6">
				<div className="columns">
					<div className="column is-4">
						<div className="has-border-top-green">
							<h1 className="is-size-5 has-text-weight-bold mt-4">
								Case Management & Social Work
							</h1>
						</div>

						<p className="mt-2">
							Connect with a team that can help you find resources, solve
							problems and advocate for you during treatment at UCSF.
						</p>
					</div>
					<div className="column is-4">
						<div className="has-border-top-red">
							<h1 className="is-size-5 has-text-weight-bold mt-4">
								Mindfulness-Based Stress Reduction Class
							</h1>
						</div>

						<p className="mt-2">
							This eight-week class teaches mindfulness practices that can
							reduce stress and improve your overall health, such as meditation
							and body awareness.
						</p>
					</div>
					<div className="column is-4 ">
						<div className="has-border-top-blue">
							<h1 className="is-size-5 has-text-weight-bold mt-4">
								Patient Relations
							</h1>
						</div>

						<p className="mt-2">
							We welcome feedback about your experience at UCSF Health. Find out
							how to contact us with comments, questions or concerns.
						</p>
					</div>
				</div>
			</section>
		</Layout>
	);
}
