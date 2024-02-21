import { authOptions } from "app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function Page() {
    const session = await getServerSession(authOptions);
    console.log("session", session)

    return (<div className='flex justify-center items-center min-h-screen w-full'>
        {JSON.stringify(session)}
    </div>)
}
