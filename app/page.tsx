import profilePic from "/public/assets/images/portrait-valentin.webp";
import contactPic from "/public/assets/images/valentin-contact.webp";
import littleBobPic from "/public/assets/images/bob.svg";
import phpTextSvg from "/public/assets/images/php-text.svg";
import symfonyTextSvg from "/public/assets/images/symfony-text.svg";
import syliusIconSvg from "/public/assets/images/sylius-icon-white.svg";

import { Inter } from "next/font/google";
import ExportedImage from "next-image-export-optimizer";
import { baseMetadata } from "@/app/shared-metadata";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  ...baseMetadata,
  title: "Valentin Silvestre | Symfony & Sylius Developer in France",
  description:
    "Valentin Silvestre is an experienced Symfony and Sylius developer based in France, specializing in e-commerce solutions and open source contributions. Contact him for your next project!",
  keywords:
    "Symfony developer, Sylius developer, PHP developer, France, Lille, e-commerce developer, B2B developer, B2C developer, open source contributor, technical speaker, web developer, Symfony, Sylius, PHP, Mulet, Quality, Open Source, E-commerce, B2C, B2B",
  openGraph: {
    url: "https://vasilvestre.github.io/",
    type: "website",
    title: "Valentin Silvestre | Symfony & Sylius Developer in France",
    description:
      "Valentin Silvestre is an experienced Symfony and Sylius developer based in France, specializing in e-commerce solutions and open source contributions. Contact him for your next project!",
    images: [
      {
        url: profilePic.src,
        width: profilePic.width,
        height: profilePic.height,
      },
    ],
    locale: "en_US",
    alternateLocale: ["fr_FR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentin Silvestre | Symfony & Sylius Developer in France",
    description:
      "Valentin Silvestre is an experienced Symfony and Sylius developer based in France, specializing in e-commerce solutions and open source contributions. Contact him for your next project!",
    images: [profilePic.src],
    site: "@ValentinSilves",
    creator: "@ValentinSilves",
  },
  alternates: {
    canonical: "/",
  },
  icon: "/favicon.ico",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Valentin Silvestre",
  jobTitle: "Symfony & Sylius Developer",
  email: "[email address removed]",
  nationality: {
    "@type": "Country",
    name: "France",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University Catholique de Lille",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lille", // Updated based on LinkedIn
    addressRegion: "Hauts-de-France", // Updated based on LinkedIn
    addressCountry: "FR", // Updated based on LinkedIn and general context
  },
  url: "https://vasilvestre.github.io/",
  sameAs: [
    "https://github.com/vasilvestre",
    "https://www.linkedin.com/in/valentin-silvestre-dev/", // Corrected URL
    "https://twitter.com/ValentinSilves",
    "https://bsky.app/profile/vasilvestre.bsky.social",
  ],
  description:
    "Valentin Silvestre is an experienced Symfony and Sylius developer based in France, specializing in e-commerce solutions and open source contributions. Contact him for your next project!",
  knowsAbout: [
    "Symfony",
    "Sylius",
    "PHP",
    "PHP Development",
    "Web Development",
    "E-commerce Solutions",
    "B2B",
    "B2C",
    "API Platform",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "SQL",
    "MySQL",
    "Testing",
    "PHPUnit",
    "PHPSpec",
    "Behat",
    "Continuous Integration",
    "Docker",
    "Open Source Contribution",
    "Technical Speaking",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Master's Degree in Computer Science",
    recognizedBy: {
      "@type": "EducationalOrganization",
      name: "Université Catholique de Lille",
      url: "https://www.univ-catholille.fr/",
    },
    validFrom: "2016-09",
  },
  worksFor: {
    "@type": "Organization",
    name: "Akawaka",
    url: "https://www.akawaka.fr/",
  },
  projectList: {
    "@context": "https://schema.org/",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "WebSite",
          url: "https://vasilvestre.github.io/profiler-slides/1",
          name: "The State of PHP Profilers in 2024",
          description: "Slides for my presentation at AFUP Day Lille 2024.",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "WebSite",
          url: "https://vasilvestre.github.io/foundry-slides/1",
          name: "Creating Expressive Fixtures with Foundry",
          description: "Slides from my presentation at Lille Symfony Meetup, June 2023.",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "WebSite",
          url: "https://vasilvestre.github.io/extending-sylius-1.12-09-22/1",
          name: "How to properly extend Sylius API at 1.12",
          description: "Slides from my presentation at Lille Tech Meetup, September 2022.",
        },
      },
    ],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://vasilvestre.github.io/",
  name: "Valentin Silvestre - Symfony & Sylius Developer Portfolio",
  author: {
    "@type": "Person",
    name: "Valentin Silvestre",
  },
  description:
    "Portfolio website of Valentin Silvestre, a Symfony and Sylius developer from France, showcasing his work, expertise in e-commerce, and contributions to open source.",
  keywords: "Symfony developer, Sylius developer, PHP developer, France, e-commerce, open source",
};

