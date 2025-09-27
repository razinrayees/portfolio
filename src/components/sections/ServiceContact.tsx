import React, { useState } from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { Button } from '../ui/Button';
import { FORMSPREE_ENDPOINT, SITE_CONFIG } from '../../lib/constants';

interface ServiceFormData {
  name: string;
  email: string;
  domain: string;
  users: string;
  message: string;
}

export function ServiceContact() {
  const [formData, setFormData] = useState<ServiceFormData>({
    name: '',
    email: '',
    domain: '',
    users: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('Submitting...');

    // Combine all extra fields into the message
    const fullMessage = `
Domain Email Setup Request

Name: ${formData.name}
Email: ${formData.email}
Domain: ${formData.domain}
Number of Users: ${formData.users}

Message:
${formData.message}
`;

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: fullMessage,
        }),
      });

      if (response.ok) {
        setSubmissionStatus(
          'Thank you! I will get back to you within 24 hours with a quote and next steps.'
        );
        setFormData({ name: '', email: '', domain: '', users: '', message: '' });
      } else {
        setSubmissionStatus('Something went wrong, please try again.');
      }
    } catch (error) {
      setSubmissionStatus('Error: ' + (error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-black text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-['Be_Vietnam'] font-semibold text-[40px] leading-[100%] tracking-[-0.09em] mb-8">
          GET STARTED
        </h2>
        <p className="font-['Be_Vietnam'] font-normal text-[40px] leading-[109%] mb-16">
          Ready to upgrade from <span className="font-bold">@gmail.com</span>?
          <br />
          Let's set up your <span className="font-bold">professional email</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              className="w-full p-4 bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Current Email"
              required
              className="w-full p-4 bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              name="domain"
              value={formData.domain}
              onChange={handleInputChange}
              placeholder="Your Domain (e.g., yourbusiness.com)"
              required
              className="w-full p-4 bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <select
              name="users"
              value={formData.users}
              onChange={handleInputChange}
              required
              className="w-full p-4 bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="">Number of Email Accounts</option>
              <option value="1">1 User</option>
              <option value="2-5">2-5 Users</option>
              <option value="6-10">6-10 Users</option>
              <option value="10+">10+ Users</option>
            </select>
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell me about your business and any specific requirements..."
            rows={6}
            className="w-full p-4 bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <div className="flex justify-between items-center">
            <div className="flex gap-6">
              <a
                href={SITE_CONFIG.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${SITE_CONFIG.author.email}`} aria-label="Send email">
                <Mail size={24} />
              </a>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="primary"
              className="bg-cyan-500 hover:bg-cyan-600 focus:ring-cyan-500"
            >
              {isSubmitting ? 'Sending...' : 'GET QUOTE'}
            </Button>
          </div>
        </form>
        {submissionStatus && (
          <p className="mt-4 text-lg" role="status">
            {submissionStatus}
          </p>
        )}
      </div>
    </section>
  );
}
