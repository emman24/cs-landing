import Head from "next/head";
import Image from "next/image";
import Layout from "../../../components/Layout";
import styles from "../../../styles/Home.module.css";

import bannerVideo from "../../../assets/videos/banner.mp4";

import neurologyimage from "../../../assets/images/neurology-image.jpg";

export default function Index() {
	return (
		<Layout>
			<section class="hero has-background-white-ter">
				<div class="hero-body">
					<div className="container">
						<div className="columns">
							<div className="column is-6 is-flex is-align-items-center   ">
								<div>
									<h1 className=" is-size-2 has-text-info has-text-weight-bold">
										Neurology
									</h1>

									<p className="mb-5">
										When something goes wrong with your nervous system, you want
										a doctor who can determine the cause of your problem and
										help you feel better. Highly trained neurologists in the
										Sutter Health network use advanced imaging techniques and
										the latest devices available to diagnose and treat disorders
										of the brain, spine or central nervous system.
									</p>

									<button class="button is-link is-medium">Get a quote</button>
								</div>
							</div>

							<div className="column is-6">
								<figure className="image is-5by3">
									<Image src={neurologyimage} alt="Description" />
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
							Headaches, tremors, numbness and memory lapses are all potential
							signs of a neurological problem that can hinder your daily
							activities. Neurologists in the Sutter Health network provide
							comprehensive consultation, evaluation and treatment for a variety
							of neurological disorders.
						</p>
					</div>
				</div>
			</section>
			<section class="container mt-6 mb-6 p-6">
				<div className="columns">
					<div className="column is-4">
						<div className="has-border-top-green">
							<h1 className="is-size-5 has-text-weight-bold mt-4">
								Endodontist - Root Canal Specialist
							</h1>
						</div>

						<p className="mt-2">
							If your tooth’s pulp becomes infected or the interior of your
							teeth becomes otherwise damaged or diseased, your general dentist
							will probably refer you to a dental specialist called an
							endodontist. Like unassuming superheroes, endodontists specialize
							in saving the day - er, I mean saving your teeth.
						</p>
					</div>
					<div className="column is-4">
						<div className="has-border-top-red">
							<h1 className="is-size-5 has-text-weight-bold mt-4">
								Orthodontist - Alignment Specialist
							</h1>
						</div>

						<p className="mt-2">
							An orthodontist is a dental specialist who corrects the position
							of your teeth and jaws. You might see this type of dental
							specialist if you have an overbite, underbite or crossbite caused
							by a misaligned jaw. Orthodontist also correct crooked or
							misaligned teeth. In these situations, an orthodontist uses
							braces, clear aligners, palatal expanders, or headgear as part of
							your treatment plan. Children often see this type of dental
							specialist, but as adult braces and other alignments become more
							routine, people of all ages now commonly see orthodontists.
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
