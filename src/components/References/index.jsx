"use client";

export default function References() {

    return (
        <div className="bg-[#0094ff] rounded-lg shadow-lg p-4 sm:p-8 w-full max-w-screen-md border-2 border-white">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">References</h1>
                <div>
                    <ul className="list-disc list-inside">
                        <li><a href="https://discord.gg/GwYJu4Vr" className="text-gray-200 text-lg underline hover:text-[#030d43]">BlockDAG builder Discord</a></li>
                        <li><a href="https://docs.blockdagnetwork.io/" className="text-gray-200 text-lg underline hover:text-[#030d43]">Documentation</a></li>
                        <li><a href="https://blockdag.network/developer-hub" className="text-gray-200 text-lg underline hover:text-[#030d43]">Developer Hub</a></li>
                        <li><a href="https://grants.blockdag.network/" className="text-gray-200 text-lg underline hover:text-[#030d43]">Grants</a></li>
                        <li><a href="https://primordial.bdagscan.com/" className="text-gray-200 text-lg underline hover:text-[#030d43]">Explorer</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
