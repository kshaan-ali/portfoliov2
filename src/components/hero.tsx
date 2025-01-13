export const Hero = () => (
    <div className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white" 
         style={{
           backgroundImage: "url('https://source.unsplash.com/featured/?gradient,texture')",
         }}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-60"></div>
  
      {/* Parallax Effect */}
      <div className="absolute inset-0 bg-fixed bg-cover bg-center"
           style={{
             backgroundImage: "url('https://source.unsplash.com/featured/?futuristic,abstract')",
           }}>
      </div>
  
      <div className="relative z-10 text-center px-4 md:px-8">
        <h1 className="text-5xl md:text-7xl font-extrabold text-shadow-lg" data-aos="fade-up">
          Hi, I'm Shaan Ali Khan
        </h1>
        <p className="mt-8 h-auto min-h-32 text-lg w-full md:w-2/3 mx-auto text-shadow-md" data-aos="fade-up" data-aos-delay="300">
          I specialize in building intuitive web applications and decentralized solutions using technologies like React, JavaScript, Node.js, Solidity, and blockchain. 
          Explore my projects to see how I combine innovation with cutting-edge technologies!
        </p>
        <a href="#projects" className="mt-12 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg transition-all hover:bg-white hover:text-black">
          See My Work
        </a>
      </div>
    </div>
  );
  