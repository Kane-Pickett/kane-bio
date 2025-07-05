import { LuCodeXml, LuLink } from "react-icons/lu";

export default function ContentButtons() {
  return (
    <section className="max-w-xl w-full px-4 mx-auto z-20">
      <div className="flex flex-col gap-4">
        {/* button */}
        <div className="p-[1px] bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-lg group duration-400 hover:scale-102">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center px-4 py-2 bg-gradient-to-br from-black/75 via-black/60 to-black/40 backdrop-blur-lg rounded-lg"
          >
            <div className="flex flex-row gap-4">
              <LuCodeXml className="w-6 h-auto text-zinc-400 group-hover:text-zinc-200 duration-400" />
              <div className="flex flex-col">
                <h1 className="text-white text-base font-medium">
                  Development
                </h1>
                <p className="text-zinc-600 text-sm">View my dev portfolio</p>
              </div>
            </div>
            <LuLink className="w-4 h-auto text-zinc-700 group-hover:text-zinc-400 duration-400" />
          </a>
        </div>

        <div></div>

        <div></div>

        <div></div>
      </div>
    </section>
  );
}
