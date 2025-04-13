import Image from "next/image"

export default function TopClients() {
  const clients = [
    { name: "Dial Ninja", logo: "/clients/accumax.png" },
    { name: "GoMow", logo: "/clients/asahi.png" },
    { name: "HomeCupid", logo: "/clients/logo-pharama.png" },
    { name: "Town of Fairview", logo: "/clients/asian.png" },
    { name: "YATR", logo: "/clients/dudhsagar.png" },
    { name: "Safari Vet", logo: "/clients/navpad.png" },
    { name: "Timeburst", logo: "/clients/pulluicid.jpg" },
    { name: "SaveIn", logo: "/clients/Mangalam-Alloys-Logo.jpg" },
    { name: "Fitsyn CRM", logo: "/clients/gujarat pestiside.jpg" },
    { name: "Helping with Flags", logo: "/clients/jovial.png" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Esteemed Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by leading organizations across industries for on-site health checkups and wellness programs.
          </p>
          <div className="h-1 w-20 bg-green-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center h-24">
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
