import { Header, Button, Footer } from "@/ui";
import { MainPage } from "@/ui/organisms/MainPage";

export default function Home() {
  return (
    <main className="bg-white text-gray-800 max-w-screen-xl mx-auto">
      <Header />
      <MainPage />
      <Footer />
    </main>
  );
}