import { authOptions } from "app/api/auth/[...nextauth]/options";
import type { Metadata } from 'next';
import { getServerSession } from "next-auth/next";
import dbConnect from "src/lib/dbConnect";
import TempLink from "src/models/tempLink";
import OpenerPage from "./opener";




export const metadata: Metadata = {
    title: 'Deep Link opener! - Socially Bio',
    description: 'Socially Bio is a free tool to help you manage multiple links for your social media accounts.',
}

export default async function Page({ params }: { params: { slug: string } }) {
    const session = await getServerSession(authOptions);
    console.log(session)
    await dbConnect();

    const slug = params.slug

    let tempLink = null;
    const link = await TempLink.findOne({ slug: slug });
    if (link) {
        link.visits += 1;
        tempLink = JSON.parse(JSON.stringify(link));
        console.log("visits updated")
        await link.save();

    }
    async function updateHits() {
        "use server";
        const link = await TempLink.findOne({ slug: slug });
        link.hits += 1;
        console.log("hits updated")

        await link.save();
    }


    return (<div className='flex justify-center items-center min-h-screen w-full'>

        {tempLink && <OpenerPage tempLink={tempLink} updateHits={updateHits} />}

    </div>)
}
