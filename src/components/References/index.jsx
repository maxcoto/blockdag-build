"use client";

export default function References() {

    return (
        <div className="bg-[#0094ff] rounded-lg shadow-lg p-4 sm:p-8 w-full max-w-screen-md border-2 border-white">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">References</h1>
                <div>
                    <ul className="list-disc list-inside">
                        <li><a href="https://blockdag.network/" className="text-gray-200 hover:underline">BlockDAG: Website</a></li>
                        <li><a href="https://docs.blockdagnetwork.io/" className="text-gray-200 hover:underline">Documentation</a></li>
                        <li><a href="https://blockdag.network/developer-hub" className="text-gray-200 hover:underline">Developer Hub</a></li>
                        <li><a href="https://grants.blockdag.network/" className="text-gray-200 hover:underline">Grants</a></li>
                        <li><a href="https://blockdag.network/dev-releases#get-involved" className="text-gray-200 hover:underline">Roadmap & Releases</a></li>
                        <li><a href="https://primordial.bdagscan.com/" className="text-gray-200 hover:underline">Explorer</a></li>
                        <li><a href="/" className="text-gray-200 hover:underline">Discord</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
