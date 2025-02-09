const TechStack = () => {
  const categories = [
    {
      name: 'Frontend Architecture',
      icon: '💻',
      techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      color: 'bg-purple-100'
    },
    {
      name: 'Backend Systems',
      icon: '⚙️',
      techs: ['Node.js', 'Python', 'GraphQL', 'REST'],
      color: 'bg-blue-100'
    },
    {
      name: 'Data & DevOps',
      icon: '📊',
      techs: ['PostgreSQL', 'MongoDB', 'AWS', 'Docker'],
      color: 'bg-pink-100'
    },
    {
      name: 'Tooling',
      icon: '🛠️',
      techs: ['Git', 'Jest', 'Webpack', 'Figma'],
      color: 'bg-green-100'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Technical Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="relative group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className={`${category.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                <span className="text-2xl">{category.icon}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.name}
              </h3>
              
              <div className="space-y-3">
                {category.techs.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-purple-500 transition-all duration-500" 
                        style={{ width: `${Math.min(90 + techIndex * 5, 100)}%` }}
                      />
                    </div>
                    <span className="text-gray-700 font-medium whitespace-nowrap">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Continuously expanding my technical arsenal with modern tools and best practices.
            Current focus: Exploring AI integration and edge computing solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack