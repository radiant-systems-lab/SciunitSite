import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrackSelector from "@/components/TrackSelector";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-mizzouBlack mt-8">
          Welcome to Radiant Lab
        </h2>
        <p className="text-gray-600 mt-2">
          Explore reproducible research tools: Sciunit & FLINC
        </p>

        <TrackSelector />

        {/* Placeholder sections */}
        <section id="sciunit" className="mt-16 max-w-3xl p-6 text-center">
          <h3 className="text-2xl font-bold text-mizzouGold mb-4">
            Sciunit Section 
          </h3>
          <p className="text-gray-700">
            This is where Sciunit Hero + Tabs will go.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
