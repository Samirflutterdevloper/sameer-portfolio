import React from 'react';
import { Mail, Github, Phone } from 'lucide-react';

const projects = [
  {
    title: 'Daily Darshan',
    description: 'Spiritual app using Flutter, Firebase Auth, and Firestore.',
    tech: ['Flutter', 'Firebase', 'Firestore'],
  },
  {
    title: 'Smart Parking',
    description: 'Parking management solution using Flutter and REST APIs.',
    tech: ['Flutter', 'REST API'],
  },
  {
    title: 'Wokaa',
    description: 'UI design for a Web3 wallet connection app.',
    tech: ['Figma', 'Web3'],
  },
  {
    title: 'BlueDip',
    description: 'Food ordering app built in Flutter.',
    tech: ['Flutter'],
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 font-sans p-4 md:p-10">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Sameer Hariyani</h1>
        <p className="text-lg text-gray-600">Flutter Developer | UI/UX Designer | Firebase Expert</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 max-w-2xl">
          I'm a detail-oriented Flutter developer with 2+ years of experience in building scalable,
          user-friendly mobile applications. I specialize in Flutter & Dart, RESTful API integration,
          Firebase, Web3 wallets, and clean UI/UX design. Currently pursuing my Master's in Computer Applications.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-1">{project.title}</h3>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3 text-sm text-white">
          {['Flutter', 'Dart', 'Firebase', 'REST API', 'Git', 'GetX', 'Provider', 'Clean Architecture', 'UI Design'].map((skill) => (
            <span key={skill} className="bg-gray-800 px-3 py-1 rounded-full">{skill}</span>
          ))}
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Resume</h2>
      <a
  href="/Sameer_Hariyani_Resume.pdf"
  download
  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
>
  Download Resume
</a>

      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <div className="flex flex-col gap-3">
          <a href="mailto:samirhariyani9080@gmail.com" className="flex items-center gap-2 text-blue-700">
            <Mail size={18} /> samirhariyani9080@gmail.com
          </a>
          <a href="tel:+919106577045" className="flex items-center gap-2 text-blue-700">
            <Phone size={18} /> +91 91065 77045
          </a>
          <a href="https://github.com/samirflutterdevloper" className="flex items-center gap-2 text-blue-700">
            <Github size={18} /> github.com/samirflutterdevloper
          </a>
        </div>
      </section>
    </main>
  );
}