const jsonLd = [personJsonLd, websiteJsonLd];

export default function Home() {
  return (
    <main className="bg-inherit">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="relative bg-gradient-to-b from-green-tree to-blue">
        <div className="overflow-hidden lg:relative py-12 lg:py-24">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24 gap-y-12 flex flex-wrap justify-center items-center">
            <div className="text-center lg:text-left">
              <div className="sm:max-w-xl">
                <div className="flex gap-x-3 justify-center lg:justify-start">
                  <ExportedImage
                    src={littleBobPic}
                    alt="Valentin Silvestre, Symfony & Sylius Developer - Profile Picture (Bob Hat Logo)"
                    className="w-10 h-full hidden md:block"
                    priority
                    width={40}
                    height={40}
                  />
                  <h1 className="text-4xl font-extrabold tracking-tight text-beige">
                    Valentin Silvestre - Symfony & Sylius Developer
                  </h1>
                </div>
                <p className="mt-6 text-xl text-beige">
                  Symfony & Sylius developer, working from France. Interested in quality, open source & mulet.
                </p>
              </div>
              <div className="mt-12 flex justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="
                   text-center block w-2/4 rounded-br-2xl rounded-tl-2xl border border-transparent px-5 py-3 bg-beige
                   text-base text-green-tree shadow hover:text-beige hover:bg-green-tree focus:border-2 focus:border-beige sm:px-10 font-semibold
                   "
                >
                  Contact me !
                </a>
              </div>
            </div>
            <ExportedImage
              src={profilePic}
              alt="Valentin Silvestre, French Symfony & Sylius Developer"
              height={profilePic.height}
              width={profilePic.width}
              className="mx-auto rounded-full border-4 border-b-8 border-beige w-72 h-full lg:w-96"
              priority
            />
          </div>
        </div>
      </section>
      <section className="relative bg-beige py-16 sm:py-24 lg:py-24">
        <div className="mx-auto flex flex-col items-center justify-center inset-0 max-w-md px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="mt-2 font-extrabold tracking-tight text-dark-blue text-4xl md:text-3xl">
            Who is Valentin Silvestre?
          </h2>
          <p className="mx-auto mt-5 max-w-[45ch] text-xl text-blue text-left">
            I attended the University Catholique de Lille in France and earned a Master&apos;s degree in Computer
            Science. Following that, I have worked as a <strong>professional Symfony developer</strong> in various
            companies, focusing on <strong>robust e-commerce solutions</strong> for both B2C and B2B industries.
            Currently, I am employed by Akawaka as a <strong>Sylius developer</strong>.
          </p>
        </div>
      </section>

      <section className="bg-what bg-no-repeat bg-cover bg-fixed">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="bg-beige/50 p-20 rounded-tl-3xl rounded-br-3xl drop-shadow-2xl">
            <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-dark-blue md:text-3xl">
              What does Valentin do as a Symfony & Sylius Developer?
            </h2>
            <p className="mt-5 text-xl text-blue">
              As a dedicated <strong>Symfony and Sylius developer based in France</strong>, my primary focus is on
              building high-quality, scalable <strong>web applications</strong> and{" "}
              <strong>e-commerce platforms</strong>. I leverage my expertise in <strong>PHP development</strong> to
              deliver efficient solutions for businesses. I am also a keen <strong>open source contributor</strong> and
              enjoy sharing my knowledge through <strong>technical speaking</strong> engagements at conferences and
              meetups.
            </p>
            <h2 className="mt-8 text-2xl font-extrabold tracking-tight text-dark-blue">Technologies</h2>
            <div className="mt-4">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="pt-6 flex-row">
                  <div className="flow-root rounded-tl-3xl rounded-br-3xl bg-beige px-6 pb-8 relative">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-green-tree to-blue p-3 shadow-lg">
                        <ExportedImage
                          src={phpTextSvg}
                          alt="PHP logo - Technology used by Valentin Silvestre"
                          placeholder={null}
                          className="h-10 w-10"
                          width={10}
                          height={10}
                        />
                      </div>
                      <h2 className="mt-6 text-lg font-medium tracking-tight text-dark-blue">PHP</h2>
                      <p className="mt-5 text-base text-blue font-semibold">
                        PHP: My foundational technology for over 15 years, forming the backbone of my{" "}
                        <strong>PHP development</strong> work.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex-row">
                  <div className="flow-root rounded-tl-3xl rounded-br-3xl bg-beige px-6 pb-8 relative">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-green-tree to-blue p-3 shadow-lg">
                        <ExportedImage
                          src={symfonyTextSvg}
                          alt="Symfony framework logo - Expertise of Valentin Silvestre"
                          className="h-10 w-10"
                          width={10}
                          height={10}
                          placeholder={null}
                        />
                      </div>
                      <h2 className="mt-6 text-lg font-medium tracking-tight text-dark-blue">Symfony</h2>
                      <p className="mt-5 text-base text-blue font-semibold">
                        Symfony: Since 2016, I&apos;ve specialized as a <strong>Symfony developer</strong>, creating
                        complex applications and contributing back to the <strong>open source framework</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex-row">
                  <div className="flow-root rounded-tl-3xl rounded-br-3xl bg-beige px-6 pb-8 relative">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-green-tree to-blue p-3 shadow-lg">
                        <ExportedImage
                          src={syliusIconSvg}
                          alt="Sylius e-commerce framework logo - Expertise of Valentin Silvestre"
                          className="h-10 w-fit"
                        />
                      </div>
                      <h2 className="mt-6 text-lg font-medium tracking-tight text-dark-blue">Sylius</h2>
                      <p className="mt-5 text-base text-blue font-semibold">
                        Sylius: As a <strong>Sylius developer</strong> since 2019, I build tailored{" "}
                        <strong>e-commerce solutions</strong> on this leading Symfony-based framework.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="mt-8 text-2xl font-extrabold tracking-tight text-dark-blue">
              Conference Talks & Contributions
            </h2>
            <div className="mt-4">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="pt-6 flex-row">
                  <div className="flow-root rounded-tl-3xl rounded-br-3xl bg-beige px-6 pb-8 relative">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center text-white rounded-md bg-gradient-to-r from-green-tree to-blue p-3 shadow-lg">
                        May 2024 - AFUP Day Lille
                      </div>
                      <h2 className="mt-6 text-lg font-medium tracking-tight text-dark-blue">
                        The State of PHP Profilers in 2024
                      </h2>
                      <p className="mt-5 text-base text-blue font-semibold">
                        <Link href={"https://vasilvestre.github.io/profiler-slides/1"} target={"_blank"}>
                          Find my slides here.
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex-row">
                  <div className="flow-root rounded-tl-3xl rounded-br-3xl bg-beige px-6 pb-8 relative">
                    <div className="-mt-6">
                      <div className="inline-flex items-center text-white justify-center rounded-md bg-gradient-to-r from-green-tree to-blue p-3 shadow-lg">
                        June 2023 - Lille Symfony Meetup
                      </div>
                      <h2 className="mt-6 text-lg font-medium tracking-tight text-dark-blue">
                        Creating Expressive Fixtures with Foundry
                      </h2>
                      <p className="mt-5 text-base text-blue font-semibold">
                        <Link href={"https://vasilvestre.github.io/foundry-slides/1"} target={"_blank"}>
                          Find my slides here.
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex-row">
                  <div className="flow-root rounded-tl-3xl rounded-br-3xl bg-beige px-6 pb-8 relative">
                    <div className="-mt-6">
                      <div className="inline-flex items-center text-white justify-center rounded-md bg-gradient-to-r from-green-tree to-blue p-3 shadow-lg">
                        September 2022 - Lille Tech Meetup
                      </div>
                      <h2 className="mt-6 text-lg font-medium tracking-tight text-dark-blue">
                        How to properly extend Sylius API at 1.12
                      </h2>
                      <p className="mt-5 text-base text-blue font-semibold">
                        <Link href={"https://vasilvestre.github.io/extending-sylius-1.12-09-22/1"} target={"_blank"}>
                          Find my slides here.
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-t from-green-tree to-blue relative">
        <div className="relative mx-auto max-w-7xl ml-auto px-4 py-12 px-6 lg:px-8 lg:py-24">
          <div className="px-6 xl:px-10 rounded-lg text-center relative">
            <div className="mx-auto max-w-md sm:max-w-3xl items-center lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-9 xl:gap-48">
              <ExportedImage
                src={contactPic}
                alt="Valentin Silvestre - Contact me for Symfony/Sylius development"
                className="mx-auto rounded-full border-4 border-b-8 border-beige w-72 h-full lg:w-96"
              />
              <div className="mt-12 lg:mt-0">
                <h2 className="text-4xl font-extrabold text-beige md:text-3xl">
                  Contact Valentin for Web Development Projects
                </h2>

                <div className="mt-12">
                  <p className="mb-6 text-base text-beige">
                    If you&apos;re interested in my profile, don&apos;t hesitate to contact me. My github profile is the
                    ideal place to get to know me better.
                  </p>
                </div>

                <div className="flex justify-evenly flex-wrap gap-6 mt-3 md:order-2 lg:mt-0">
                  <a
                    href="https://github.com/vasilvestre/"
                    className="flex gap-x-2 justify-center text-beige"
                    target="_blank"
                    rel={"noopener"}
                  >
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <p>Github</p>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/valentin-silvestre-dev/"
                    className="flex gap-x-2 justify-center text-beige"
                    target="_blank"
                    rel={"noopener"}
                  >
                    <span className="sr-only">Linkedin</span>
                    <svg
                      fill="currentColor"
                      className="w-6 h-6"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-143 145 512 512"
                    >
                      <g
                        id="SVGRepo_tracerCarrierLINKEDIN"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0"
                      ></g>
                      <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z "></path>
                    </svg>

                    <p>Linkedin</p>
                  </a>

                  <a
                    href="https://twitter.com/ValentinSilves"
                    className="flex gap-x-2 justify-center text-beige"
                    target="_blank"
                    rel={"noopener"}
                  >
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>

                    <p>Twitter</p>
                  </a>

                  <a
                    href="https://bsky.app/profile/vasilvestre.bsky.social"
                    className="flex gap-x-2 justify-center text-beige"
                    target="_blank"
                    rel={"noopener"}
                  >
                    <span className="sr-only">BlueSky</span>
                    <svg viewBox="0 0 600 530" version="1.1" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                      <path
                        d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"
                        fill="currentColor"
                      />
                    </svg>

                    <p>BlueSky</p>
                  </a>

                  <a
                    href="https://registry.jsonresume.org/vasilvestre"
                    className="flex gap-x-2 justify-center text-beige"
                    target="_blank"
                    rel={"noopener"}
                  >
                    <span className="sr-only">CV</span>
                    <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_tracerCarrierCV" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0"></g>
                      <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-3 17h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" />
                    </svg>

                    <p>OpenResume</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
