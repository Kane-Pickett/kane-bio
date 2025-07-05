import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="flex flex-col items-center mx-auto gap-6 mt-12 z-20">
      <div>
        <Image
          src="/images/profilePicture.jpg"
          alt="Kane Pickett"
          width={200}
          height={200}
          className="rounded-full border-1 border-zinc-700"
          priority
        />
      </div>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-zinc-100 font-medium text-2xl">Kane</h1>
        <h2 className="text-zinc-200 font-extralight text-lg">
          Software Dev & Content Creator
        </h2>
        <h3 className="text-zinc-600 font-light text-base">
          Currently building Ninjafy
        </h3>
      </div>
    </section>
  );
}
