import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, CreditCard, DollarSign, Gift, CheckCircle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle.jsx';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';

const Donate = () => {
  const [amount, setAmount] = useState('100');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const donationAmounts = [
    { value: '500', label: 'K500', desc: 'Supplies for one student' },
    { value: '1000', label: 'K1000', desc: 'Books for a semester' },
    { value: '2000', label: 'K2000', desc: 'Technology fund contribution' },
    { value: '5000', label: 'K5000', desc: 'Scholarship fund support' },
  ];

  const handleDonate = (e) => {
    e.preventDefault();
    alert(`Thank you for your generous donation of $${customAmount || amount}!`);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <SectionTitle 
        subtitle="Support Our Mission" 
        title="Make a Difference" 
        center 
        light
      />

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
        {/* Donation Form */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-slate-900/60 backdrop-blur-md border-slate-700/50 p-8">
              <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
                <Heart className="text-emerald-400" />
                Select Donation Amount
              </h3>

              <form onSubmit={handleDonate} className="space-y-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {donationAmounts.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => { setAmount(item.value); setCustomAmount(''); }}
                      className={`relative p-4 rounded-xl border transition-all ${
                        amount === item.value && !customAmount
                          ? 'bg-emerald-500/20 border-emerald-500 text-white'
                          : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      <div className="text-xl font-bold mb-1">{item.label}</div>
                      <div className="text-xs opacity-70 leading-tight">{item.desc}</div>
                      {amount === item.value && !customAmount && (
                        <div className="absolute top-2 right-2 text-emerald-400">
                          <CheckCircle size={14} />
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Custom Amount</label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => { setCustomAmount(e.target.value); setAmount(''); }}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg py-4 pl-12 pr-4 text-white text-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      placeholder="Enter other amount"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-slate-300">Payment Method</label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`flex-1 py-3 px-4 rounded-lg border flex items-center justify-center gap-2 transition-all ${
                        paymentMethod === 'card'
                          ? 'bg-emerald-500/20 border-emerald-500 text-white'
                          : 'bg-slate-800/50 border-slate-700 text-slate-300'
                      }`}
                    >
                      <CreditCard size={20} /> Credit Card
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className={`flex-1 py-3 px-4 rounded-lg border flex items-center justify-center gap-2 transition-all ${
                        paymentMethod === 'paypal'
                          ? 'bg-emerald-500/20 border-emerald-500 text-white'
                          : 'bg-slate-800/50 border-slate-700 text-slate-300'
                      }`}
                    >
                      <i className="fab fa-paypal text-xl"></i> PayPal
                    </button>
                  </div>
                </div>

                <Button variant="primary" className="w-full py-4 text-lg shadow-lg shadow-emerald-500/20">
                  Complete Donation
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* Impact Info */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-emerald-900/20 border-emerald-500/30 p-6">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Gift className="text-emerald-400" />
                Your Impact
              </h4>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Your generic donation to Golden Stars Academy directly supports our scholarship programs, 
                campus improvements, and educational resources.
              </p>
              <ul className="space-y-3">
                {[
                  '100% of donations go to student programs',
                  'Tax-deductible contributions',
                  'Transparent financial reporting',
                  'Annual donor recognition gala'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 text-center"
          >
            <h5 className="font-serif text-lg font-bold text-white mb-2">Need Help?</h5>
            <p className="text-slate-400 text-sm mb-4">
              Contact our development office for assistance with your donation.
            </p>
            <a href="mailto:giving@goldenstars.edu" className="text-emerald-400 hover:text-emerald-300 font-medium text-sm">
              giving@goldenstars.edu
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
