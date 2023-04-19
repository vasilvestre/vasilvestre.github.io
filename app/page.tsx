import Image from 'next/image'
import profilePic from '/public/assets/images/portrait-valentin.webp';
import contactPic from '/public/assets/images/valentin-contact.webp';
import littleBobPic from '/public/assets/images/bob.svg';
import phpTextSvg from '/public/assets/images/php-text.svg';
import symfonyTextSvg from '/public/assets/images/symfony-text.svg';
import syliusIconSvg from '/public/assets/images/sylius-icon.svg';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main className="bg-inherit">
      <section className="relative bg-gradient-to-b from-green-tree to-blue">
        <div className="overflow-hidden lg:relative py-12 lg:py-24">
          <div
              className="mx-auto max-w-md px-4 sm:max-w-3xl px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24 gap-y-12 flex flex-wrap justify-center items-center">
            <div className="text-center lg:text-left">
              <div className="sm:max-w-xl">
                <div className="flex gap-x-3 justify-center lg:justify-start">
                  <Image
                      src={littleBobPic}
                      alt=""
                      className="w-10 h-full hidden md:block"
                      priority
                      width={40}
                      height={40}
                  />
                  <h1 className="text-4xl font-extrabold tracking-tight text-beige">Valentin Silvestre</h1>
                </div>
                <p className="mt-6 text-xl text-beige">Symfony & Sylius developer, working from France. Interested in
                  quality, open source & mulet.</p>
              </div>
              <div className="mt-12 flex justify-center lg:justify-start">
                <a href="#contact"
                   className="text-center block w-2/4 rounded-br-2xl rounded-tl-2xl border border-transparent px-5 py-3 bg-beige hover:text-dark-blue text-base font-medium text-green-tree shadow hover:text-dark-blue focus:border-2 focus:border-beige sm:px-10">Contact
                  me !</a>
              </div>
            </div>
            <Image
                src={profilePic}
                alt="photo de valentin silvestre"
                className="mx-auto rounded-full border-4 border-b-8 border-beige w-72 h-full lg:w-96"
                priority
            />
          </div>
        </div>
      </section>
      <section className="relative bg-beige py-16 sm:py-24 lg:py-24">
        <div
            className="mx-auto flex flex-col items-center justify-center inset-0 max-w-md px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="mt-2 font-extrabold tracking-tight text-dark-blue text-4xl md:text-3xl">Who is Valentin ?</h1>
          <p className="mx-auto mt-5 max-w-prose text-xl text-blue">
              <span>
                  I attended the University Catholique de Lille in France and earned a Master&apos;s degree in Computer Science.
                  Following that, I have worked as a Symfony developer in various companies, with a focus on e-commerce, B2C, and B2B industries.
                  Currently, I am employed by Akawaka as a Sylius developer.
              </span>
          </p>
        </div>
      </section>

      <section className="bg-what bg-no-repeat bg-cover bg-fixed">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="bg-beige/50 p-20 rounded-tl-3xl rounded-br-3xl drop-shadow-2xl">
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-dark-blue md:text-3xl">What does Valentin do
              ?</h1>
            <div className="mt-16">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="pt-6">
                  <div className="flow-root rounded-tl-3xl rounded-br-3xl bg-beige px-6 pb-8 relative">
                    <div className="-mt-6">
                      <div
                          className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-green-tree to-blue p-3 shadow-lg">
                        <Image
                            src={phpTextSvg}
                            alt="PHP logo"
                            className="h-10 w-10"
                            width={10}
                            height={10}
                        />
                      </div>
                      <h2 className="mt-6 text-lg font-medium tracking-tight text-dark-blue">PHP</h2>
                      <p className="mt-5 text-base text-blue">
                        The undying technology that I&apos;ve been using since 15 years old.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flow-root rounded-tl-3xl rounded-br-3xl bg-beige px-6 pb-8 relative">
                    <div className="-mt-6">
                      <div
                          className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-green-tree to-blue p-3 shadow-lg">
                          <Image
                              src={symfonyTextSvg}
                              alt="Symfony logo"
                              className="h-10 w-10"
                              width={10}
                              height={10}
                          />
                      </div>
                      <h2 className="mt-6 text-lg font-medium tracking-tight text-dark-blue">Symfony</h2>
                      <p className="mt-5 text-base text-blue">
                        Since 2016 I have been working with Symfony. I also made a few contributions to the framework.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flow-root rounded-tl-3xl rounded-br-3xl bg-beige px-6 pb-8 relative">
                    <div className="-mt-6">
                      <div
                          className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-green-tree to-blue p-3 shadow-lg">
                          <Image
                              src={syliusIconSvg}
                              alt="Sylius logo"
                              className="h-10 w-10"
                              width={10}
                              height={10}
                          />
                      </div>
                      <h2 className="mt-6 text-lg font-medium tracking-tight text-dark-blue">Sylius</h2>
                      <p className="mt-5 text-base text-blue">
                        Top e-commerce framework for Symfony. I have been working with Sylius since 2019 on various
                        projects.
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
            <div
                className="mx-auto max-w-md sm:max-w-3xl items-center lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-9 xl:gap-48">
              <Image
                    src={contactPic}
                    alt="pic of me pointing the camera with my fingers"
                    className="mx-auto rounded-full border-4 border-b-8 border-beige w-72 h-full lg:w-96"
                />
                <div className="mt-12 lg:mt-0">
                  <h1 className="text-4xl font-extrabold text-beige md:text-3xl">Contact Me !</h1>

                  <div className="mt-12">
                    <p className="mb-6 text-base text-beige">
                      If you&apos;re interested in my profile, don&apos;t hesitate to contact me. My github profile is the ideal
                      place to get to know me better.
                    </p>
                  </div>

                  <div className="flex justify-evenly flex-wrap gap-6 mt-3 md:order-2 lg:mt-0">
                    <a href="https://github.com/vasilvestre/" className="flex gap-x-2 justify-center text-beige"
                       target="_blank">
                      <span className="sr-only">GitHub</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"/>
                      </svg>

                      <p>Github</p>
                    </a>

                    <a href="https://www.linkedin.com/in/v-silvestre/"
                       className="flex gap-x-2 justify-center text-beige" target="_blank">
                      <span className="sr-only">Linkedin</span>
                      <svg fill="currentColor" className="w-6 h-6" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                           viewBox="-143 145 512 512"><g id="SVGRepo_tracerCarrierLINKEDIN" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0"></g>
                        <path
                            d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z "></path>
                                    </svg>

                      <p>Linkedin</p>
                    </a>

                    <a href="https://twitter.com/ValentinSilves" className="flex gap-x-2 justify-center text-beige"
                       target="_blank">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                      </svg>

                      <p>Twitter</p>
                    </a>

                    <a href="https://registry.jsonresume.org/vasilvestre"
                       className="flex gap-x-2 justify-center text-beige" target="_blank">
                      <span className="sr-only">CV</span>
                      <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_tracerCarrierCV" strokeLinecap="round" strokeLinejoin="round"
                           strokeWidth="0"></g>
                        <path
                            d="M9.29289 1.29289C9.48043 1.10536 9.73478 1 10 1H18C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V8C3 7.73478 3.10536 7.48043 3.29289 7.29289L9.29289 1.29289ZM18 3H11V8C11 8.55228 10.5523 9 10 9H5V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V4C19 3.44772 18.5523 3 18 3ZM6.41421 7H9V4.41421L6.41421 7ZM7 13C7 12.4477 7.44772 12 8 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H8C7.44772 14 7 13.5523 7 13ZM7 17C7 16.4477 7.44772 16 8 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H8C7.44772 18 7 17.5523 7 17Z"></path>
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
  )
}
