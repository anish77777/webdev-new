import React from 'react'

function Home() {
  return (
    <div className="hero min-h-[70vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 px-6 lg:px-16 py-12">
        <img 
          src="https://picsum.photos/id/1018/600/400" 
          className="max-w-sm rounded-lg shadow-2xl object-cover h-64 w-full sm:h-80" 
          alt="Home Hero"
        />
        <div>
          <h1 className="text-5xl font-bold">Welcome to Our Premium Site</h1>
          <p className="py-6 text-lg text-base-content/80">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Home
