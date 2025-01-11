import { Send } from 'lucide-react'

export const Footer = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 max-w-xl text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-indigo-100 mb-12">
                Interested in collaborating or have a project in mind? I'm always open to exciting opportunities.
            </p>
            <a 
                href="mailto:kopisusu8ip@gmail.com" 
                className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold inline-flex items-center gap-3"
            >
                <Send className="w-6 h-6" /> Send me an Email
            </a>
        </div>
    </section>
  )
}
