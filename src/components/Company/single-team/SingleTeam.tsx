export default function SingleTeam() {
  return (
    <>
      <div id="content" className="site-content">
        <div className="page-header flex items-center justify-center py-8 bg-gray-100">
          <div className="container mx-auto px-2">
            <div className="inner flex items-center justify-between">
              <h1 className="page-title text-5xl font-bold">Single Team</h1>
              <ul id="breadcrumbs" className="breadcrumbs flex space-x-2">
                <li><a href="index.html" className="text-blue-500 hover:underline">Home</a></li>
                <li className="text-gray-500">Single Team</li>
              </ul>
            </div>
          </div>
        </div>
        <section className="team-about sm:py-10">
          <div className="container mx-auto">
            <div className="steam-info">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex justify-center">
                  <div className="team-info-left">
                    <div className="team-img">
                      <img src="../images/single-team1.jpg" alt="" className="rounded shadow-lg" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="team-detail">
                    <h2 className="text-2xl font-bold mb-2">Robert Cooper</h2>
                    <span className="location text-gray-600">CEO of Company</span>
                    <ul className="bold member-info list-disc pl-5 mt-4">
                      <li><span className="text-dark font-semibold">Department:</span> Web Development</li>
                      <li><span className="text-dark font-semibold">Experience:</span> 15 Years</li>
                      <li><span className="text-dark font-semibold">Email:</span> r.cooper@mail.com</li>
                      <li><span className="text-dark font-semibold">Phone:</span> +1-800-456-478-23</li>
                    </ul>
                    <div className="otf-social-share clearfix shape-circle mt-4 flex space-x-4 justify-center">
                      <a className="share-facebook text-blue-600" href="facebook.html" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="share-twitter text-blue-400" href="twitter.html" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="share-pinterest text-red-600" href="pinterest.html" target="_blank">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                      <a className="share-linkedin text-blue-700" href="linkedin.html" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team-skills py-10">
          <div className="container mx-auto">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Biography</h3>
              <p className="mb-4">
                A vast majority of the app marketers mainly concentrate on the post-launch app marketing techniques and measures while completely missing on the pre-launch campaign. This prevents the app from creating buzz and hype just around the time when the app is launched. As and when you launch the app, already a considerable number of people should expectantly look forward to your app and this requires long-drawn marketing efforts leading up to the app launch event. To create pre-launch buzz and hype about the app <span className="text-blue-500 font-semibold">a mobile app development company</span> has an array of marketing options like social media campaigns, search engine ads, video ads, email campaigns, etc. Apart from online options, you can also reach out to the wider audience with traditional marketing options like outdoor ads, print ads, media ads, and promotional events.
              </p>
            </div>
            <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
  <div className="text-left">
    <div className="team-profile">
      <h6 className="font-semibold">Onum Company</h6>
      <p>Web Designer, Illustrator</p>
    </div>
    <div className="team-profile">
      <h6 className="font-semibold">Media Group</h6>
      <p>Photographer, UI Designer</p>
    </div>
  </div>
  
  <div className="text-left">
    <div className="team-profile">
      <h6 className="font-semibold">Onum Company</h6>
      <p>Web Designer, Illustrator</p>
    </div>
    <div className="team-profile">
      <h6 className="font-semibold">Nimkus 2000</h6>
      <p>PHP Developer, Photographer</p>
    </div>
  </div>

  <div className="flex items-center">
    <svg className="w-35 h-35 mb-2">
      <circle className="text-gray-200" cx="50%" cy="50%" r="44%" stroke-width="2" fill="none" stroke="currentColor"></circle>
      <circle className="text-white" cx="50%" cy="50%" r="40%" stroke-width="12" fill="none" stroke="currentColor"></circle>
      <circle className="text-sky-400" cx="50%" cy="50%" r="40%" stroke-width="12" fill="none" stroke-dasharray="180" stroke-dashoffset="80" stroke-linecap="" stroke="currentColor"></circle>
      <text x="50%" y="50%" dy=".3em" text-anchor="middle" className="text-white text-3xl font-extrabold">50%</text>
    </svg>
    <h6 className="font-bold">Mobile Development</h6>
  </div>
  
  <div className="flex items-center">
    <svg className="w-35 h-35 mb-2">
      <circle className="text-gray-200" cx="50%" cy="50%" r="44%" stroke-width="2" fill="none" stroke="currentColor"></circle>
      <circle className="text-white" cx="50%" cy="50%" r="40%" stroke-width="12" fill="none"  stroke="currentColor"></circle>
      <circle className="text-sky-400" cx="50%" cy="50%" r="40%" stroke-width="12" fill="none" stroke-dasharray="280" stroke-dashoffset="" stroke-linecap="" stroke="currentColor"style={{
        transform: "rotate(250deg)", // Xoay 45 độ theo viền
        transformOrigin: "50% 50%"  // Tâm xoay là giữa hình tròn
      }}></circle>
      <text x="50%" y="50%" dy=".3em" text-anchor="middle" className="text-white text-3xl font-extrabold">70%</text>
    </svg>
    <h6 className="font-bold ml-50">Wearable Development</h6>
  </div>
</div>


            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Hard Skills</h3>
              <p className="mb-4">
                Just as a retail business in real life is remembered not just for its product offerings but also because of its services, support, and customer-friendliness, an app that offers a <span className="text-dark font-semibold">helpful customer support system</span> for its valued users enjoys more traction and engagement than other apps. Great brands all over the globe enjoy appreciation and popularity because of their customer-friendly support and services.
              </p>
            </div>
          </div>
        </section>

        <section className="team-contact py-10">
          <div className="container mx-auto">
            <div className="row">
              <div className="col-md-12">
                <form action="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/engitech/teamcontact.php" method="post" className="wpcf7-form">
                  <div className="member-form comment-respond">
                    <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
                    <p className="text-sm mb-4">Your email address will not be published. Required fields are marked *</p>
                    <div className="flex flex-wrap -mx-2">
                      <div className="w-full md:w-1/2 px-2 mb-4">
                        <input type="text" name="name" className="border rounded w-full p-2" placeholder="Your Name *" required />
                      </div>
                      <div className="w-full md:w-1/2 px-2 mb-4">
                        <input type="email" name="email" className="border rounded w-full p-2" placeholder="Your Email *" required />
                      </div>
                    </div>
                    <div className="mb-4">
                      <input type="text" name="site" className="border rounded w-full p-2" placeholder="Website" />
                    </div>
                    <div className="mb-4">
                      <textarea name="message" className="border rounded w-full p-2" placeholder="Message..." required></textarea>
                    </div>
                    <div>
                      <button type="submit" className="octf-btn bg-blue-500 text-white py-2 px-4">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}