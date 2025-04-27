export default function Hero() {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Hello, I&apos;m <span className="text-blue-500 dark:text-yellow-200">Your Name</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-6">
            I&apos;m a passionate developer specializing in Next.js and web technologies.
          </p>
          <a
            href="#projects"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
          >
            View My Projects
          </a>
        </div>
      </section>
    );
  }
  