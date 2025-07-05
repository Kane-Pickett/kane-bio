import { LuCodeXml, LuLink, LuShoppingBag } from "react-icons/lu";
import { GiSharpShuriken } from "react-icons/gi";
import { MdMovieEdit } from "react-icons/md";
import { BsPersonVideo } from "react-icons/bs";

const Buttons = [
  {
    key: 1,
    title: "Development",
    subtitle: "Software dev portfolio",
    icon1: LuCodeXml,
    icon2: LuLink,
    href: "https://madebykane.dev"
  },
  {
    key: 2,
    title: "Ninjafy",
    subtitle: "Unleash your inner ninja and level up",
    icon1: GiSharpShuriken,
    icon2: LuLink,
    href: "https://www.getninjafy.com/"
  },
  {
    key: 3,
    title: "FlowBerri",
    subtitle: "Content creation portfolio",
    icon1: MdMovieEdit,
    icon2: LuLink,
    href: "https://flowberri.com"
  },
  {
    key: 4,
    title: "Book a Call",
    subtitle: "Free 15min video call for projects",
    icon1: BsPersonVideo,
    icon2: LuLink,
    href: "https://calendly.com/kanepickett/15min"
  },
  {
    key: 5,
    title: "Shop",
    subtitle: "After effects templates and assets",
    icon1: LuShoppingBag,
    icon2: LuLink,
    href: "../shop"
  }
];

export default function ContentButtons() {
  return (
    <section className="max-w-xl w-full px-4 mx-auto z-20">
      <div className="flex flex-col gap-4">
        {Buttons.map(
          ({ key, title, subtitle, icon1: Icon1, icon2: Icon2, href }) => (
            <div
              key={key}
              className="p-[1px] bg-gradient-to-br from-white/20 via-white/2 to-transparent rounded-lg group duration-400 hover:scale-104 hover:from-white/30 hover:via-white/4 hover:to-transparent motion-preset-rebound-up"
              style={{ animationDelay: `${key * 150}ms` }}
            >
              <a
                href={href}
                className="flex justify-between items-center px-4 py-2 bg-gradient-to-br from-black/75 via-black/60 to-black/40 backdrop-blur-lg rounded-lg"
              >
                <div className="flex flex-row gap-4">
                  <Icon1 className="w-6 h-auto text-zinc-400 group-hover:text-zinc-200 duration-400" />
                  <div className="flex flex-col">
                    <h1 className="text-white text-base font-medium">
                      {title}
                    </h1>
                    <p className="text-zinc-600 text-sm">{subtitle}</p>
                  </div>
                </div>
                <Icon2 className="w-4 h-auto text-zinc-700 group-hover:text-zinc-400 duration-400" />
              </a>
            </div>
          )
        )}
      </div>
    </section>
  );
}
