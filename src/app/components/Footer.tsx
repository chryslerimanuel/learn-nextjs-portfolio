export default function Footer() {
    return (
      <footer className="bg-white dark:bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Chrysler Imanuel™. All Rights Reserved.
          </p>
          <div className="mt-4">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 dark:text-yellow-200 hover:text-blue-500 mx-2"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 dark:text-yellow-200 hover:text-blue-500 mx-2"
            >
              GitHub
            </a>
            <a
              href="mailto:your-email@example.com"
              className="text-blue-400 dark:text-yellow-200 hover:text-blue-500 mx-2"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    );
  }
  