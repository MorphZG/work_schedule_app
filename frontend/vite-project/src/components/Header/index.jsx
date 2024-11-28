export default function Header() {
  return (
    <header className="sticky top-0 bg-gray-600 w-full flex rounded-bl-md rounded-br-md items-center p-2 z-10">
      <section className="flex justify-start w-full ">
        <h1 className="m-0 font-extrabold text-2xl text-white">
          Employee Schedule App
        </h1>
      </section>
      <section>
        <nav className="flex gap-5 ">
          <a href="#">Employee</a>
          <a href="#">Schedule</a>
          <a href="#">Stats</a>
        </nav>
      </section>
      <section className="w-full flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign In
        </button>
      </section>
    </header>
  );
}
