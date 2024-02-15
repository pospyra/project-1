import { Header, Button, Footer } from "@/ui";
import { About } from "@/ui/organisms/About";
import { GetInTouch } from "@/ui/organisms/GetInTouch";
import { MainBlock } from "@/ui/organisms/MainBlock";

export default function Home() {
  return (
    <main className="bg-white text-gray-800 max-w-screen-xl mx-auto m-0">
      <Header />
      <MainBlock />
      <About/>
      <GetInTouch/>
      <Footer />
    </main>
  );
}