import { Inter } from 'next/font/google'
import Link from "next/link";
export const metadata = {
    title: 'Informations Légales'
}

const inter = Inter({ subsets: ['latin'] })
export default function Page() {
  return (
      <main className="relative bg-gradient-to-b from-green-tree to-blue">
        <section className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl py-10 md:py-20">
            <Link href={'/'} className={"text-lg text-beige"}>Retourner à l&apos;accueil</Link>
          <div className="relative mt-10 md:mt-20">
            <h1 className="text-center text-beige font-black inline-block text-4xl">Informations Légales</h1>
          </div>
        </section>

        <section className="pt-10 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h1 className="text-beige font-black text-4xl md:text-3xl">Crédits</h1>
          <div className="mt-6 text-xl text-light-green">
            <p>Le site de Valentin SILVESTRE accessible à l&apos;adresse valentin.silvestre.com a été conçu et développé par
              Amélia MASSOT.</p>
            <p>Ce site a été réalisé dans le cadre de la mise à disposition des compétences de web design et de
              développement web d&apos;Amélia MASSOT au sein de l&apos;entreprise AKAWAKA, son employeur.</p>
            <p>Le contenu du site a été rédigé par Valentin SILVESTRE, qui est le propriétaire du site.</p>
          </div>
        </section>

        <section className="pt-10 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h1 className="text-beige font-black text-4xl md:text-3xl">Droit d&apos;auteur</h1>
          <p className="mt-6 text-xl text-light-green">Le contenu disponible sur ce site est, sauf mention contraire,
            diffusé sous licence <a href="https://creativecommons.org/licenses/by-sa/2.0/fr/" className="underline">Creative
              Commons (BY-SA)</a>.</p>
        </section>

        <section className="pt-10 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h1 className="text-beige font-black text-4xl md:text-3xl">Vie privée</h1>
          <p className="mt-6 text-xl text-light-green">Ce site ne recueille aucune donnée personnelle.</p>
        </section>

        <section className="pb-16 pt-10 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 md:pb-32 lg:px-8 lg:max-w-7xl">
          <h1 className="text-beige font-black text-4xl md:text-3xl">Contact</h1>
          <p className="mt-6 text-xl text-light-green">Pour toute demande de renseignements ou de contact, vous pouvez
            vous adresser à Valentin SILVESTRE en utilisant les moyens de contact mis à disposition.</p>
        </section>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6 hidden lg:block">
          <div
              className="absolute w-96 h-96 border-4 border-b-8 border-light-green bg-light-green/10 rounded-full right-10 top-5"></div>
        </div>
      </main>
  )
}
