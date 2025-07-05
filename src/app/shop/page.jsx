import { LuX, LuLink } from "react-icons/lu";
import Footer from "../components/Footer";

const Products = [
  {
    key: 1,
    image:
      "https://images.unsplash.com/photo-1558455546-6cc03e986b5d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "UI Buttons Complete Bundle",
    description: "Full bundle of premiere mogrts + ae templates.",
    price: "$22",
    href: "https://www.motionelements.com/after-effects-template-47072176-ui-buttons-complete-bundle-vol-1-master-pack-mogrt-edition"
  },
  {
    key: 2,
    image:
      "https://images.unsplash.com/photo-1558455546-6cc03e986b5d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "UI Buttons MoGrt Edition",
    description: "Preanimated, east to use ui elements.",
    price: "$18",
    href: "https://www.motionelements.com/motion-graphics-template-47072164-ui-buttons-mogrt-edition-vol-1-built-for-premiere-pro-ready-for-action"
  },
  {
    key: 3,
    image:
      "https://images.unsplash.com/photo-1558455546-6cc03e986b5d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "UI Buttons Master Pack",
    description: "After fx preanimated, easy to use ui elements.",
    price: "$14",
    href: "https://www.motionelements.com/after-effects-template-43591982-ui-buttons-master-pack-vol-1-ultimate-customization-full-control"
  },
  {
    key: 4,
    image:
      "https://images.unsplash.com/photo-1558455546-6cc03e986b5d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "UI Buttons Essentials Pack",
    description: "Essential ui buttons and switches.",
    price: "$9",
    href: "https://www.motionelements.com/after-effects-template-43591372-ui-buttons-essentials-pack-vol-1-customizable-animated-ui-elements-for-after-effects"
  },
  {
    key: 5,
    image:
      "https://images.unsplash.com/photo-1558455546-6cc03e986b5d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "UI TextBox Template",
    description: "Preanimated, easy to use textbox template.",
    price: "$9",
    href: "https://www.motionelements.com/after-effects-template-38342725-ui-textbox-template-ae-template"
  }
];

export default function Shop() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-grow flex-col items-center justify-center">
        {/* title bar */}

        <div className="sticky top-0 z-10 flex grid grid-cols-3 py-8 mb-8 border-b border-zinc-600 items-center text-center bg-black rounded-lg">
          <div />
          <h1 className="text-3xl text-white">Shop</h1>
          <div className="flex justify-end pr-8">
            <a className="p-4 bg-zinc-900/80 rounded-full" href="/">
              <LuX className="w-6 h-auto" />
            </a>
          </div>
        </div>

        {/* store products */}
        <div className="flex grid grid-cols-1 lg:grid-cols-2 mx-auto gap-8 max-w-xl lg:max-w-5xl w-full px-4 mx-auto mb-12">
          {Products.map(
            ({ key, image, productName, description, price, href }) => (
              <div
                key={key}
                className="p-[1px] bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-xl group duration-400 hover:scale-104 hover:from-white/30 hover:via-white/10 hover:to-transparent"
              >
                {/* border-1 border-zinc-700 rounded-xl */}
                <div className="pb-4 bg-gradient-to-br from-black/75 via-black/60 to-black/40 backdrop-blur-lg rounded-xl">
                  <img
                    src={image}
                    className="w-full h-32 object-cover rounded-xl"
                  />

                  {/* text */}
                  <div className="flex flex-col gap-2 px-6 my-4">
                    <div className="flex flex-row justify-between">
                      <h2 className="font-medium text-base">{productName}</h2>
                      <p className="font-bold">{price}</p>
                    </div>
                    <p className="text-zinc-500 text-sm">{description}</p>
                  </div>

                  {/* button */}
                  <div className="flex flex-row gap-4 items-center text-center justify-center p-2 mx-4 mb-4 bg-zinc-900 rounded-lg">
                    <p className="font-base text-sm">View Details</p>
                    <LuLink className="w-4 h-auto text-zinc-700 group-hover:text-zinc-400 duration-400" />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
