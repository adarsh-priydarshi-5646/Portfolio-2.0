import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Activity } from 'lucide-react';

const RoboAssistant = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-24 left-6 z-50"
    >
      <div className="relative">
        {/* Robot Body */}
        <motion.div
          className="w-16 h-20 bg-gradient-to-b from-blue-500 to-blue-600 rounded-xl shadow-lg relative"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Robot Face */}
          <motion.div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-gray-800 rounded-lg">
            {/* Eyes */}
            <motion.div
              className="absolute top-1 left-1 w-2 h-2 bg-blue-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute top-1 right-1 w-2 h-2 bg-blue-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.5,
              }}
            />
          </motion.div>

          {/* Robot Antenna */}
          <motion.div
            className="absolute -top-3 left-1/2 transform -translate-x-1/2"
            animate={{
              rotateZ: [-5, 5, -5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          >
            <Zap size={12} className="text-yellow-400" />
          </motion.div>

          {/* Processing Indicators */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            <motion.div
              className="w-1.5 h-1.5 bg-blue-300 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: 0,
              }}
            />
            <motion.div
              className="w-1.5 h-1.5 bg-blue-300 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: 0.2,
              }}
            />
            <motion.div
              className="w-1.5 h-1.5 bg-blue-300 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: 0.4,
              }}
            />
          </div>
        </motion.div>

        {/* Working Effect */}
        <motion.div
          className="absolute -top-4 -right-4"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Cpu size={16} className="text-blue-400" />
        </motion.div>

        {/* Activity Indicator */}
        <motion.div
          className="absolute -bottom-2 -right-2"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Activity size={14} className="text-green-400" />
        </motion.div>

        {/* Processing Circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-xl border-2 border-blue-400/30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default RoboAssistant;
