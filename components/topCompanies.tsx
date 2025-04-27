import Image from "next/image";

export default function TopClients() {
  const clients = [
    {
      name: "Dial Ninja",
      logo: "/clients/accumax.png",
    },
    { name: "GoMow", logo: "/clients/Schutz.jpeg" },
    { name: "HomeCupid", logo: "/clients/logo-pharama.png" },
    { name: "HomeCupid", logo: "/clients/gopal.png" },
    { name: "HomeCupid", logo: "/clients/techno.webp" },
    { name: "Town of Fairview", logo: "/clients/asian.png" },
    { name: "Town of Fairview", logo: "/clients/horizon.png" },
    { name: "Town of Fairview", logo: "/clients/chamak.png" },
    { name: "Town of Fairview", logo: "/clients/zircar.webp" },
    { name: "YATR", logo: "/clients/dudhsagar.png" },
    { name: "YATR", logo: "/clients/naxcuure.jpeg" },
    { name: "YATR", logo: "/clients/duke.png" },
    { name: "YATR", logo: "/clients/ihsedu.jpg" },
    { name: "YATR", logo: "/clients/pramukh.webp" },
    { name: "YATR", logo: "/clients/kadamb.jpeg" },
    { name: "Safari Vet", logo: "/clients/navpad.png" },
    { name: "Safari Vet", logo: "/clients/jds.png" },
    { name: "Timeburst", logo: "/clients/pulluicid.jpg" },
    { name: "Timeburst", logo: "/clients/hilton.jpg" },
    { name: "Timeburst", logo: "/clients/thermosag.jpeg" },
    { name: "Timeburst", logo: "/clients/reflex.png" },
    { name: "SaveIn", logo: "/clients/Mangalam-Alloys-Logo.jpg" },
    { name: "Fitsyn CRM", logo: "/clients/gujarat pestiside.jpg" },
    { name: "Helping with Flags", logo: "/clients/jovial.png" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Esteemed Clients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by leading organizations across industries for on-site
            health checkups and wellness programs.
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
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
