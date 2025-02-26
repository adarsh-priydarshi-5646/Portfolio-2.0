import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Tag, ChevronRight, Search, Mail, Brain, Code, Server, Database } from 'lucide-react';

const blogPosts = [
  {
    title: 'Mastering DSA Patterns for Competitive Programming',
    excerpt: 'Learn the most common patterns in Data Structures and Algorithms to ace your coding interviews.',
    tags: ['DSA', 'Competitive Programming', 'Algorithms'],
    readTime: '8 min',
    date: 'March 1, 2024',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800',
    icon: Code,
  },
  {
    title: 'AI in Modern Web Development',
    excerpt: 'Exploring how artificial intelligence is transforming the landscape of web development.',
    tags: ['AI', 'Web Development', 'Technology'],
    readTime: '6 min',
    date: 'February 28, 2024',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    icon: Brain,
  },
  {
    title: 'Understanding the TCP Handshake',
    excerpt: 'A deep dive into how TCP establishes connections and its role in web servers.',
    tags: ['Networking', 'Web Servers', 'Backend'],
    readTime: '10 min',
    date: 'February 25, 2024',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    icon: Server,
  },
  {
    title: 'The Future of Database Technologies',
    excerpt: 'Exploring emerging trends in database management and distributed systems.',
    tags: ['Databases', 'Cloud', 'Technology'],
    readTime: '7 min',
    date: 'February 22, 2024',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800',
    icon: Database,
  },
  {
    title: 'Machine Learning for Beginners',
    excerpt: 'A comprehensive guide to getting started with machine learning concepts.',
    tags: ['ML', 'AI', 'Programming'],
    readTime: '12 min',
    date: 'February 20, 2024',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800',
    icon: Brain,
  },
  {
    title: 'Modern Web Architecture',
    excerpt: 'Understanding microservices, serverless, and modern web architectures.',
    tags: ['Architecture', 'Web Development', 'Cloud'],
    readTime: '9 min',
    date: 'February 18, 2024',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    icon: Server,
  },
];

const BlogCard = ({ post, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform-gpu"
  >
    <motion.div
      className="relative overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
      />
      <motion.div
        className="absolute top-4 right-4 p-2 bg-blue-600/90 backdrop-blur-sm rounded-full text-white"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <post.icon size={20} />
      </motion.div>
    </motion.div>

    <div className="p-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-2 mb-3"
      >
        {post.tags.map((tag, index) => (
          <motion.span
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
          >
            <Tag size={14} className="inline mr-1" />
            {tag}
          </motion.span>
        ))}
      </motion.div>

      <motion.h3
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        {post.title}
      </motion.h3>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-600 dark:text-gray-300 mb-4"
      >
        {post.excerpt}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center justify-between"
      >
        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
          <Clock size={16} className="mr-1" />
          {post.readTime} read
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
      </motion.div>

      <motion.button
        whileHover={{ x: 10 }}
        className="mt-4 text-blue-600 dark:text-blue-400 font-medium flex items-center group"
      >
        Read More
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <ChevronRight size={16} className="ml-1" />
        </motion.span>
      </motion.button>
    </div>
  </motion.article>
);

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const allTags = ['All', ...new Set(blogPosts.flatMap(post => post.tags))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Latest Blog Posts
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full mb-8"
          />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-2 overflow-x-auto pb-2"
          >
            {allTags.map((tag, index) => (
              <motion.button
                key={tag}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  selectedTag === tag
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                }`}
              >
                {tag}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPosts.map((post, index) => (
              <BlogCard key={index} post={post} index={index} />
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-lg p-8 text-center shadow-lg"
        >
          <motion.h3
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Subscribe to My Newsletter
          </motion.h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Get the latest articles on AI, ML, and web development delivered to your inbox.
          </p>
          <div className="flex max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 rounded-l-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-lg"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;