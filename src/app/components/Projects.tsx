export default function Projects() {
    return (
        <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg dark:shadow-yellow-200 hover:shadow-xl dark:hover:shadow-yellow-200 transition">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Project 1</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A brief description of the project goes here. This can be your personal web app or anything you want to show off.
              </p>
              <a href="#" className="text-blue-500 dark:text-yellow-200 hover:underline">View Project</a>
            </div>
            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg dark:shadow-yellow-200 hover:shadow-xl dark:hover:shadow-yellow-200 transition">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Project 2</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A brief description of another project. Showcase your skills and give a little info on what you did.
              </p>
              <a href="#" className="text-blue-500 dark:text-yellow-200 hover:underline">View Project</a>
            </div>
            {/* Project 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg dark:shadow-yellow-200 hover:shadow-xl dark:hover:shadow-yellow-200 transition">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Project 3</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Describe another project here. Show your abilities with real-world examples.
              </p>
              <a href="#" className="text-blue-500 dark:text-yellow-200 hover:underline">View Project</a>
            </div>
          </div>
        </div>
      </section>
    )
}
