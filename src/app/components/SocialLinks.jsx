import {
  LuGithub,
  LuLinkedin,
  LuInstagram,
  LuYoutube,
  LuMail
} from "react-icons/lu";

export default function SocialLinks() {
  return (
    <section className="mx-auto">
      <div className="flex flex-row gap-6 items-center justify-between">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border-1 border-zinc-700 group hover:scale-112 hover:border-zinc-400 duration-400"
        >
          <LuGithub className="text-zinc-400 group-hover:text-zinc-200 duration-400" />
        </a>

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
