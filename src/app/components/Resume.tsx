export default function Resume() {
    return (
      <section id="resume" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            My Resume
          </h2>
  
          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Skills</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <li className="bg-blue-100 dark:bg-gray-900 text-blue-700 dark:text-yellow-300 px-4 py-2 rounded-full text-center">Next.js</li>
              <li className="bg-blue-100 dark:bg-gray-900 text-blue-700 dark:text-yellow-300 px-4 py-2 rounded-full text-center">React</li>
              <li className="bg-blue-100 dark:bg-gray-900 text-blue-700 dark:text-yellow-300 px-4 py-2 rounded-full text-center">Node.js</li>
              <li className="bg-blue-100 dark:bg-gray-900 text-blue-700 dark:text-yellow-300 px-4 py-2 rounded-full text-center">Tailwind CSS</li>
              <li className="bg-blue-100 dark:bg-gray-900 text-blue-700 dark:text-yellow-300 px-4 py-2 rounded-full text-center">JavaScript</li>
              <li className="bg-blue-100 dark:bg-gray-900 text-blue-700 dark:text-yellow-300 px-4 py-2 rounded-full text-center">TypeScript</li>
              <li className="bg-blue-100 dark:bg-gray-900 text-blue-700 dark:text-yellow-300 px-4 py-2 rounded-full text-center">Git</li>
              <li className="bg-blue-100 dark:bg-gray-900 text-blue-700 dark:text-yellow-300 px-4 py-2 rounded-full text-center">SQL</li>
            </ul>
          </div>
  
          {/* Experience */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Experience</h3>
            <div className="space-y-6">
              {/* Job 1 */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Frontend Developer | ABC Corp</h4>
                <p className="text-gray-600 dark:text-white">Jan 2023 - Present</p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-white">
                  <li>Developed responsive web applications using Next.js and React.</li>
                  <li>Collaborated with design team to implement UI/UX best practices.</li>
                  <li>Implemented state management using Redux and Context API.</li>
                </ul>
              </div>
              {/* Job 2 */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Backend Developer | XYZ Ltd</h4>
                <p className="text-gray-600 dark:text-white">May 2021 - Dec 2022</p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-white">
                  <li>Built RESTful APIs with Node.js and Express.js.</li>
                  <li>Integrated third-party APIs and improved system performance.</li>
                  <li>Worked with MongoDB for database management.</li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Education</h3>
            <div className="space-y-6">
              {/* Degree */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Bachelor of Computer Science</h4>
                <p className="text-gray-600 dark:text-white">University of Technology | 2017 - 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  