import {
  LuGithub,
  LuLinkedin,
  LuInstagram,
  LuYoutube,
  LuMail
} from "react-icons/lu";

const Links = [
  { key: 1, icon: LuGithub, href: "https://github.com/Kane-Pickett" },
  {
    key: 2,
    icon: LuLinkedin,
    href: "https://www.linkedin.com/in/kanepickett/"
  },
  {
    key: 3,
    icon: LuInstagram,
    href: "https://www.instagram.com/kane_pickett_/"
  },
  { key: 4, icon: LuYoutube, href: "https://www.youtube.com/@kane.pickett" },
  {
    key: 5,
    icon: LuMail,
    href: "mailto:kane@getminimal.io?subject=Let's%20Connect&body=Heya%20Kane,%I%wanted%to%get%in%touch!"
  }
];

export default function SocialLinks() {
  return (
    <section className="mx-auto z-20">
      <div className="flex flex-row gap-6 items-center justify-between">
        {Links.map(({ key, icon: Icon, href }) => (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border-1 border-zinc-700 group hover:scale-112 hover:border-zinc-400 duration-400 motion-preset-focus motion-duration-800"
            style={{ animationDelay: `${key * 120}ms` }}
          >
            <Icon className="text-zinc-400 group-hover:text-zinc-200 duration-400" />
          </a>
        ))}
      </div>
    </section>
  );
}
