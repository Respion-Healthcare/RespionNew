import Image from "next/image"

export default function AuthorizedPartners() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Respion",
    description:
      "Authorized ResMed partner providing ResMed CPAP, BiPAP, masks and sleep therapy equipment.",
    partner: {
      "@type": "Organization",
      name: "ResMed",
    },
  }

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f3fcff] via-white to-[#eef9ff]" />

      {/* Decorative Glow */}
      <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-[100px]" />

      <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-sky-300/20 blur-[110px]" />

      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-xs font-semibold text-cyan-700 shadow-sm backdrop-blur-md sm:text-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100">
              ✓
            </span>

            Authorized ResMed Partner
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Trusted Care with{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-[#0391B6] to-sky-600 bg-clip-text text-transparent">
              ResMed
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base lg:text-lg">
            Respion is an authorized ResMed partner providing genuine sleep and
            respiratory care solutions. Explore trusted ResMed technology for
            CPAP, BiPAP, masks and advanced sleep therapy.
          </p>
        </div>

        {/* ================= MAIN CARD ================= */}
        <div className="mx-auto mt-12 max-w-5xl sm:mt-16">

          <div
            className="
              group relative overflow-hidden rounded-[2rem]
              border border-cyan-100
              bg-white/80
              shadow-[0_25px_80px_rgba(14,165,233,0.12)]
              backdrop-blur-xl
              transition-all duration-700
              hover:-translate-y-1
              hover:shadow-[0_35px_100px_rgba(14,165,233,0.18)]
            "
          >

            {/* Top Gradient Line */}
            <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-[#0391B6] to-sky-500" />

            {/* Card Glow */}
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl transition-all duration-700 group-hover:bg-cyan-300/20" />

            <div className="relative grid md:grid-cols-2">

              {/* ================= LEFT ================= */}
              <div className="flex items-center justify-center p-8 sm:p-12 lg:p-16">

                <div className="relative w-full max-w-sm">

                  {/* Logo Glow */}
                  <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-3xl" />

                  {/* Logo Container */}
                  <div
                    className="
                      relative flex aspect-[1.5/1]
                      items-center justify-center
                      rounded-3xl
                      border border-slate-100
                      bg-white
                      p-8
                      shadow-[0_15px_50px_rgba(15,23,42,0.08)]
                      transition-all duration-500
                      group-hover:scale-[1.02]
                    "
                  >
                    <Image
                      src="/images/Authorised partner/resmed.jpg"
                      alt="ResMed Authorized Partner"
                      width={300}
                      height={150}
                      className="max-h-28 w-auto object-contain sm:max-h-32"
                    />

                    {/* Verified Badge */}
                    <div className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-cyan-500 text-lg text-white shadow-lg">
                      ✓
                    </div>
                  </div>

                  <p className="relative mt-5 text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                    Official ResMed Partnership
                  </p>
                </div>
              </div>

              {/* ================= RIGHT ================= */}
              <div className="relative border-t border-cyan-100 bg-gradient-to-br from-cyan-50/80 via-white to-sky-50/70 p-8 sm:p-12 lg:p-16 md:border-l md:border-t-0">

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
                  ResMed Solutions
                </span>

                <h3 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Better Sleep.
                  <br />
                  Better Breathing.
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Discover clinically trusted ResMed technology designed to
                  support comfortable sleep and effective respiratory therapy.
                </p>

                {/* Features */}
                <div className="mt-7 grid grid-cols-2 gap-3">

                  {[
                    "CPAP Machines",
                    "BiPAP Machines",
                    "Sleep Masks",
                    "Sleep Therapy",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        flex items-center gap-2
                        rounded-xl
                        border border-cyan-100
                        bg-white/80
                        px-3 py-3
                        text-xs font-semibold
                        text-slate-700
                        shadow-sm
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-cyan-200
                        hover:text-cyan-600
                      "
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-[10px] font-bold text-cyan-600">
                        ✓
                      </span>

                      {item}
                    </div>
                  ))}
                </div>

                {/* Bottom Trust */}
                <div className="mt-8 flex items-center gap-3 border-t border-cyan-100 pt-6">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                    ✓
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Genuine ResMed Products
                    </p>

                    <p className="text-xs text-slate-500">
                      Manufacturer-backed support & warranty
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM TRUST ================= */}
        <div className="mx-auto mt-10 max-w-4xl sm:mt-14">

          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-cyan-100 bg-white/70 px-5 py-5 text-center shadow-sm backdrop-blur-md sm:flex-row sm:px-8">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-sky-500 text-white shadow-md">
              ✓
            </div>

            <p className="text-xs leading-6 text-slate-600 sm:text-sm">
              <span className="font-bold text-slate-800">
                Trusted ResMed Solutions
              </span>{" "}
              — Genuine sleep and respiratory care equipment backed by expert
              assistance.
            </p>

          </div>
        </div>

      </div>
    </section>
  )
}