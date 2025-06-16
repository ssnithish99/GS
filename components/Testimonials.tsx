import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, TechStart",
      content: "GS Group transformed our startup idea into a market-ready product. Their strategic approach and technical expertise exceeded our expectations and accelerated our growth.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      title: "Founder, InnovateLab",
      content: "Working with GS Group has been transformative. Their growth strategies and technical solutions helped us scale from concept to 10x revenue in just 18 months.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Emily Rodriguez",
      title: "CTO, NextGen Solutions",
      content: "The team's innovative approach and deep technical knowledge made our complex digital transformation achievable. They're true partners in success.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    },
  ];

  const clientLogos = [
    { name: "TechStart", width: "w-24" },
    { name: "InnovateLab", width: "w-28" },
    { name: "NextGen", width: "w-26" },
    { name: "GrowthCo", width: "w-32" },
    { name: "ScaleTech", width: "w-24" },
    { name: "FutureApp", width: "w-28" },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by innovative startups and growing businesses worldwide, we deliver results that drive real impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl relative group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <Quote className="h-8 w-8 text-blue-600 mb-4 opacity-50" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                </div>
              </div>
              <div className="flex mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Trusted by Innovation Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className={`${logo.width} h-12 bg-gray-200 rounded flex items-center justify-center hover:opacity-100 transition-opacity duration-300`}
              >
                <span className="text-gray-600 font-semibold text-sm">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}