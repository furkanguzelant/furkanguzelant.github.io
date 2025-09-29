import React from "react";
import { Github, Mail, ExternalLink, MapPin, GraduationCap, Linkedin, FileUser} from "lucide-react";
import profileImage from './assets/image.jpeg'; // Adjust the path as necessary
const publications = [
  {
    title: "Identity Preserving 3D Head Stylization with Multiview Score Distillation",
    authors: "Bahri Batuhan Bilecen, Ahmet Berke Gokmen, Furkan Guzelant, Aysegul Dundar",
    venue: "IEEE/CVF International Conference on Computer Vision (ICCV), 2025",
    link: "https://three-bee.github.io/head_stylization/",
    type: "conference",
    image: "/img/teaser.png", // Placeholder image URL
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar - Personal Info */}
          <div className="lg:col-span-4 xl:col-span-3 bg-gray-50 lg:bg-gray-50 rounded-lg lg:rounded-none p-6 lg:p-0">
            <div className="sticky top-8">
              {/* Profile Section */}
              <div className="mb-8 items-center text-center justify-center">
                <div className="w-48 h-48 rounded-full mx-auto mb-6 flex items-center text-center justify-center" style={{ backgroundColor: '#ccd1d4' }}>
                  <span className="text-6xl text-gray-400 flex items-center justify-center">
                    {/* profile picture */}
                    <img src={profileImage} alt="Furkan Güzelant" className="rounded-full object-cover" />
                  </span>
                </div>
                
                <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  Furkan Güzelant
                </h1>
                
                <p className="text-gray-600 text-center mb-4">
                  M.Sc. Student
                </p>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>Bilkent University</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Ankara, Turkey</span>
                  </div>
                </div>
              </div>

              {/* Contact Links */}
              <div className="flex gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="mailto:furkan.guzelant@bilkent.edu.tr"
                  className="flex items-center justify-center w-12 h-12 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                  title="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/furkanguzelant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/furkan-g%C3%BCzelant-38aa5a213/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://scholar.google.com/citations?user=YHEA1WcAAAAJ&hl=tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                  title="Google Scholar"
                >
                  <GraduationCap className="w-5 h-5" />
                </a>
                <a
                  href="/cv/Resume_Furkan_Guzelant.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                  title="Curriculum Vitae"
                >
                  <FileUser className="w-5 h-5" />
                </a>
              </div>

              {/* Research Interests */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Interests</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• 3D Generative Models</div>
                  <div>• Diffusion Models</div>
                  <div>• 3D Stylization</div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Education</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-gray-900">MSc Computer Science</div>
                    <div className="text-gray-600">Bilkent University, 2024-Present</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Erasmus Exchange</div>
                    <div className="text-gray-600">École Polytechnique Fédérale de Lausanne (EPFL), 2023</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">BSc Computer Science</div>
                    <div className="text-gray-600">Bilkent University, 2019-2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-8 xl:col-span-9">
            
            {/* Introduction */}
            <section className="mb-12">
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="text-2xl font-bold mb-6">
                  🙋‍♂️ About me
                </p>
                <p className="text-xl mb-4">
                  I'm Furkan, a Master's student at Bilkent University, focusing on 3D generation, diffusion models, and image stylization. 
                  I obtained my BSc degree at Bilkent University, 
                  where I work under the supervision of <a href="https://www.cs.bilkent.edu.tr/~adundar/" className="text-blue-600 hover:text-blue-800 no-underline hover:underline">Asst. Prof. Aysegul Dundar </a> 
                  at the <a href="https://dlr.bilkent.edu.tr/" className="text-blue-600 hover:text-blue-800 no-underline hover:underline">Generative Deep Learning Research Lab</a>.
                </p>
              </div>
            </section>

                      {/* Publications Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                📚 Publications
              </h2>
              
              <div className="space-y-8">
                {publications.map((pub, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    {/* Publication Image */}
                    <div className="flex-shrink-0 self-start">
                      <div className="w-full sm:w-65 h-54 sm:h-44 bg-gray-100 rounded-lg overflow-hidden border mx-auto sm:mx-0 max-w-xs sm:max-w-none">
                        <img 
                          src={pub.image} 
                          alt={`${pub.title} preview`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center hidden">
                          <span className="text-gray-400 text-xs text-center px-2">Paper<br/>Image</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Publication Content */}
                    <div className="flex gap-4 flex-1 min-w-0">
                      <div className="text-2xl text-gray-400 mt-1 flex-shrink-0 hidden sm:block">-</div>
                      <div className="flex-1 min-w-0">
                        <div className="sm:hidden text-2xl text-gray-400 mb-2">-</div>
                        <a
                          href={pub.link}
                          className="text-lg sm:text-xl font-medium text-blue-600 hover:text-blue-800 hover:underline block mb-2 leading-tight"
                        >
                          {pub.title}
                        </a>
                        <p className="text-gray-700 mb-1 text-base sm:text-lg">{pub.authors}</p>
                        <p className="text-gray-600 italic text-sm sm:text-base">{pub.venue}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* News Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                🔥 News
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-2xl text-gray-400 mt-1">-</div>
                  <div className="flex-1">
                    <p className="text-gray-700">
                      <span className="font-medium text-gray-900">[2025.06]</span> Our paper on 3D head stylization got accepted to ICCV 2025!
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="text-2xl text-gray-400 mt-1">-</div>
                  <div className="flex-1">
                    <p className="text-gray-700">
                      <span className="font-medium text-gray-900">[2024.09]</span> Started my research at Bilkent University.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}