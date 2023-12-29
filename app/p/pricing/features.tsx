
const featuresList = [
    {
        title: 'Unified Linking',
        description: 'Create a single link to connect all your social platforms.',
    },
    {
        title: 'Customization Options',
        description: 'Personalize your page with themes, colors, and more.',
    },
    {
        title: 'Analytics Insights',
        description: 'Gain valuable metrics to track engagement and growth.',
    },
    {
        title: 'Automation Tools',
        description: 'Streamline interactions with automated comment and message responses.',
    },
];
export function AllFeatures() {

    return (<>

        <div className=" py-12 w-full">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                    {featuresList.map((feature, index) => (
                        <div className="border border-slate-100 shadow-lg rounded-3xl p-6 overflow-hidden duration-300 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-2xl hover:border-primary" key={index}>
                            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </>)
}