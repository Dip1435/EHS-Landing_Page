// import Image from "next/image"

// export default function Team() {
//   const teamMembers = [
//     {
//       name: "Dr.B.N.Patel",
//       role: "MBBS.,DCM.,AFIH",
//       bio: "Specialized in occupational health with 15+ years of experience in industrial healthcare.",
//       image: "/placeholder.svg?height=300&width=300",
//     },
//     {
//       name: "Michael Chen",
//       role: "Environmental Safety Specialist",
//       bio: "Expert in workplace environmental assessments and safety protocol development.",
//       image: "/placeholder.svg?height=300&width=300",
//     },
//     {
//       name: "Dr. Rajiv Patel",
//       role: "Medical Director",
//       bio: "Board-certified physician with expertise in industrial medicine and employee wellness.",
//       image: "/placeholder.svg?height=300&width=300",
//     },
//     {
//       name: "Emma Rodriguez",
//       role: "Health & Safety Consultant",
//       bio: "Certified safety professional specializing in risk assessment and mitigation strategies.",
//       image: "/placeholder.svg?height=300&width=300",
//     },
//     {
//       name: "James Wilson",
//       role: "Operations Manager",
//       bio: "Oversees all on-site health checkup operations and team coordination.",
//       image: "/placeholder.svg?height=300&width=300",
//     },
//   ]

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Expert Team</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Meet our team of dedicated professionals committed to improving industrial health and safety.
//           </p>
//           <div className="h-1 w-20 bg-green-600 mx-auto mt-4"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="relative h-64 w-full">
//                 <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
//                 <p className="text-green-600 font-medium mb-3">{member.role}</p>
//                 <p className="text-gray-600">{member.bio}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
import Image from "next/image";

export default function Team() {
  const teamMembers = [
    {
      name: "Dr.B.N.Patel",
      degree: "MBBS, DCM, AFIH",
      role: "CEO",
      bio: "Ex. Assistant Director Industrial Safety and Health Govt. of Gujarat.",
      image: "/team/b.n.p.jpeg",
    },
    {
      name: "Dr.I.D.Makwana",
      degree: "MBBS, AFIH",
      role: "DIRECTOR",
      bio: "Ex. Certifying Surgeon, Industrial and Health Govt. Of Gujarat.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr.R.R.Parmar",
      degree: "MBBS, DPH",
      role: "Medical Director",
      bio: "Ex. Chief District Health Officer, Ahmedabad and Dahod.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mr.PUNIT PATEL",
      degree: "B.E.(BIOTECK), PDIS",
      role: "Fire & Safety Consultant",
      bio: "Ex. Executive Safety Officer, Torrent PHARMACEUTICAL.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mrs.JIGNESHA PATEL",
      degree: "B.PHARM",
      role: "Project Manager",
      bio: "Ex. Senior Tech Superwiser, ZYDUS PHARMACEUTICAL.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Expert Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our team of dedicated professionals committed to improving
            industrial health and safety.
          </p>
          <div className="h-1 w-20 bg-green-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {member.name}
                  <span className="text-sm text-gray-500 font-normal ml-2">
                    ({member.degree})
                  </span>
                </h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
