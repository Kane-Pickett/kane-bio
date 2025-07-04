import { LuCodeXml, LuLink } from "react-icons/lu";

export default function ContentButtons() {
  return (
    <section className="w-[80vw] mx-auto">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center py-2 px-4 border-1 border-zinc-700 rounded-lg">
          <div className="flex flex-row gap-4">
            <LuCodeXml className="w-6 h-auto text-zinc-400" />
            <div className="flex flex-col">
              <h1 className="text-white text-base font-medium">Development</h1>
              <p className="text-zinc-600 text-sm">View my dev portfolio</p>
            </div>
          </div>
          <LuLink className="w-4 h-auto text-zinc-700" />
        </div>

        <div></div>

        <div></div>

        <div></div>
      </div>
    </section>
  );
}
