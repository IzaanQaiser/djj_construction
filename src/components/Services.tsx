import React from 'react';
import { Home, Building2, Warehouse, PaintBucket, Hammer, Ruler, Truck, Leaf, Shield } from 'lucide-react';

const services = [
  { name: 'Residential Construction', icon: Home },
  { name: 'Commercial Construction', icon: Building2 },
  { name: 'Renovations', icon: Hammer },
  { name: 'Interior Design', icon: PaintBucket },
  { name: 'Project Management', icon: Ruler },
  { name: 'Industrial Construction', icon: Warehouse },
  { name: 'Sustainable Building', icon: Leaf },
  { name: 'Safety Consulting', icon: Shield },
  { name: 'Equipment Rental', icon: Truck },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <service.icon className="h-8 w-8 text-secondary mr-4" />
              <span className="text-lg font-semibold text-primary">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;