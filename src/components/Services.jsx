import svc1 from "../assets/service1.png";
import svc2 from "../assets/service2.png";
import svc3 from "../assets/service3.png";

function ServiceCard({ img, title, desc }) {
  return (
    <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
      <div className="w-20 h-20 rounded-lg bg-gray-100 flex items-center justify-center">
        <img src={img} alt={title} className="w-12 h-12 object-contain" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-12">
      <h2 className="text-2xl font-bold text-center">Popular Services</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          img={svc1}
          title="Tailoring & Stitching"
          desc="Local tailors, custom fittings, quick turnaround."
        />
        <ServiceCard
          img={svc2}
          title="Home Repairs"
          desc="Electricians, plumbers and AC repair professionals."
        />
        <ServiceCard
          img={svc3}
          title="Coaching & Tuition"
          desc="Experienced tutors for school and competitive exams."
        />
      </div>
    </section>
  );
}
