import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-5">
      <motion.h1 
        className="text-4xl font-bold" 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Hello, Welcome to Our Server!
      </motion.h1>
      
      <p className="mt-4 text-lg text-gray-300 text-center">
        Why join? Best anti-cheat, fast updates, free & premium!
      </p>

      <motion.a 
        href="https://discord.gg/Z83uVRtz" 
        className="mt-6 bg-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
        whileHover={{ scale: 1.1 }}
      >
        Join Our Discord
      </motion.a>
    </div>
  );
}
