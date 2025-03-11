import React from "react";

export default function Services() {


  let services = [
    {
      title: 'Automate your social media posting',
      desc: "Unlock the power of social media for your business success.",
      img: '/assets/homeImage/social-media-posting.jpg'
    },
    {
      title: 'Boost web traffic',
      desc: "Boosted web traffic through our engaged community.",
      img: '/assets/homeImage/website-traffic.jpeg'
    },
    {
      title: 'Get organic Followers',
      desc: "Attract real followers through social media by creating valuable content, engaging authentically",
      img: '/assets/homeImage/organic-follwers.png'
    },
    {
      title: 'Email campaign',
      desc: "Generate leads for your business through a cold email campaign.",
      img: '/assets/homeImage/email-data-generation.jpeg'
    },
    {
      title: 'WhatsApp Campaign',
      desc: "Maximize Engagement with a Targeted WhatsApp Campaign",
      img: '/assets/homeImage/whatsapp-marketing.jpg'
    },
    {
      title: 'Lead Generation',
      desc: "Grow your business by capturing high-quality leads.",
      img: '/assets/homeImage/lead-generation.jpeg'
    }
  ]






  return (
    <div className="w-full bg-accent-foreground ">
      <section className="min-h-screen max-w-screen-2xl mx-auto lg:px-24 lg:py-24 px-4 py-12 lg:mt-20 ">
        {/* <p className="text-center text-primary text-md font-semibold ">
        SOCIAL MEDIA MARKETING
      </p> */}

        <h1 className="text-3xl lg:text-6xl text-gray-900 text-center font-extrabold  ">
          What we offer
        </h1>
        <p className="text-muted text-xs lg:text-md text-center mt-3 lg:mt-6 max-w-2xl mx-auto">
          {"We are creating a community for everyone where users don't need to worry about starting a business or automating their social media. Our goal is to support small businesses by providing them with the tools and network they need to thrive."}
        </p>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services?.map((item, i) => (
            <div key={i} className="bg-white shadow-lg  rounded-3xl flex items-center">
              <div className="p-12">
                <h2 className="text-gray-900 font-bold text-3xl">
                  {item.title}
                </h2>
                <p className="text-muted mt-4">
                  {item.desc}
                </p>
                <button className="bg-primary mt-8 text-sm text-white py-3  px-8  font-semibold  rounded-full">
                  GET STARTED
                </button>
              </div>
              <img
                src={item?.img}
                className=" w-60 h-48 rounded-l-full hidden lg:block"
                alt=""
              />
            </div>
          ))}
        </div>
      </section>
    </div>

  );
}
