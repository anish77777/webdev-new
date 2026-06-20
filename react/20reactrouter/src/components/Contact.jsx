import React from 'react'

function Contact() {
  return (
    <div className="py-16 px-6 max-w-6xl mx-auto min-h-[70vh]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-base-content/80 text-lg mb-8">
            Have questions or want to work together? Drop us a message and we'll get back to you as soon as possible.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">📍</div>
              <div>
                <div className="font-semibold">Our Office</div>
                <div className="text-base-content/70">123 Web Dev Ave, California</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold">✉️</div>
              <div>
                <div className="font-semibold">Email Us</div>
                <div className="text-base-content/70">support@webdev.com</div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <img 
              src="https://picsum.photos/id/1016/600/300" 
              className="rounded-box shadow-md w-full object-cover h-48" 
              alt="Office"
            />
          </div>
        </div>
        
        <div className="card bg-base-200 shadow-xl p-8">
          <h3 className="text-2xl font-bold mb-6">Send Message</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Your Name" className="input input-bordered w-full" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Your Email" className="input input-bordered w-full" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea placeholder="Your Message" className="textarea textarea-bordered h-24" required></textarea>
            </div>
            <button className="btn btn-primary w-full mt-4">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
