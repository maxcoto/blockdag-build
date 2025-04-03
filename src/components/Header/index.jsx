"use client";

export default function Header() {

    return (
        <div className="flex max-w-screen-xl mx-auto sm:w-full justify-between py-4 px-4">
            <div className="flex gap-2">
                <img className="h-10" src="https://blockdag.network/3d.gif" alt="Logo" />
                <span className="text-3xl font-bold my-auto">BlockDAG</span>
            </div>
            <span></span>
        </div>
    );
}
