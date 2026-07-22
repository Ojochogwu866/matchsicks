const WAITLIST_EMAIL = "dicksonojochogwu@gmail.com";

const differentiators = [
  {
    title: "Uploads that survive bad networks",
    body: "Resumable by default — an upload interrupted on a flaky mobile connection resumes instead of failing silently.",
  },
  {
    title: "WhatsApp and email, not just an API",
    body: "Forward a product photo on WhatsApp or send it by email — no dashboard required to get images into your account.",
  },
  {
    title: "Billed in naira, prepaid",
    body: "Top up with Paystack or Flutterwave. No USD-billable card required to get started.",
  },
  {
    title: "Data-cost aware delivery",
    body: "Optimized for what mobile data actually costs your customers, not just for raw speed.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 py-24 sm:px-8">
        <p className="text-sm font-medium tracking-wide text-orange-600 uppercase dark:text-orange-400">
          Coming soon
        </p>
        <h1 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight text-black sm:text-5xl dark:text-zinc-50">
          Image infrastructure built for Nigerian businesses
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Upload, transform, and deliver product images — designed around how
          Nigerian SMEs actually work, not a Cloudinary clone with the prices
          left unchanged.
        </p>

        <a
          href={`mailto:${WAITLIST_EMAIL}?subject=${encodeURIComponent(
            "Early access — matchsticks",
          )}`}
          className="mt-8 inline-flex h-12 w-fit items-center justify-center rounded-full bg-black px-6 text-base font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Join the waitlist
        </a>

        <dl className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item.title}>
              <dt className="font-medium text-black dark:text-zinc-50">
                {item.title}
              </dt>
              <dd className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {item.body}
              </dd>
            </div>
          ))}
        </dl>
      </main>
    </div>
  );
}
