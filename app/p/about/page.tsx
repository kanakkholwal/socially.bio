
import { Button } from "@/components/ui/button";
import { Navbar } from "app/components/navbar";
import { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google';
import Image from "next/image";
import Link from "next/link";


const space_font = Space_Grotesk({ subsets: ['latin'], preload: true });

export const metadata :Metadata = {
    title: "About Us | Socially Bio",
    description: "Learn more about Socially Bio.",
    keywords: "about, about us, socially bio, sociallybio, social media, link in bio, linktree, link in bio alternative, linktree alternative, bio link, bio link tool, link in bio tool, bio link alternative, bio linktree, bio linktree alternative, link in bio page, link in bio page alternative, bio link page, bio link page alternative, bio linktree page, bio linktree page alternative, link in bio website, link in bio website alternative, bio link website, bio link website alternative, bio linktree website, bio linktree website alternative, link in bio landing page, link in bio landing page alternative, bio link landing page, bio link landing page alternative, bio linktree landing page, bio linktree landing page alternative, social media link in bio, social media linktree, social media bio link, social media bio linktree, social media bio link page, social media bio linktree page, social media bio link website, social media bio linktree website, social media bio link landing page, social media bio linktree landing page, social media link in bio alternative, social media linktree alternative, social media bio link alternative, social media bio linktree alternative, social media bio link page alternative, social media bio linktree page alternative, social media bio link website alternative, social media bio linktree website alternative, social media bio link landing page alternative, social media bio linktree landing page alternative",
    robots: "index, follow",
}

export default function Pricing() {

    return (<>
        <header className='w-full bg-tertiary/10 min-h-96'>
            <Navbar />
            <div role="banner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-stretch justify-center text-center">
                <div className="max-w-4xl mx-auto py-16 sm:py-20 lg:py-24">
                    <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        <span className={"block text-8xl mb-2 " + space_font.className}>About Us</span>
                    </h1>
                    <p className="mt-6 text-xl text-gray-500">
                        Learn more about Socially Bio.
                    </p>

                </div>
            </div>
        </header>
        <section className="bg-white  w-full py-32 px-8  min-h-[576px]  bg-center bg-no-repeat bg-contain"
            id="plans">
            <div className="w-full max-w-8xl mx-auto flex items-center justify-center flex-wrap text-center">
                <h3 className="text-3xl font-extrabold text-slate-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
                    <span className={"block text-5xl mb-2 " + space_font.className}>Our Mission</span>
                </h3>
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