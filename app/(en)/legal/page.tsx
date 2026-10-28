import { Inter } from "next/font/google";
import Link from "next/link";
export const metadata = {
  title: "Informations Légales",
};

const inter = Inter({ subsets: ["latin"] });
export default function Page() {
  return (
    <main className="relative bg-linear-to-b from-green-tree to-blue">
      <section className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl py-10 md:py-20">
        <Link href={"/"} className={"text-lg text-beige"}>
          Return to the home page
        </Link>
        <div className="relative mt-10 md:mt-20">
          <h1 className="text-center text-beige font-black inline-block text-4xl">Legal Informations</h1>
        </div>
      </section>

      <section className="pt-10 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h1 className="text-beige font-black text-4xl md:text-3xl">Credits</h1>
        <div className="mt-6 text-xl text-light-green">
          <p>
            Valentin SILVESTRE&apos;s website is available at vasilvestre.github.io and was designed and developed by
            Amélia MASSOT.
          </p>
          <p>
            This website was created as part of Amélia MASSOT&apos;s web design and web development skills within the
            company AKAWAKA, her employer.
          </p>
          <p>The content of the site was written by Valentin SILVESTRE, who is the owner of the site.</p>
        </div>
      </section>

      <section className="pt-10 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h1 className="text-beige font-black text-4xl md:text-3xl">Copyright</h1>
        <p className="mt-6 text-xl text-light-green">
          The content available on this site is, unless otherwise stated, licensed under
          <a href="https://creativecommons.org/licenses/by-sa/2.0/fr/" className="underline">
            Creative Commons (BY-SA)
          </a>
          .
        </p>
      </section>

      <section className="pt-10 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h1 className="text-beige font-black text-4xl md:text-3xl">Privacy Policy</h1>
        <p className="mt-6 text-xl text-light-green">This site does not collect any personal data.</p>
      </section>

      <section className="pb-16 pt-10 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 md:pb-32 lg:px-8 lg:max-w-7xl">
        <h1 className="text-beige font-black text-4xl md:text-3xl">Contact</h1>
        <p className="mt-6 text-xl text-light-green">
          For any request for information or contact, you can contact Valentin SILVESTRE using the means of contact
          provided.
        </p>
      </section>

      <div className="sm:mx-auto sm:max-w-3xl sm:px-6 hidden lg:block">
        <div className="absolute w-96 h-96 border-4 border-b-8 border-light-green bg-light-green/10 rounded-full right-10 top-5"></div>
      </div>
    </main>
  );
}
