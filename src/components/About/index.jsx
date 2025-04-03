"use client";

export default function About() {

    return (
        <div className="bg-[#0094ff] rounded-lg shadow-lg p-4 sm:p-8 max-w-screen-md mx-auto sm:w-full border-2 border-white">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">About BlockDAG</h1>
                <p className="text-lg text-gray-200">
                    BlockDAG is a Layer 1 EVM blockchain that combines proof-of-work with speed. Speed comes from a DAG architecture that rapidly assembles small blocks in a way that is similar to Sonic. BlockDAG adds decentralization with a large network of proof-of-work miners. BlockDAG has captured the imagination and financial support of 170,000 buyers in its token presale. Testnet programs for builders are available now. Mainnet launch is planned for September.
                </p>
            </div>
        </div>
    );
}