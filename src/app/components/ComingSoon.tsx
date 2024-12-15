// pages/index.js
import Head from 'next/head';

export default function ComingSoon() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Coming Soon | Vishwagyan</title>
        <meta name="description" content="Stay tuned! Vishwagyan is launching soon with content on technology, science, trading, stocks, and much more in Hindi and English." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Vishwagyan.com</h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8">
          Stay tuned! We&#39;re bringing the latest in <span className="text-blue-500">Technology</span>, <span className="text-green-400">Science</span>, <span className="text-yellow-400">Trading</span>, and <span className="text-purple-500">Stocks </span> 
 in both <span className="text-red-500">Hindi</span> and <span className="text-indigo-400">English</span>.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email to stay updated"
            className="px-4 py-2 rounded-md text-black w-full md:w-auto"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
            Notify Me
          </button>
        </div>

        <div className="mt-12">
          <p className="text-gray-400 text-sm">Follow us on social media:</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-blue-500 hover:text-blue-600">Facebook</a>
            <a href="#" className="text-indigo-400 hover:text-indigo-500">Twitter</a>
            <a href="#" className="text-pink-500 hover:text-pink-600">Instagram</a>
            <a href="#" className="text-green-400 hover:text-green-500">LinkedIn</a>
          </div>
        </div>
      </main>

      <footer className="mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} Vishwagyan. All rights reserved.
      </footer>
    </div>
  );
}
