import { Button } from "@/components/ui/button";
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const space_font = Space_Grotesk({ subsets: ['latin'], preload: true })

const navLinks = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'Pricing',
    href: '/pricing',
  },
  {
    title: 'Contact',
    href: '/contact',
  },

]
function Navbar() {

  return (<div className='w-full bg-transparent h-28 px-8 flex justify-center items-center border-b border-border'>
    <div className='w-full max-w-7xl flex justify-between items-center mx-auto'>

      <Link href='/' className="flex-auto">
        <Image src='/socially-bio.svg' width={200} height={100} alt={"Socially Bio"} className="w-48 h-10"  draggable={false}/>
      </Link>
      <div className='flex items-center'>
        <nav role='navigation' className='hidden lg:flex space-x-8 mr-8'>
          {navLinks.map((link, index) => (
            <Link href={link.href} key={index} className='text-lg font-medium text-grey-400 hover:text-slate-900'>
                {link.title}
      
            </Link>
          ))}
        </nav>
        <Button size="lg" className="rounded-full hover:bg-black ease-linear duration-300" asChild>
          <Link href='https://app.socially.bio/'>
            Get Started
          </Link>
        </Button>
      </div>

    </div>
  </div>)
}


export default function Home() {
  return (
    <>
      <header className='w-full bg-tertiary/10 min-h-96'>
        <Navbar />
        <div role="banner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-stretch justify-between">
          <div className="max-w-4xl mx-auto py-16 sm:py-20 lg:py-24">
            <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              <span className={"block text-8xl mb-2 " + space_font.className}>Socially Bio</span>
              <span className="block text-primary">The only link you'll ever need.</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500">
              Socially Bio is a free tool that allows you to create a beautiful landing page that drives traffic to all of your social media profiles with one link 
              and automate your content distribution.
            </p>
            <div className="mt-10">
              <div className="inline-flex ">
                <Button size="lg" className="rounded-full hover:bg-black ease-linear duration-300 shadow-primary/30 text-lg h-16" asChild>
                  <Link href={'https://app.socially.bio/?username='} target="_blank">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
            </div>
            <div className="mt-6 max-w-4xl mx-auto flex justify-center items-stretch">
                <Image src='/illustration.svg' width={928} height={720} alt={"Socially Bio"} className="w-full min-h-[50rem] h-full mix-blend-multiply -mt-32 -z-10 select-none	pointer-events-none"  draggable={false}/>
              {/* <div className="flex space-x-6 md:space-x-8"> */}
                {/* <a href="https://www.producthunt.com/posts/socially-bio?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-socially-bio" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=308558&theme=light" alt="Socially Bio - The only link you'll ever need. | Product Hunt" style={{width: '250px', height: '54px'}} width="250" height="54" /></a> */}
              {/* </div> */}
              </div>



          </div>

      </header>
      
    </>
  )
}
