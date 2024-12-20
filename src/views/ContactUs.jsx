import { useEffect, useState } from 'react';
export default function ContactUs() {
    return (
      <section className="text-center mt-4">
        <h2>Contact Us</h2>
        <form className="mt-3">
          <div className="mb-3">
            <input type="text" placeholder="Your Name" className="form-control" required />
          </div>
          <div className="mb-3">
            <input type="email" placeholder="Your Email" className="form-control" required />
          </div>
          <div className="mb-3">
            <textarea placeholder="Your Message" className="form-control" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    );
  }