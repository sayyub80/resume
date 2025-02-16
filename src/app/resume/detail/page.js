'use client'

const ViewResume = () => {
  const resumeUrl = '/resume.pdf'; // Same as in Resume component

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe 
          src={resumeUrl}
          className="w-full h-[90vh] border-none"
          title="Resume Full Screen"
        />
      </div>
    </div>
  );
};

export default ViewResume;