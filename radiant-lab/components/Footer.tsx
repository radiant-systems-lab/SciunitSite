export default function Footer() {
  return (
    <footer className="w-full bg-mizzouBlack text-mizzouWhite p-4 text-center text-sm">
      <p>© {new Date().getFullYear()} Radiant Lab — All rights reserved.</p>
      <p className="mt-1 text-mizzouGold">
        Sciunit & FLINC Prototype Website
      </p>
    </footer>
  );
}
