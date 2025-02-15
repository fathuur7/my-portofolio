import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Github, 
  Instagram, 
  Mail, 
  Copy, 
  Check,
  Phone
} from 'lucide-react';

export default function Footer() {
  const [showCopied, setShowCopied] = useState(false);
  const [text, setText] = useState('');
  const fullText = "Let's Create Something Amazing!";
  const email = 'kopisusu8ip@gmail.com';

  // Social links data
  const socialLinks = [
    { icon: Github, link: 'https://github.com/fathuur7/fathuur7', label: 'GitHub' },
    { icon: Instagram, link: 'https://instagram.com/fatur_.ft', label: 'Instagram' },
    { icon: Send, link: 'https://t.me/@Yourboy8w?text=haiii', label: 'Telegram' },
  ];
  
  // Typing effect
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        currentIndex = 0;
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  const handlePhoneClick = () => {
    // Redirect to the phone number to wa
    window.location.href = 'https://wa.me/6285815245639';
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative py-24 overflow-hidden"
      id='contact'
    >
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500" />
      
      {/* Multiple Animated Blobs */}
      {[...Array(4)].map((_, i) => (
        <motion.div 
          key={i}
          className="absolute w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30 * (i + 1), 0],
            y: [0, 20 * (i + 1), 0],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}

      <div className="relative container mx-auto px-4 max-w-3xl text-center">
        {/* Main Heading */}
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl font-bold mb-6 text-white"
        >
          {text}<span className="animate-pulse">|</span>
        </motion.h2>
        
        {/* Description */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-100 mb-12"
        >
          Ready to turn ideas into reality? Let's collaborate and build something extraordinary together.
        </motion.p>

        {/* Social Links Grid */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <social.icon className="w-5 h-5 text-white" />
              <span className="text-white font-medium">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a 
            href={`mailto:${email}`}
            className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-100 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-5 h-5" />
            Send Email
          </motion.a>

          <motion.button
            onClick={handleCopyEmail}
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showCopied ? (
              <Check className="w-5 h-5" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
            {showCopied ? 'Copied!' : 'Copy Email'}
          </motion.button>
        </motion.div>

        {/* Additional Contact Info */}
        <motion.div 
          className="flex justify-center gap-8 text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className='cursor-pointer'
             onClick={handlePhoneClick}>62+ 8581 5245 639</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>{email}</span>
          </div>
        </motion.div>

        {/* Copy Notification */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: showCopied ? 1 : 0, y: showCopied ? 0 : 10 }}
          className="mt-4 py-2 px-4 bg-white/10 text-white rounded-lg"
        >
          Email address copied to clipboard!
        </motion.div>
      </div>
   
    </motion.section>
  );
}