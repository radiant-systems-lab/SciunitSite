import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-mizzouBlack">Hello Radiant Lab!</h2>
        <p className="text-gray-600 mt-2">Sciunit | FLINC Website Prototype</p>
      </div>
    </main>
  );
}
