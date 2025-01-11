import React from 'react';

export default function Komentar() {
  return (
    <section id="future-project" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-2">Future Project</h2>
        <p className="text-xl text-gray-600 text-center mb-8">
          Give me some suggestions for the next project
        </p>
        <div className="flex justify-center">
          <form className="w-full max-w-md mx-auto space-y-4">
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

