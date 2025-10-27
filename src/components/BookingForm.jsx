import React, { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '2',
  message: '',
};

const BookingForm = () => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!form.name || !form.email || !form.phone || !form.date || !form.time || !form.guests) {
      setStatus('Please fill out all required fields.');
      return;
    }

    const subject = `New Café Booking from ${form.name}`;
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Date & Time: ${form.date} ${form.time}`,
      `Guests: ${form.guests}`,
      `Message: ${form.message || '-'}\n`,
      '— Sent from Café Aroma website',
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));
    const mailto = `mailto:padhiashish01@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Open default email client with prefilled email
    window.location.href = mailto;
    setStatus("We've opened your email app with your booking details. Please hit send to complete your request.");
    setForm(initialState);
  };

  return (
    <section id="booking" className="py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-amber-900">Book a Table</h2>
        <p className="text-amber-800/80 mt-1">We’ll confirm your reservation via email</p>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4 bg-amber-50/60 p-6 rounded-xl border">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-amber-800">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-md border border-amber-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300" />
            </div>
            <div>
              <label className="text-sm text-amber-800">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-md border border-amber-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-amber-800">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} required className="mt-1 w-full rounded-md border border-amber-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-amber-800">Date</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} required className="mt-1 w-full rounded-md border border-amber-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300" />
              </div>
              <div>
                <label className="text-sm text-amber-800">Time</label>
                <input type="time" name="time" value={form.time} onChange={handleChange} required className="mt-1 w-full rounded-md border border-amber-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300" />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-amber-800">Number of Guests</label>
              <input type="number" name="guests" min="1" value={form.guests} onChange={handleChange} required className="mt-1 w-full rounded-md border border-amber-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300" />
            </div>
            <div>
              <label className="text-sm text-amber-800">Message (optional)</label>
              <input name="message" value={form.message} onChange={handleChange} className="mt-1 w-full rounded-md border border-amber-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300" />
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-amber-800/80">We respect your privacy. Your info is only used for this booking.</p>
            <button type="submit" className="px-4 py-2 rounded-md bg-amber-700 text-white hover:bg-amber-800">Send Booking</button>
          </div>

          {status && (
            <div className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded">
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
