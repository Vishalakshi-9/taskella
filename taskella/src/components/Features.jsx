import { motion } from 'framer-motion';
import { FaLeaf, FaTasks, FaRegHeart, FaCalendarCheck } from 'react-icons/fa';

const features = [
  { icon: <FaTasks size={28} />, title: 'Task & Subtask Management', desc: 'Add tasks, subtasks, priorities, and due dates with a blush-pink modal.', color: 'bg-[#FFEDC2]' },
  { icon: <FaLeaf size={28} />, title: 'Kanban Garden', desc: 'Move tasks from 🌱 Seeds to 🌸 Blooms on a floral Kanban board.', color: 'bg-[#FFF0F5]' },
  { icon: <FaRegHeart size={28} />, title: 'Affirmations & Petal Animations', desc: 'Gentle affirmations and floating petals encourage progress.', color: 'bg-[#FBE4E2]' },
  { icon: <FaCalendarCheck size={28} />, title: 'Floral Calendar & Reminders', desc: 'See tasks on a floral-themed mini-calendar with reminder popups.', color: 'bg-[#EADCF8]' },
];

const Features = () => {
  return (
   <div className='relative w-full flex justify-center items-center'> 
    <section id="features" className="w-full py-16 px-6 bg-cream dark:bg-[#1f1f1f]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-comfortaa text-plum mb-4">🌼 Features That Bloom</h2>
        <p className="mb-12 text-[#B5838D] font-poppins">Designed to make productivity soft, joyful, and beautiful.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className={`rounded-2xl p-6 shadow hover:shadow-md transition-all ${feat.color}`}
            >
              <div className="text-pink-600 mb-2">{feat.icon}</div>
              <h3 className="text-lg font-semibold text-plum font-poppins">{feat.title}</h3>
              <p className="text-sm text-[#8B5E7C] mt-1">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Features;