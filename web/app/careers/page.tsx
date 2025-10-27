import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0a1420] text-white pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of an innovative team that's shaping the future of technology. Explore exciting career opportunities with us.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">Why Work With Us?</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Competitive Benefits</h3>
                      <p className="text-gray-300">Health insurance, retirement plans, and flexible work arrangements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
                      <p className="text-gray-300">Continuous learning, mentorship programs, and career advancement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Innovative Projects</h3>
                      <p className="text-gray-300">Work on cutting-edge technologies and challenging problems</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
                      <p className="text-gray-300">Supportive team environment that values diversity and inclusion</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">Open Positions</h2>
                <div className="space-y-6">
                  <div className="border border-gray-600/50 rounded-lg p-6 hover:border-cyan-400/50 transition-colors">
                    <h3 className="text-xl font-semibold mb-2">Senior Full Stack Developer</h3>
                    <p className="text-gray-300 mb-3">Remote • Full-time</p>
                    <p className="text-sm text-gray-400 mb-4">React, Node.js, TypeScript, AWS</p>
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium">Apply Now →</button>
                  </div>
                  <div className="border border-gray-600/50 rounded-lg p-6 hover:border-cyan-400/50 transition-colors">
                    <h3 className="text-xl font-semibold mb-2">DevOps Engineer</h3>
                    <p className="text-gray-300 mb-3">Hybrid • Full-time</p>
                    <p className="text-sm text-gray-400 mb-4">Docker, Kubernetes, AWS, Terraform</p>
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium">Apply Now →</button>
                  </div>
                  <div className="border border-gray-600/50 rounded-lg p-6 hover:border-cyan-400/50 transition-colors">
                    <h3 className="text-xl font-semibold mb-2">UI/UX Designer</h3>
                    <p className="text-gray-300 mb-3">Remote • Full-time</p>
                    <p className="text-sm text-gray-400 mb-4">Figma, Adobe Creative Suite, User Research</p>
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium">Apply Now →</button>
                  </div>
                  <div className="border border-gray-600/50 rounded-lg p-6 hover:border-cyan-400/50 transition-colors">
                    <h3 className="text-xl font-semibold mb-2">Data Scientist</h3>
                    <p className="text-gray-300 mb-3">On-site • Full-time</p>
                    <p className="text-sm text-gray-400 mb-4">Python, Machine Learning, SQL, Statistics</p>
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium">Apply Now →</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-600/50 mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
                  <p className="text-gray-300 text-sm">Team-first approach</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-300 text-sm">Creative problem solving</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Learning</h3>
                  <p className="text-gray-300 text-sm">Continuous growth</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Passion</h3>
                  <p className="text-gray-300 text-sm">Love what you do</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Don't See Your Role?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let's start a conversation.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              Send Your Resume
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
