// components/Banner.js
export default function SecondBanner() {
    return (
      <div className="relative bg-cover bg-center py-16" style={{ backgroundImage: 'url(/images/background/bg-cta1.jpg)' }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center text-white">
          <div className="md:w-1/2 text-left p-4">
            <h5 className="text-white text-center leading-10">  We Carry More Than Just Good Coding Skills</h5>
            <h2 className="text-4xl font-bold mb-4 text-center">Lets Build Your Website!</h2>
          </div>
          <div className="md:w-1/2 text-right p-4">
            <a href="#" className="bg-sky-500 font-bold text-white py-4 px-7 hover:bg-white hover:text-black transition duration-300">CONTACT US</a>
          </div>
        </div>
      </div>
    );
  }
  