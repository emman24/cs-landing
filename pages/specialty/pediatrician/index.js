import Head from "next/head";
import Image from "next/image";
import Layout from "../../../components/Layout";
import styles from "../../../styles/Home.module.css";

import bannerVideo from "../../../assets/videos/banner.mp4";

import pediatrician from "../../../assets/images/pediatrician-image.jpg";

export default function Index() {
	return (
		<Layout>
			<section class="hero has-background-white-ter">
				<div class="hero-body">
					<div className="container">
						<div className="columns">
							<div className="column is-6">
								<figure className="image is-5by3">
									<Image src={pediatrician} alt="Description" />
								</figure>
							</div>
							<div className="column is-6 is-flex is-align-items-center   ">
								<div>
									<h1 className=" is-size-2 has-text-info has-text-weight-bold">
										General Pediatric / Pediatrician
									</h1>

									<p className="mb-5">
										A paediatrician is a child's physician who provides not only
										medical care for children who are acutely or chronically ill
										but also preventive health services for healthy children. A
										paediatrician manages physical, mental, and emotional
										well-being of the children under their care at every stage
										of development, in both sickness and health.
									</p>

									<button class="button is-link is-medium">Get a quote</button>
								</div>
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
							Treats children with problems with growth, puberty, diabetes, or
							other issues related to the hormones and the glands that produce
							them.
						</p>
					</div>
				</div>
			</section>
			<section class="container mt-6 mb-6 p-6">
				<div className="columns">
					<div className="column is-4">
						<div className="has-border-top-green">
							<h1 className="is-size-5 has-text-weight-bold mt-4">
								Pediatric Geneticist (Gene Doctor)
							</h1>
						</div>

						<p className="mt-2">
							Diagnoses, counsels, and treats children with many different kinds
							of problems including birth defects, conditions that can cause
							disabilities, inborn errors of metabolism, familial or hereditary
							problems, and short or tall stature.
						</p>
					</div>
					<div className="column is-4">
						<div className="has-border-top-red">
							<h1 className="is-size-5 has-text-weight-bold mt-4">
								Pediatric Nephrologist (Kidney Doctor)
							</h1>
						</div>

						<p className="mt-2">
							Diagnoses, treats, and manages issues affecting a child’s kidney
							and urinary tract. Pediatric nephrologists also evaluate and treat
							high blood pressure and problems with growth and development that
							are specific to chronic kidney disease.
						</p>
					</div>
					<div className="column is-4 ">
						<div className="has-border-top-blue">
							<h1 className="is-size-5 has-text-weight-bold mt-4">
								Periodontist - Gum Specialist
							</h1>
						</div>

						<p className="mt-2">
							A periodontist is a dental specialist focused on the prevention,
							diagnosis, and treatment of diseases affecting the gums and other
							structures that support the teeth. Think of them as the gum
							disease experts of dentistry. Periodontists recognize and treat
							early stages of gum disease. They also perform minor surgery, like
							gum grafts and pocket reduction procedures, to resolve severe gum
							disease and restore the appearance of your smile
						</p>
					</div>
				</div>
			</section>
		</Layout>
	);
}
