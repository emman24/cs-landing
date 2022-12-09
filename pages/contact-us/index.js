import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";

import bannerVideo from "../../assets/videos/banner.mp4";

import dentistimage from "../../assets/images/dentist-image.jpg";

export default function Index() {
	return (
		<Layout>
			<section className="hero is-info is-medium is-bold is-clipped">
				<div className="hero-body  is-relative">
					<video autoPlay muted loop className="hero-video-cover">
						<source src={bannerVideo} type="video/mp4" />
						Your browser does not support the video tag.
					</video>

					<div className="container has-text-left">
						<h1 className="title is-size-1 has-text-weight-bold ">
							Contact Us
						</h1>
						<h2 className="subtitle">
							Need to get in touch with us? <br />
						</h2>

						<button class="button is-primary">email@contact.com</button>
					</div>
				</div>
			</section>

			<section className="container mt-6 mb-6 p-5">
				<div className="columns is-centered">
					<div className="column input-box-width pt-6">
						<div class="field is-horizontal">
							<div class="field-label is-normal">
								<label class="label">First Name</label>
							</div>
							<div class="field-body">
								<div class="field">
									<p class="control">
										<input class="input" type="input" />
									</p>
								</div>
							</div>
						</div>

						<div class="field is-horizontal">
							<div class="field-label is-normal">
								<label class="label">Last Name</label>
							</div>
							<div class="field-body">
								<div class="field">
									<p class="control">
										<input class="input" type="input" />
									</p>
								</div>
							</div>
						</div>
						<div class="field is-horizontal">
							<div class="field-label is-normal">
								<label class="label">Email</label>
							</div>
							<div class="field-body">
								<div class="field">
									<p class="control">
										<input class="input" type="email" />
									</p>
								</div>
							</div>
						</div>
						<div class="field is-horizontal">
							<div class="field-label is-normal">
								<label class="label">Subject</label>
							</div>
							<div class="field-body">
								<div class="field">
									<p class="control">
										<input class="input" type="input" />
									</p>
								</div>
							</div>
						</div>

						<div class="field is-horizontal">
							<div class="field-label is-normal">
								<label class="label">Message</label>
							</div>

							<div class="field-body">
								<div class="field">
									<p class="control">
										<textarea class="textarea is-normal"></textarea>
									</p>
								</div>
							</div>
						</div>
						<div class="field is-horizontal">
							<div class="field-label is-normal">
								<label class="label"></label>
							</div>

							<div class="field-body">
								<div class="field">
									<p class="control">
										<button class="button is-primary">Submit</button>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
