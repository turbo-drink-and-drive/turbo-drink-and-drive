import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className=""
          src="/logo.svg"
          alt="Turbo Drive logo"
          width={500}
          height={400}
          priority
        />
        <div className="flex gap-4 items-center flex-col sm:flex-col w-full">
          <h1 className="text-4xl font-bold text-center">Turbo Drive</h1>
          <p className="text-xl text-left">
            Sofia, Bulgaria
            <br />
            Call us: <a href="tel:+359888336303">+359888336303</a>
            <br />
            Personal Driver, Drink and Drive service, Rent a car
          </p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl text-yellow-500/90">Under construction</span>
          <br />
          <span className="text-lg text-yellow-400/80">
            This site is currently under construction. Please check back later.
          </span>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p className="text-lg text-gray-500">
          &copy; {new Date().getFullYear()} Turbo Drive. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
