import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" sm:px-0">
      <Navbar />
      <div className=" mx-auto sm:max-w-xl  md:max-w-2xl lg: max-w-3xl xl:max-w-6xl">
        {children}
        <Footer />
      </div>
    </div>
  );
}
