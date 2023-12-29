
import { Button } from "@/components/ui/button";
import { Navbar } from "app/components/navbar";
import { MoveDown } from 'lucide-react';
import { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google';
import Image from "next/image";
import Link from "next/link";
import { AllFeatures } from "./features";
import { AllPlans } from "./plans";

export const metadata :Metadata = {
  title: "Pricing | Socially Bio",
  description: "Explore the perfect plan for your social synergy.",
  keywords: "pricing, pricing plans, pricing plans for socially bio, pricing plans for sociallybio, pricing plans for social media, pricing plans for link in bio, pricing plans for linktree, pricing plans for link in bio alternative, pricing plans for linktree alternative, pricing plans for bio link, pricing plans for bio link tool, pricing plans for link in bio tool, pricing plans for bio link alternative, pricing plans for bio linktree, pricing plans for bio linktree alternative, pricing plans for link in bio page, pricing plans for link in bio page alternative, pricing plans for bio link page, pricing plans for bio link page alternative, pricing plans for bio linktree page, pricing plans for bio linktree page alternative, pricing plans for link in bio website, pricing plans for link in bio website alternative, pricing plans for bio link website, pricing plans for bio link website alternative, pricing plans for bio linktree website, pricing plans for bio linktree website alternative, pricing plans for link in bio landing page, pricing plans for link in bio landing page alternative, pricing plans for bio link landing page, pricing plans for bio link landing page alternative, pricing plans for bio linktree landing page, pricing plans for bio linktree landing page alternative, pricing plans for social media, pricing plans for social media link in bio, pricing plans for social media linktree, pricing plans for social media bio link, pricing plans for social media bio linktree, pricing plans for social media bio link page, pricing plans for social media bio linktree page, pricing plans for social media bio link website, pricing plans for social media bio linktree website, pricing plans for social media bio link landing page, pricing plans for social media bio linktree landing page, pricing plans for social media link in bio alternative, pricing plans for social media linktree alternative, pricing plans for social media bio link alternative, pricing plans for social media bio linktree alternative, pricing plans for social media bio link page alternative, pricing plans for social media bio linktree page alternative, pricing plans for social media bio link website alternative, pricing plans for social media bio linktree website alternative, pricing plans for social media bio link landing page alternative, pricing plans for social media bio linktree landing page alternative",
  robots: "index, follow",
}
const space_font = Space_Grotesk({ subsets: ['latin'], preload: true })

export default function Pricing() {

  return (<>
    <header className='w-full bg-tertiary/10 min-h-96'>
      <Navbar />
      <div role="banner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-stretch justify-center text-center">
        <div className="max-w-4xl mx-auto py-16 sm:py-20 lg:py-24">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            <span className={"block text-8xl mb-2 " + space_font.className}>Pricing</span>
          </h1>
          <p className="mt-6 text-xl text-gray-500">
            Explore the perfect plan for your social synergy.
          </p>

        </div>
      </div>
    </header>
    <section className="bg-white  w-full py-32 px-8  min-h-[576px]  bg-center bg-no-repeat bg-contain"
      id="plans">
      <div className="w-full max-w-8xl mx-auto flex items-center justify-center flex-wrap text-center">
        <h3 className="text-3xl font-extrabold text-slate-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
          <span className={"block text-5xl mb-2 " + space_font.className}>Plans</span>
          <span className={"block text-xl font-semibold text-gray-600"}>Choose your Socially Bio journey</span>
        </h3>
        <AllPlans />
        <div className="w-full mx-auto flex items-center justify-center flex-wrap text-center">
          <Link href="#features" className="font-semibold underline underline-offset-4"
          scroll={true}
          shallow={true}
          >
            Explore all features <MoveDown className="inline-block w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
    <section className="bg-grey-500  w-full py-32 px-8  min-h-[576px]  bg-center bg-no-repeat bg-contain"
      id="features">
      <div className="w-full max-w-8xl mx-auto flex items-center justify-center flex-wrap text-center">
        <h3 className="text-3xl font-extrabold text-slate-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
          <span className={"block text-5xl mb-2 " + space_font.className}>Discover Our Features</span>
          <span className={"block text-xl font-semibold text-gray-600"}>
            Socially Bio is packed with features to help you get the most out of your social media presence.
          </span>
        </h3>
      <AllFeatures/>
      </div>
    </section>
    <section className="bg-primary/10  pt-32 pb-10 px-8  min-h-96 w-full" id="footer">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Start with Socially Bio

          </h2>
          <h4 className="text-lg font-semibold text-slate-700 sm:text-xl sm:tracking-tight lg:text-3xl mt-2">
          Connect your world, one link at a time.

          </h4>
          <div
            className="max-w-5xl mx-auto mt-10 flex flex-col justify-center items-center">
        
            <Button size="lg" className="rounded-full hover:bg-black ease-linear duration-300 shadow-primary/30 text-lg h-16 mt-5 shadow-xl hover:shadow-slate-300 " asChild>
              <Link href={'https://app.socially.bio/register'} target="_blank">
                Get Started for Free
              </Link>

            </Button>
          </div>

          <footer className="bg-white p-5 rounded-xl mt-32" id="footer">

            <div className="flex flex-col items-center justify-center mt-5">
              <div className="flex space-x-4">
                <Link href='/' className="flex-auto">
                  <Image src='/socially-bio.svg' width={200} height={100} alt={"Socially Bio - The only link you'll ever need."} className="w-48 h-10" draggable={false} />
                </Link>
                {/* <a href="https://www.producthunt.com/posts/socially-bio?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-socially-bio" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=308558&theme=light" alt="Socially Bio - The only link you'll ever need. | Product Hunt" style={{ width: '250px', height: '54px' }} width="250" height="54" /></a> */}
              </div>
            </div>
              <p className="text-gray-500 text-sm items-center  mt-5">© {new Date().getFullYear()} Socially Bio. All rights reserved.</p>

          </footer>
        </div>
      </section>
  </>)
}