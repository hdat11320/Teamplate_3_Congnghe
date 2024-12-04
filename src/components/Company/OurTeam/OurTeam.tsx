// components/LeadershipTeam.js
import Image from 'next/image';

export default function LeadershipTeam() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h5 className="text-purple-800 text-sm"> // OUR TEAM</h5>
        <h2 className="text-4xl font-extrabold mb-2">Our Leadership Team</h2>
        <p className=" m-6 text-xm px-6">
          We help businesses elevate their value through custom software development, <br />
           product design, QA and consultancy services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          <div className="text-center">
            <Image src="/images/member1.jpg" alt="David Ferry" width={300} height={300} className="mx-auto w-full" />
            <div className="my-5">
            <p className="text-xl font-semibold m-0  text-black">David Ferry</p>
            <span className="uppercase font-bold m-0 ">Co-Founder of Company</span>
            </div>
          </div>
          <div className="text-center">
            <Image src="/images/member2.jpg" alt="Christina Torres" width={300} height={300} className="mx-auto w-full" />
            <div className="my-5">
            <p className="text-xl font-semibold m-0 text-black">Christina Torres</p>
            <span className="uppercase font-bold m-0">Co-Founder of Company</span>
            </div>
          </div>
          <div className="text-center">
            <Image src="/images/member3.jpg" alt="Amalia Bruno" width={300} height={300} className="mx-auto  w-full " />
            <div className="my-5">
            <p className="text-xl font-semibold m-0 text-black">Amalia Bruno</p>
            <span className="uppercase font-bold m-0">CTO of Company</span>
            </div>
          </div>
          <div className="text-center">
            <Image src="/images/member4.jpg" alt="David Ferry" width={300} height={300} className="mx-auto w-full" />
            <div className="my-5">
            <p className="text-xl font-semibold m-0 text-black">David Ferry</p>
            <span className="uppercase font-bold m-0">Co-Founder of Company</span>
            </div>
          </div>
          <div className="text-center">
            <Image src="/images/member5.jpg" alt="Marry Tonheim" width={300} height={300} className="mx-auto w-full" />
            <div className="my-5">
            <p className="text-xl font-semibold m-0 text-black">Marry Tonheim</p>
            <span className="uppercase font-bold m-0">Chief Marketing Officer</span>
            </div>
          </div>
          <div className="text-center">
            <Image src="/images/member6.jpg" alt="Anna Richmond" width={300} height={300} className="mx-auto w-full" />
            <div className="my-5">
            <p className="text-xl font-semibold m-0 text-black">Anna Richmond</p>
            <span className="uppercase font-bold m-0">President & CEO</span>
            </div>
          </div>
          <div className="text-center">
            <Image src="/images/member7.jpg" alt="Andrew Kinzer" width={300} height={300} className="mx-auto w-full" />
            <div className="my-5">
            <p className="text-xl font-semibold m-0 text-black">Andrew Kinzer</p>
            <span className="uppercase font-bold m-0">Chief Information Officer</span>
            </div>
          </div>
          <div className="text-center">
            <Image src="/images/member8.jpg" alt="Katie Doyle" width={300} height={300} className="mx-auto w-full" />
            <div className="my-5">
            <p className="text-xl font-semibold m-0 text-black">Katie Doyle</p>
            <span  className="uppercase font-bold m-0">Chief Strategy Officer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
