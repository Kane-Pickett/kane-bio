export default function ProfileSection() {
  return (
    <section className="flex flex-col items-center mx-auto">
      <div id="profle-pic"></div>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-white font-medium text-xl">Kane</h1>
        <h2 className="text-white text-base">Software Dev & Content Creator</h2>
        <h3 className="text-zinc-600 text-base italic">
          Currently building Ninjafy
        </h3>
      </div>
    </section>
  );
}
