import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, ArrowUpRight, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration - Replace with your actual credentials
      const serviceId = 'service_your_service_id'; // Get from EmailJS dashboard
      const templateId = 'template_your_template_id'; // Get from EmailJS dashboard
      const publicKey = 'your_public_key'; // Get from EmailJS dashboard

      // For now, show a demo message since EmailJS isn't configured
      if (serviceId === 'service_your_service_id') {
        setSubmitStatus('demo');
        setFormState({ name: '', email: '', message: '' });
        return;
      }

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'from_name') {
      setFormState(prev => ({ ...prev, name: value }));
    } else if (name === 'from_email') {
      setFormState(prev => ({ ...prev, email: value }));
    } else {
      setFormState(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 px-6 lg:px-12 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-white text-sm font-medium tracking-widest uppercase">
            06 — Let's Connect
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Ready to create something <span className="gradient-text">amazing?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
              Whether you have a project in mind, an opportunity to discuss, or just want to 
              talk about AI and the future of tech — I'm always open to meaningful conversations.
            </p>

            {/* Contact methods */}
            <div className="space-y-4 mb-12">
              <motion.a
                href="mailto:thabiseelumounika@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/5 transition-colors group"
                whileHover={{ x: 4 }}
                data-cursor="pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-pink)]/20 to-[var(--accent-purple)]/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[var(--accent-pink)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)]">Email</p>
                  <p className="text-white group-hover:text-[var(--accent-pink)] transition-colors">
                    thabiseelumounika@gmail.com
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <motion.div
                className="flex items-center gap-4 p-4 rounded-xl glass"
                data-cursor="pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-cyan)]/20 to-[var(--accent-purple)]/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[var(--accent-cyan)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)]">Location</p>
                  <p className="text-white">Kakinada, Andhra Pradesh, India</p>
                </div>
              </motion.div>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/thabiseelumounika"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/5 transition-colors text-[var(--text-secondary)] hover:text-white"
                whileHover={{ y: -2 }}
                data-cursor="pointer"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mounika-thabiseelu-5bbb25313/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/5 transition-colors text-[var(--text-secondary)] hover:text-white"
                whileHover={{ y: -2 }}
                data-cursor="pointer"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </motion.a>
            </div>

            {/* Status */}
            <div className="flex items-center gap-3 mt-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm text-[var(--text-secondary)]">
                Open to internships and opportunities
              </span>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-6">
              <div>
                <label className="block text-sm text-[var(--text-muted)] mb-2">Your Name</label>
                <input
                  type="text"
                  name="from_name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-pink)] transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm text-[var(--text-muted)] mb-2">Your Email</label>
                <input
                  type="email"
                  name="from_email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-pink)] transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-[var(--text-muted)] mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-pink)] transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                whileHover={{ scale: isSubmitting ? 1 : 1.05, y: isSubmitting ? 0 : -2 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                data-cursor="pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Let's Build Something Together
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent! I'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'demo' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm"
                >
                  <Mail className="w-5 h-5" />
                  <span>Demo mode: Configure EmailJS to enable real messaging. Your form data is ready!</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Failed to send message. Please try again or email directly.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
