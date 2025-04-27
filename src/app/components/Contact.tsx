'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
    // Add your email sending logic here
    alert('Form submitted successfully! 🎉');
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Get in Touch</h3>
            <p className="text-gray-600 dark:text-white mb-4">
              I’m always open to new opportunities, collaborations, or just a chat! Feel free to reach out.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600 dark:text-white">
                <span className="mr-3">📧</span>
                <a href="mailto:your-email@example.com" className="hover:text-blue-500">your-email@example.com</a>
              </li>
              <li className="flex items-center text-gray-600 dark:text-white">
                <span className="mr-3">🌍</span>
                <a href="https://www.yourwebsite.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                  www.yourwebsite.com
                </a>
              </li>
              <li className="flex items-center text-gray-600 dark:text-white">
                <span className="mr-3">📱</span>
                <span>+1234567890</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-white">Name</label>
                <input
                  type="text"
                  {...register('name')}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-white"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-white">Email</label>
                <input
                  type="email"
                  {...register('email')}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-white"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-white">Message</label>
                <textarea
                  {...register('message')}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-white"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
