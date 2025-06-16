import { Rocket, Code, TrendingUp, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Services() {
  const services = [
    {
      icon: <Rocket className="h-12 w-12" />,
      title: "Product Development",
      description: "End-to-end product development from ideation to market launch, leveraging cutting-edge technology and user-centered design principles.",
      features: ["MVP Development", "User Experience Design", "Market Validation", "Scalable Architecture"],
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "Technology Solutions",
      description: "Custom software development and digital transformation services that modernize operations and accelerate business growth.",
      features: ["Web Applications", "Mobile Development", "Cloud Solutions", "API Integration"],
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Growth Strategy",
      description: "Strategic consulting and growth hacking services to scale your business, optimize operations, and maximize market impact.",
      features: ["Market Analysis", "Growth Planning", "Performance Optimization", "Digital Marketing"],
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Quality Assurance",
      description: "Comprehensive testing and quality assurance processes to ensure your products meet the highest standards of performance and reliability.",
      features: ["Automated Testing", "Security Audits", "Performance Testing", "Continuous Monitoring"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to transform your ideas into successful products 
            with innovation, efficiency, and measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team of experts is ready to discuss your vision and provide 
              customized solutions that drive growth and exceed your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Get Started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}