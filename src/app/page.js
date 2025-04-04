import Header from "@/components/Header";
import About from "@/components/About";
import References from "@/components/References";
import Feed from "@/components/Feed";

export default function Home() {
  return (
    <main className="bg-[#030d43]">
      <Header />
      <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-6">
        <main className="flex flex-col gap-[15px] row-start-2 items-center sm:items-start">
          <About />
          <References />
          <Feed />
        </main>
      </div>
    </main>
  );
}
