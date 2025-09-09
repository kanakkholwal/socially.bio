"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "app/components/navbar";
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";

const space_font = Space_Grotesk({ subsets: ['latin'], preload: true })




export default function Home() {
  const [username, setUsername] = useState('');
  return (
    <>
      <header className='w-full bg-tertiary/10 min-h-96'>
        <Navbar />
        <div role="banner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-stretch justify-between">
          <div className="max-w-4xl mx-auto py-16 sm:py-20 lg:py-24">
            <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              <span className={"block text-8xl mb-2 " + space_font.className}>Socially Bio</span>
              <span className="block text-primary">The only link you{"'"}ll ever need.</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500">
              Socially Bio is a free tool that allows you to create a beautiful landing page that drives traffic to all of your social media profiles with one link
              and automate your content distribution.
            </p>
            <div className="mt-10">
              <div className="inline-flex ">
                <Button size="lg" className="rounded-full hover:bg-black ease-linear duration-300 shadow-primary/30 text-lg h-16" asChild>
                  <Link href={'https://app.socially.bio/?username=' + username} target="_blank">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-6 max-w-4xl mx-auto hidden lg:flex justify-center items-stretch">
            <Image src='/illustration.svg' width={928} height={720} alt={"Socially Bio"} className="w-full min-h-[50rem] h-full mix-blend-multiply -mt-32 -z-10 select-none	pointer-events-none" draggable={false} />
            {/* <div className="flex space-x-6 md:space-x-8"> */}
            {/* <a href="https://www.producthunt.com/posts/socially-bio?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-socially-bio" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=308558&theme=light" alt="Socially Bio - The only link you'll ever need. | Product Hunt" style={{width: '250px', height: '54px'}} width="250" height="54" /></a> */}
            {/* </div> */}
          </div>



        </div>

      </header>
      <section className="bg-white  w-full py-32 px-8  min-h-[576px]  bg-center bg-no-repeat bg-contain"
        // style={{ backgroundImage: "url(/illustration_2.svg)" }}
        id="about">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-center flex-wrap ">

          <div className=" w-full lg:w-[50%]">

            <Image src='/illustration_2.svg' width={928} height={720} alt={"Socially Bio"} className="w-[36rem] max-w-full h-full mix-blend-multiply min-h-[576px] select-none	pointer-events-none" draggable={false} />
          </div>
          <div className="flex flex-col items-start space-y-4 text-left p-8 w-full lg:w-[50%]">
            <h3 className="text-6xl font-extrabold text-slate-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              About Socially Bio
            </h3>
            <p className={"text-2xl text-slate-800  font-semibold break-words" + space_font.className}>
              Socially Bio is a free tool that allows you to create a beautiful landing page that drives traffic to all of your social media profiles with one link and automate your content distribution.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-slate-800 py-32 px-8  min-h-96  w-full" id="features">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Features
          </h2>
          <div className="flex">

            <div className="flex flex-col items-start  gap-4 mt-7  w-full lg:w-50%">
              {features.map((feature, index) => {
                return <Feature key={index} title={feature.title} description={feature.description} icon={feature.icon} />
              })}
            </div>
            <div className="flex-auto  justify-center items-center  w-full lg:w-50% hidden lg:flex">
              <Image src='/features.png' width={928} height={720} alt={"Socially Bio"}
                className="w-full h-full min-h-[28rem] aspect-[4/3] select-none	pointer-events-none"
                draggable={false} />

            </div>
          </div>

        </div>

      </section>
      <section className="bg-tertiary/10  py-32 px-8  min-h-96 w-full" id="faqs">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-6xl font-extrabold text-slate-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Frequently Asked Questions
          </h2>
          <div className="max-w-5xl mx-auto mt-10">
            <Accordion type="multiple" className="w-full space-y-5">
              {faqs.map((faq, index) => {
                return <AccordionItem value={"item-" + index} key={index} className="bg-primary/10 rounded-xl data-[state=open]:bg-primary/20">
                  <AccordionTrigger className="p-5 px-8 text-3xl font-bold text-left  !no-underline text-slate-900">
                    {faq.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-800 font-medium text-lg text-left px-9">
                    {faq.description}
                  </AccordionContent>
                </AccordionItem>
              })}
            </Accordion>

          </div>

        </div>

      </section>
      <section className="bg-primary/10  pt-32 pb-10 px-8  min-h-96 w-full" id="footer">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Connect your world, one link at a time.
          </h2>
          <h4 className="text-xl font-extrabold text-slate-700 sm:text-2xl sm:tracking-tight lg:text-5xl mt-2">
            Start with Socially Bio
          </h4>
          <div
            className="max-w-5xl mx-auto mt-10 flex flex-col justify-center items-center">
            <div className="relative grid w-full max-w-lg items-center gap-1.5">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-lg text-slate-500">
                socially.bio/
              </span>
              <Input type="text" id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                variant="fluid"
                placeholder="username" className="pl-[113px] pr-10 py-8 border-2 shadow-xl bg-white text-lg text-primary font-medium rounded-xl" />
            </div>
            <Button size="lg" className="rounded-full hover:bg-black ease-linear duration-300 shadow-primary/30 text-lg h-16 mt-5 shadow-xl hover:shadow-slate-300 " asChild>
              <Link href={'https://app.socially.bio/?username=' + username} target="_blank">
                Claim your Bio Link
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

    </>
  )
}

function Feature({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
  return (
    <div className="flex gap-4 items-center justify-center">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
        {icon}
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <p className="mt-2 text-base text-white">{description}</p>
      </div>
    </div>
  )
}
const features = [
  {
    title: 'Social Media Links',
    description:
      'Add all your social media links to your page and share it with your followers.',
    icon: (
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Link in Bio',
    description:
      'Add your Socially Bio link to your Instagram bio and never change it again.',
    icon: (
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          clipRule="evenodd"
          d="M13 10V3L4 14h7v7l9-11h-7z"
          fillRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: 'Content Distribution',
    description:
      'Automatically distribute your content to all your social media profiles.',
    icon: (
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          clipRule="evenodd"
          d="M13 10V3L4 14h7v7l9-11h-7z"
          fillRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: 'Analytics',
    description:
      'Track your page views and link clicks with our analytics dashboard.',
    icon: (
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          clipRule="evenodd"
          d="M13 10V3L4 14h7v7l9-11h-7z"
          fillRule="evenodd"
        />
      </svg>
    ),
  }, {
    title: 'Customization',
    description:
      'Customize your page with your own logo, background image and colors.',
    icon: (
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          clipRule="evenodd"
          d="M13 10V3L4 14h7v7l9-11h-7z"
          fillRule="evenodd"
        />
      </svg>
    ),
  },
  // {
  //   title: 'Custom Domain',
  //   description:
  //     'Use your own domain name to make your page look more professional.',
  //   icon: (
  //     <svg
  //       className="h-6 w-6 text-white"
  //       fill="none"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       strokeWidth={2}
  //       viewBox="0 0 24 24"
  //       stroke="currentColor"
  //     >
  //       <path
  //         clipRule="evenodd"
  //         d="M13 10V3L4 14h7v7l9-11h-7z"
  //         fillRule="evenodd"
  //       />
  //     </svg>
  //   ),
  // },

]
const faqs = [
  {
    title: 'How does it work?',
    description:
      'Socially Bio is a free tool that allows you to create a beautiful landing page that drives traffic to all of your social media profiles with one link and automate your content distribution.',
  },
  {
    title: 'How much does it cost?',
    description:
      'Socially Bio is free to use. We plan to introduce a pro plan in the future with more features.',

  },
  {
    title: 'How do I get started?',
    description:
      'Click the Get Started button and sign up for an account. Once you have created your account, you can start adding your social media links.',

  },
  {
    title: 'How do I add my Socially Bio link to my Instagram bio?',
    description:
      'Once you have created your Socially Bio page, you can add the link to your Instagram bio by clicking the Edit Profile button on your Instagram profile and pasting the link in the Website field.',
  },

]
