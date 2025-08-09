import { GraduationCap, BookOpen, School } from "lucide-react";

const qualifications = [
  {
    icon: <GraduationCap className="h-8 w-8 text-purple-400" />,
    title: "B.Tech in Computer Engineering",
    institute: "R. C. Patel Institute of Technology, Shirpur",
    year: "2023 - 2027",
    percentage: "8.72",
    description:
      "Currently pursuing with a strong focus on Web Development, Data Structures, and the MERN Stack.",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-blue-400" />,
    title: "HSC - Science",
    institute: "R. C. Patel Junior College, Shirpur",
    year: "2021 - 2023",
    percentage: "87%",
    description:
      "Completed with emphasis on Physics, Chemistry, and Mathematics. Achieved excellent grades in CET.",
  },
  {
    icon: <School className="h-8 w-8 text-green-400" />,
    title: "SSC",
    institute: "R. C. Patel Secondary School, Shirpur",
    year: "2021",
    percentage: "95.40%",
    description:
      "Strong academic foundation with interest in logical thinking and problem solving.",
  },
];

const Qualification = () => {
  return (
    <section
      id="qualification"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6"
    >
      <h2 className="text-4xl font-bold text-center text-purple-400 mb-12 flex items-center justify-center gap-2">
        🎓 Qualifications
      </h2>

      <div className="flex justify-center">
        <div className="space-y-10 w-full max-w-3xl">
          {qualifications.map((q, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-purple-500/10 transition duration-300"
            >
              <div className="shrink-0">{q.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-purple-300">{q.title}</h3>
                <p className="text-gray-400">
                  {q.institute} • <span className="text-white">{q.year}</span>
                </p>
                <p className="text-sm text-blue-300 mt-1">
                  📊 Percentage: <span className="font-medium text-white">{q.percentage}</span>
                </p>
                <p className="mt-2 text-gray-300">{q.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;

