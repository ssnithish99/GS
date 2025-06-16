import { Cog, Users, Award, Zap } from 'lucide-react';

export default function About() {
  const processSteps = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Strategy & Planning",
      description: "We collaborate with you to understand your vision and create strategic roadmaps that align with market opportunities.",
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Development",
      description: "Our agile development approach allows for rapid iteration and testing to build scalable, market-ready solutions.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Implementation",
      description: "Expert execution with cutting-edge technology and best practices to bring your vision to life efficiently.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Growth & Scale",
      description: "Continuous optimization and scaling strategies to ensure sustainable growth and long-term success.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">GS Group</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're a forward-thinking startup dedicated to transforming innovative ideas into 
            impactful solutions that drive business growth and create lasting value in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Innovation Meets Execution
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our commitment to innovation, agility, and results has made us a trusted partner 
              for businesses ready to embrace the future. We combine strategic thinking with 
              cutting-edge technology to deliver solutions that scale.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From concept to market launch, we guide you through every step of the journey, 
              ensuring your vision becomes a reality that exceeds expectations and drives measurable impact.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-1">Agile</div>
                <div className="text-gray-600">Methodology</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern startup workspace"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Innovation Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}