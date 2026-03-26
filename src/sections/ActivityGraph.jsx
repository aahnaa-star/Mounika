import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { Github, GitCommit, GitPullRequest, GitBranch, Star } from 'lucide-react';

// Generate mock contribution data for the past year
const generateContributionData = () => {
  const weeks = 52;
  const days = 7;
  const data = [];
  
  for (let w = 0; w < weeks; w++) {
    const week = [];
    for (let d = 0; d < days; d++) {
      // Generate realistic-looking data with some patterns
      const baseActivity = Math.random();
      const dayOfWeek = d;
      
      // More activity on weekdays
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const weekendModifier = isWeekend ? 0.3 : 1;
      
      // Recent weeks have more activity (current internship)
      const recencyModifier = w > 40 ? 1.5 : 1;
      
      const activity = baseActivity * weekendModifier * recencyModifier;
      
      let level = 0;
      if (activity > 0.7) level = 4;
      else if (activity > 0.5) level = 3;
      else if (activity > 0.3) level = 2;
      else if (activity > 0.1) level = 1;
      
      week.push({ day: d, week: w, level });
    }
    data.push(week);
  }
  
  return data;
};

const levelColors = {
  0: 'bg-dark-border',
  1: 'bg-accent-cyan/20',
  2: 'bg-accent-cyan/40',
  3: 'bg-accent-cyan/60',
  4: 'bg-accent-cyan',
};

const ActivityGraph = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const contributionData = useMemo(() => generateContributionData(), []);

  const totalContributions = useMemo(() => {
    return contributionData.flat().reduce((sum, day) => sum + day.level, 0) * 15;
  }, [contributionData]);

  const stats = [
    { icon: GitCommit, label: 'Total Commits', value: '1,247' },
    { icon: GitPullRequest, label: 'Pull Requests', value: '89' },
    { icon: GitBranch, label: 'Repositories', value: '32' },
    { icon: Star, label: 'Stars Earned', value: '156' },
  ];

  return (
    <section
      id="activity"
      className="relative py-24 sm:py-32 bg-dark-lighter overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary-light text-sm font-semibold tracking-wider uppercase mb-2 block">
            Coding Activity
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My GitHub Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-purple mx-auto rounded-full mb-6" />
        </motion.div>

        {/* GitHub-style Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-6 sm:p-8 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Github className="text-accent-cyan" size={24} />
              <span className="text-white font-medium">GitHub Activity</span>
            </div>
            <span className="text-sm text-gray-400">
              {totalContributions} contributions in the last year
            </span>
          </div>

          {/* Contribution Grid */}
          <div className="overflow-x-auto">
            <div className="flex gap-1 min-w-max">
              {contributionData.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((day, dayIndex) => (
                    <motion.div
                      key={`${weekIndex}-${dayIndex}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.3 + (weekIndex * 7 + dayIndex) * 0.002,
                      }}
                      className={`w-3 h-3 rounded-sm ${levelColors[day.level]} hover:ring-2 hover:ring-accent-cyan/50 transition-all cursor-pointer`}
                      title={`${day.level * 3 + Math.floor(Math.random() * 5)} contributions on Week ${weekIndex + 1}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 mt-4 text-xs text-gray-500">
            <span>Less</span>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`w-3 h-3 rounded-sm ${levelColors[level]}`}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="glass-card rounded-xl p-6 text-center hover:bg-white/[0.03] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon size={24} className="text-accent-cyan" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Top Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 glass-card rounded-2xl p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Most Used Languages</h3>
          <div className="space-y-3">
            {[
              { name: 'TypeScript', percentage: 45, color: 'bg-blue-500' },
              { name: 'Python', percentage: 30, color: 'bg-yellow-500' },
              { name: 'JavaScript', percentage: 15, color: 'bg-accent-cyan' },
              { name: 'CSS/Tailwind', percentage: 10, color: 'bg-accent-pink' },
            ].map((lang) => (
              <div key={lang.name} className="flex items-center gap-4">
                <span className="text-sm text-gray-400 w-28">{lang.name}</span>
                <div className="flex-1 h-2 bg-dark-lighter rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${lang.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${lang.percentage}%` } : {}}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                </div>
                <span className="text-sm text-white w-12 text-right">{lang.percentage}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-8"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent-cyan hover:text-white transition-colors"
          >
            <Github size={20} />
            View my GitHub profile →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivityGraph;
