import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="flex flex-col items-center mx-auto gap-6 mt-8 z-20">
      <div>
        <Image
          src="/images/profilePicture.jpg"
          alt="Kane Pickett"
          width={160}
          height={160}
          className="rounded-full border-1 border-zinc-700 motion-preset-focus motion-duration-800 motion-delay-100"
          priority
        />
      </div>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-zinc-100 font-medium text-2xl motion-preset-rebound-up">
          Kane
        </h1>
        <h2 className="text-zinc-200 font-extralight text-lg motion-preset-rebound-up motion-delay-50">
          AI Automation & Software Dev
        </h2>
        <h3 className="text-zinc-600 font-light text-base motion-preset-rebound-up motion-delay-100">
          Currently building Logit!
        </h3>
      </div>
    </section>
  );
}
