"use client";
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
        href: '/p/about',
    },
    //   {
    //     title: 'Services',
    //     href: '/p/services',
    //   },
    {
        title: 'Pricing',
        href: '/p/pricing',
    },
    {
        title: 'Contact',
        href: '/p/contact',
    },

]
export function Navbar() {

    return (<div className='w-full bg-transparent h-28 px-6 sm:px-8 flex justify-center items-center border-b border-border'>
        <div className='w-full max-w-7xl flex justify-between items-center gap-3 mx-auto'>

            <Link href='/' className="flex-auto">
                <Image src='/socially-bio.svg' width={200} height={100} alt={"Socially Bio - The only link you'll ever need."} className="w-48 h-10" draggable={false} />
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