
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'dark' : ''}>
      <Head>
        <title>Dorothy Uji | Portfolio</title>
      </Head>
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-2xl font-bold">Dorothy Uji</h1>
          <button onClick={() => setDark(!dark)} className="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded">
            {dark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Hi, I’m Dorothy 👋</h2>
          <p className="text-xl mb-6">A technical writer, WordPress specialist, and virtual assistant.</p>
          <div className="space-x-4">
            <a href="/Dorothy_Uji_CV.pdf" className="bg-green-600 text-white px-4 py-2 rounded">Download Resume</a>
            <a href="#contact" className="border border-green-600 text-green-600 px-4 py-2 rounded">Contact Me</a>
          </div>
        </section>
        <section id="projects" className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map(num => (
              <div key={num} className="border p-4 rounded shadow dark:bg-gray-800">
                <h4 className="font-bold text-lg">Project {num}</h4>
                <p className="text-sm mt-2">Placeholder for a WordPress or writing project.</p>
                <a href="#" className="text-blue-400 underline mt-2 inline-block">View Live</a>
              </div>
            ))}
          </div>
        </section>
        <section id="contact">
          <h3 className="text-2xl font-semibold mb-4">Contact Me</h3>
          <div className="mb-4 text-sm space-y-2">
            <p><strong>Address:</strong> 2 Anyebe Uji Avenue, Karu Site, Abuja, Nigeria</p>
            <p><strong>Email:</strong> <a href="mailto:goodnessuji@gmail.com" className="text-blue-400">goodnessuji@gmail.com</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/dorothy-uji-b9b188220/" className="text-blue-400">linkedin.com/in/dorothy-uji</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/Dorkness" className="text-blue-400">github.com/Dorkness</a></p>
          </div>
          <form action="https://formspree.io/f/mexample" method="POST" className="space-y-4 max-w-lg">
            <input name="name" placeholder="Your Name" required className="w-full p-2 border rounded" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 border rounded" />
            <textarea name="message" placeholder="Your Message" required className="w-full p-2 border rounded"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
          </form>
        </section>
        <footer className="mt-12 text-sm text-center">
          &copy; {new Date().getFullYear()} Dorothy Uji. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
