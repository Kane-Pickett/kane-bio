import {
  LuGithub,
  LuLinkedin,
  LuInstagram,
  LuYoutube,
  LuMail
} from "react-icons/lu";

export default function SocialLinks() {
  return (
    <section className="w-[80vw] mx-auto">
      <div className="flex flex-row gap-8 items-center justify-between">
        <div className="p-3 rounded-full border-1 border-zinc-700">
          <LuGithub />
        </div>

        <div className="p-3 rounded-full border-1 border-zinc-700">
          <LuLinkedin />
        </div>

        <div className="p-3 rounded-full border-1 border-zinc-700">
          <LuInstagram />
        </div>

        <div className="p-3 rounded-full border-1 border-zinc-700">
          <LuYoutube />
        </div>

        <div className="p-3 rounded-full border-1 border-zinc-700">
          <LuMail />
        </div>
      </div>
    </section>
  );
}
