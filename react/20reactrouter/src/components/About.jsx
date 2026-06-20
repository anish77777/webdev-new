import React from 'react'

function About() {
  return (
    <div className="py-16 px-6 max-w-6xl mx-auto min-h-[70vh]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">About Our Journey</h2>
          <p className="text-base-content/85 text-lg mb-4">
            We are dedicated to building state-of-the-art web experiences that delight users and deliver outstanding value. Our focus on clean code, modern architectures, and polished design drives everything we do.
          </p>
          <p className="text-base-content/75 text-md mb-6">
            Whether you are starting a new project or scaling an existing application, we provide the tools and expertise to bring your vision to life.
          </p>
          <div className="flex gap-4">
            <div className="stat bg-base-200 rounded-box p-4 flex-1">
              <div className="stat-title font-semibold">Clients</div>
              <div className="stat-value text-primary text-3xl">10k+</div>
            </div>
            <div className="stat bg-base-200 rounded-box p-4 flex-1">
              <div className="stat-title font-semibold">Projects</div>
              <div className="stat-value text-secondary text-3xl">500+</div>
            </div>
          </div>
        </div>
        <div>
          <img 
            src="https://picsum.photos/id/1025/600/400" 
            className="rounded-box shadow-lg w-full object-cover h-96" 
            alt="About Us"
          />
        </div>
      </div>
    </div>
  )
}

export default About
