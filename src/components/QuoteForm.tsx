import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { services } from '../data/services';
import { getWhatsAppUrl } from '../data/business';

interface QuoteFormProps {
  selectedService?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ selectedService }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
    }
  }, [selectedService]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Full name is required';
    if (!phone.trim()) errs.phone = 'Phone or WhatsApp number is required';
    if (!vehicle.trim()) errs.vehicle = 'Vehicle make and model is required';
    if (!service.trim()) errs.service = 'Please select a service';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate formatted WhatsApp message
    const formattedMessage = 
`Assalamualaikum, I would like to request a quote from The Expert Auto Detailing.

• Name: ${name.trim()}
• Phone / WhatsApp: ${phone.trim()}
• Vehicle: ${vehicle.trim()}
• Service: ${service}
• Preferred Date: ${date || 'Flexible / Earliest Available'}
• Message / Notes: ${message.trim() || 'No additional notes'}`;

    setIsSubmitted(true);

    // Open WhatsApp after a brief confirmation feedback
    setTimeout(() => {
      const waUrl = getWhatsAppUrl(formattedMessage);
      window.open(waUrl, '_blank');
    }, 700);
  };

  return (
    <section id="quote" className="relative py-24 sm:py-32 bg-studio-900 border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent-red/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.25em] text-accent-red uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Inquiry</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-tight">
            Tell Us About Your Vehicle
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 font-normal">
            Fill in the details below. We'll format your inquiry and connect you directly with the team via WhatsApp.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-2xl border border-white/15 bg-studio-950/90 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Opening WhatsApp...
              </h3>
              <p className="text-sm text-slate-300 max-w-md">
                Your quote request has been prepared with your vehicle details. If WhatsApp did not open automatically, click the button below:
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 px-6 py-2.5 rounded bg-studio-800 hover:bg-studio-700 text-xs font-semibold uppercase tracking-wider text-slate-300"
              >
                Edit Form Details
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Your Name <span className="text-accent-red">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                    }}
                    placeholder="e.g. Tariq Khan"
                    className={`w-full px-4 py-3 rounded-lg bg-studio-900 border text-white placeholder-slate-500 text-sm focus:outline-none transition-colors ${
                      errors.name ? 'border-accent-red focus:border-accent-red' : 'border-white/10 focus:border-accent-red/60'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-accent-red mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Phone / WhatsApp <span className="text-accent-red">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
                    }}
                    placeholder="e.g. 0330 1234567"
                    className={`w-full px-4 py-3 rounded-lg bg-studio-900 border text-white placeholder-slate-500 text-sm focus:outline-none transition-colors ${
                      errors.phone ? 'border-accent-red focus:border-accent-red' : 'border-white/10 focus:border-accent-red/60'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-accent-red mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Vehicle Make & Model */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Vehicle Make & Model <span className="text-accent-red">*</span>
                  </label>
                  <input
                    type="text"
                    value={vehicle}
                    onChange={(e) => {
                      setVehicle(e.target.value);
                      if (errors.vehicle) setErrors(prev => ({ ...prev, vehicle: '' }));
                    }}
                    placeholder="e.g. Toyota Fortuner 2023 / Civic RS"
                    className={`w-full px-4 py-3 rounded-lg bg-studio-900 border text-white placeholder-slate-500 text-sm focus:outline-none transition-colors ${
                      errors.vehicle ? 'border-accent-red focus:border-accent-red' : 'border-white/10 focus:border-accent-red/60'
                    }`}
                  />
                  {errors.vehicle && (
                    <p className="text-xs text-accent-red mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.vehicle}</span>
                    </p>
                  )}
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Service Required <span className="text-accent-red">*</span>
                  </label>
                  <select
                    value={service}
                    onChange={(e) => {
                      setService(e.target.value);
                      if (errors.service) setErrors(prev => ({ ...prev, service: '' }));
                    }}
                    className={`w-full px-4 py-3 rounded-lg bg-studio-900 border text-white text-sm focus:outline-none transition-colors ${
                      errors.service ? 'border-accent-red focus:border-accent-red' : 'border-white/10 focus:border-accent-red/60'
                    }`}
                  >
                    <option value="" disabled className="text-slate-500">Select a service</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title} className="bg-studio-950 text-white">
                        {s.title} {s.isVerifiedBySignage ? '(Wrap/PPF Specialization)' : ''}
                      </option>
                    ))}
                    <option value="Custom Inspection / Other" className="bg-studio-950 text-white">
                      Custom Inspection / Other Inquiries
                    </option>
                  </select>
                  {errors.service && (
                    <p className="text-xs text-accent-red mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.service}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Preferred Date (Optional)
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-studio-900 border border-white/10 text-white text-sm focus:outline-none focus:border-accent-red/60"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Additional Notes or Specific Requests (Optional)
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your vehicle's condition, paint concerns, or any custom preferences..."
                  className="w-full px-4 py-3 rounded-lg bg-studio-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-red/60"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 px-8 rounded-lg bg-accent-red hover:bg-accent-red-light text-white font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-xl shadow-accent-red/30 hover:shadow-accent-red/50 hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request a Quote via WhatsApp</span>
                  <Send className="w-4 h-4 ml-1" />
                </button>
                <p className="mt-3 text-center text-xs text-slate-500">
                  Transfers directly to WhatsApp with your prefilled details. No sign-up required.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
