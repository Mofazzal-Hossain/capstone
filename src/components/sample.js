import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sample extends Component {
  articles = [
    {
      source: { id: "wired", name: "Wired" },
      author: "Amit Katwala",
      title: "DeepMind’s New AI Can Predict Genetic Diseases",
      description:
        "AlphaMissense, a new model from Google’s artificial intelligence team, analyzes the effects of DNA mutations and will accelerate research into rare diseases.",
      url: "https://www.wired.com/story/deepmind-ai-alphamissense-genetics-rare-diseases/",
      urlToImage:
        "https://media.wired.com/photos/6509abd0d7ea654c08913301/191:100/w_1280,c_limit/digitized-dna-helix-science-GettyImages-85757934.jpg",
      publishedAt: "2023-09-19T14:35:23Z",
      content:
        "About 10 years ago, iga Avsec was a PhD physics student who found himself taking a crash course in genomics via a university module on machine learning. He was soon working in a lab that studied rare… [+2913 chars]",
    },
    {
      source: { id: null, name: "VentureBeat" },
      author: "Carl Franzen",
      title:
        "SiMa.ai says it can beat Nvidia by offering no-code machine learning for edge devices",
      description:
        "Palette Edgematic is a no-code, drag-and-drop software platform for deploying machine learning models quickly, reliably, by non-specialists.",
      url: "https://venturebeat.com/business/sima-ai-says-it-can-beat-nvidia-by-offering-no-code-machine-learning-for-edge-devices/",
      urlToImage:
        "https://venturebeat.com/wp-content/uploads/2023/09/cfr0z3n_surreal_a_tiny_humanoid_figure_stands_on_the_edge_of_a__3e602e85-986c-4e85-ae42-aadf475bc247.png?w=1200&strip=all",
      publishedAt: "2023-09-12T13:00:00Z",
      content:
        "Graphic processor maker Nvidia joined the rarefied short list of companies valued at $1 trillion-plus earlier this year thanks in no small part to the explosion of interest in, and development of, ge… [+6731 chars]",
    },
  ];

  PopularArticle = [
    {
      source: { id: null, name: "Boing Boing" },
      author: "Rob Beschizza",
      title: "Programming language inventor or serial killer?",
      description:
        "Can you tell programming language inventors from serial killers? Good luck! I scored 8/10, but I'm a connoisseur. \n\n\n\nI was expecting at least one to be both–and there is a serial killer who was a programmer, but not to that standard.",
      url: "https://boingboing.net/2023/09/14/programming-language-inventor-or-serial-killer.html",
      urlToImage:
        "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/09/image-66.png?fit=1200%2C765&ssl=1",
      publishedAt: "2023-09-15T01:47:20Z",
      content:
        "Can you tell programming language inventors from serial killers? Good luck! I scored 8/10, but I'm a connoisseur. \r\nI was expecting at least one to be both–and there is a serial killer who was a prog… [+367 chars]",
    },
    {
      source: { id: null, name: "Hackaday" },
      author: "Bryan Cockfield",
      title: "Programming a Poker Game With GPT Help",
      description:
        "Although ChatGPT generated a huge amount of hype around replacing white collar workers completely when it was first released to the public, the general consensus now is that it won’t",
      url: "https://hackaday.com/2023/09/07/programming-a-poker-game-with-gpt-help/",
      urlToImage:
        "https://hackaday.com/wp-content/uploads/2023/09/pokergpt-main.jpg",
      publishedAt: "2023-09-07T20:00:39Z",
      content:
        "Although ChatGPT generated a huge amount of hype around replacing white collar workers completely when it was first released to the public, the general consensus now is that it won’t outright replace… [+1620 chars]",
    },
    {
      source: { id: null, name: "Hackaday" },
      author: "Maya Posch",
      title: "Turing Complete Programming on ARM With Two Instructions",
      description:
        "There are many questions that can be asked for software projects, with most of these questions starting with ‘Why…?’. This is true for the challenge of proving that cascading stylesheets",
      url: "https://hackaday.com/2023/09/29/turing-complete-programming-on-arm-with-two-instructions/",
      urlToImage:
        "https://hackaday.com/wp-content/uploads/2022/01/Esoteric.jpg",
      publishedAt: "2023-09-29T11:00:08Z",
      content:
        "There are many questions that can be asked for software projects, with most of these questions starting with ‘Why…?’. This is true for the challenge of proving that cascading stylesheets are Turing-c… [+1420 chars]",
    },
  ];

  TechArticle = [
    {
      source: { id: null, name: "Android Central" },
      author: "andrew.myrick@futurenet.com (Andrew Myrick)",
      title: "Acer Chromebox CXI5 review: A long overdue upgrade",
      description:
        "Chromeboxes don't get updated nearly as frequently as Chromebooks, but we can't help but excited when a new Chromebox hits the market. Acer's Chromebox CXI5 is finally here and might just be the perfect choice if you're looking for a family computer.",
      url: "https://www.androidcentral.com/chromebooks-laptops/acer-chromebox-cxi5-review",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/xVWU6rnSbFSp3rGEGc2sjJ-1200-80.jpg",
      publishedAt: "2023-09-13T06:00:28Z",
      content:
        "When you think about ChromeOS, there's a good chance that the first thing to come to mind are the best Chromebooks. There's a pretty obvious reason for that, as Chromebooks are simply more popular, w… [+7483 chars]",
    },
    {
      source: { id: null, name: "CNET" },
      author: "Adam Oram",
      title:
        "Bag a Windows 11 Pro License for Just $30 While This Deal Lasts - CNET",
      description:
        "This limited-time offer saves you $170 compared to Microsoft's price.",
      url: "https://www.cnet.com/deals/snag-windows-11-pro-lifetime-license-just-30/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/34fc724f6a53ceb9739005a4c96f695c2008122d/hub/2023/04/13/1cced261-5119-4468-b30b-de3a609846c8/windows-11-pro-box.png?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2023-09-15T14:34:00Z",
      content:
        "You'll need more than advanced hardware to build a decent PC. The operating system is one of the most important components, and if you want to run Windows on your freshly-assembled desktop, then we'v… [+1596 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "Dave Johnson",
      title:
        "Meta Quest 2 games & apps, plus how to play Steam games on the VR headset",
      description:
        "Meta's Oculus Quest 2 has hundreds of games, apps, and other entertainment available for download. You can also play Steam games on the device.",
      url: "https://www.businessinsider.com/meta-quest-games",
      urlToImage:
        "https://www.businessinsider.com/public/assets/BI/US/og-image-logo-social.png",
      publishedAt: "2023-09-14T07:49:01Z",
      content:
        "<ul>\n<li>You can play Steam games on the Quest 2 by linking your virtual reality headset to a computer.  </li>\n<li>You can access Steam VR games with a USB link cable or a wireless Air Link connectio… [+5417 chars]",
    },
    {
      source: { id: null, name: "Mycophobia.org" },
      author: null,
      title: "On Desktop GUI Minimalism",
      description:
        "Over my now decade-plus-spanning Linux-using career (career in name only, I'm forced to use Windows at work), I've bounced back and forth between several different environments spanning several different UI paradigms, as any nerdy Linux user is wont to do.",
      url: "https://mycophobia.org/desktop_gui_minimalism.html",
      urlToImage: null,
      publishedAt: "2023-09-09T18:23:18Z",
      content:
        "On Desktop GUI Minimalism\r\nOver my now decade-plus-spanning Linux-using career (career in name only, I'm forced to use Windows at work), I've bounced back and forth between several different environm… [+21586 chars]",
    },
    {
      source: { id: null, name: "Android Central" },
      author: "namerah.saud-fatmi@futurenet.com (Namerah Saud Fatmi)",
      title: "How to view saved passwords in Chrome",
      description:
        "You might have saved a bunch of your online accounts' passwords in Chrome. Wondering where you can find them all? Here's how to view saved passwords in Chrome.",
      url: "https://www.androidcentral.com/apps-software/how-to-view-saved-passwords-in-chrome",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/zsPhiENpDJYbi7mp8t4AgZ-1200-80.jpg",
      publishedAt: "2023-10-03T08:13:29Z",
      content:
        "Every time you enter an ID and password on Google Chrome, it asks you whether you'd like to save it. But where does that information go once you've hit save? This is where a little something called G… [+2703 chars]",
    },
    {
      source: { id: null, name: "Windows Central" },
      author: "ben.wilson@windowscentral.com (Ben Wilson)",
      title:
        "How to check CPU temperatures on Windows 11: Fast and free methods",
      description:
        "If your computer feels sluggish, checking the CPU temperature is one of the best ways to diagnose potential throttling issues. Here's how to check CPU temps on Windows 11.",
      url: "https://www.windowscentral.com/hardware/cpu-gpu-components/how-to-check-cpu-temps-on-windows-11",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/3NPQiM9R3t56yygWoHRwFM-1200-80.jpg",
      publishedAt: "2023-10-04T12:00:02Z",
      content:
        "Whether building a customized desktop PC or using a ready-made laptop, checking the CPU temperature is one of the best ways to check for issues that might cause slowdowns on Windows 11. Various CPU c… [+7668 chars]",
    },
  ];

  PhoneArticle = [
    {
      source: { id: "wired", name: "Wired" },
      author: "David Nield",
      title: "How to Take Back Control of Your Photo and Video Storage",
      description:
        "Apple's iCloud and Google Photos make file storage easy—as long as your memories stay on someone else's server. There's another way.",
      url: "https://www.wired.com/story/how-to-take-back-control-photos-videos/",
      urlToImage:
        "https://media.wired.com/photos/64fbb045ce986fc4eb0e5520/191:100/w_1280,c_limit/How-to-Take-Back-Control-of-Your-Photo-and-Video-Storage-Gear-GettyImages-696155135.jpg",
      publishedAt: "2023-09-10T11:00:00Z",
      content:
        "This then leaves you with the question of how to get any new photos and videos you take on your phone off your device and on to your computer, where they can join everything you've just downloaded fr… [+2198 chars]",
    },
    {
      source: { id: null, name: "CNET" },
      author: "Jessica Dolcourt",
      title:
        "Before Google's Android Ruled the World, It Had to Get Radical. I Had a Front-Row Seat - CNET",
      description:
        "Android is everywhere today, but Google's mobile software initially struggled. I reviewed the first clumsy, unstable apps that helped spark a phone revolution.",
      url: "https://www.cnet.com/tech/mobile/before-googles-android-ruled-the-world-it-had-to-get-radical-i-had-a-front-row-seat/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/7aa56de56969bf0c4cb493e8f4ece816fffa921d/hub/2023/09/15/ea8381f2-079d-4cb8-954e-a406a66cc3df/t5a9763-enhanced-2.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2023-09-19T07:15:03Z",
      content:
        "Trapped in a bean bag chair, I stretched for the phone held just beyond my reach. This was no ordinary smartphone of the day. It was the T-Mobile G1, known as the HTC Dream outside the US, the first-… [+11226 chars]",
    },
    {
      source: { id: "engadget", name: "Engadget" },
      author: "Katie Malone",
      title:
        "MGM Resorts hit by 'cybersecurity issue,' leading to massive outage",
      description:
        "MGM Resorts confirmed on Monday that it was hit by a cybersecurity issue, shutting down systems across its suite of casinos. The hotel giant owns a notable swath of casinos along the Las Vegas Strip, where some gamblers reported slot machines being taken offl…",
      url: "https://www.engadget.com/mgm-resorts-hit-by-cybersecurity-issue-leading-to-massive-outage-215205561.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/SSom1U9JIXAnRJulB2rhAA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-07/0d960190-24b1-11ee-aebe-bc9c7e79b144",
      publishedAt: "2023-09-11T21:52:05Z",
      content:
        "MGM Resorts confirmed on Monday that it was hit by a cybersecurity issue, shutting down systems across its suite of casinos. The hotel giant owns a notable swath of casinos along the Las Vegas Strip,… [+1016 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      popularArticle: this.PopularArticle,
      techArticle: this.TechArticle,
      phoneArticle: this.PhoneArticle,
      loading: false,
      trendinNews: this.articles,
    };
  }

  async componentDidMount() {
    // let url = `http://127.0.0.1:8000/trending-list/`;
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b6ae2143741e400ab12232d4b3fd3e53&pageSize=8`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      // totalResults: parsedData.totalResults,
    });
  }

  render() {
    // let { title, description, urlToImage, url } = this.props;
    return (
      <>
        {/* <!--==start features section ==--> */}
        <section className="features-wrapper section-grap">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-7 features-left-sec">
                <div className="section-wrap-title">
                  <h1>Featured</h1>
                  <p className="subtitle">
                    When we think about machine learning, our minds often jump
                    to datacenters full of sweating, overheating GPUs. However,
                    lighter-weight hardware can also be used to these ends, as
                    demonstrated by{" "}
                    <Link
                      to="https://hackaday.com/2023/09/14/machine-learning-robot-runs-arduino-uno/"
                      className="text-primary"
                    >
                      …read more
                    </Link>
                  </p>
                </div>
                <div className="features-wrap-content">
                  <div className="wrap-content-img">
                    <Link to="singlePage.html">
                      <img
                        src="https://hackaday.com/wp-content/uploads/2023/09/Machine-Learning-on-Arduino-Uno-was-a-Good-Idea-7-32-screenshot-1.png"
                        className="w-100"
                        alt="Features images"
                      />
                    </Link>
                  </div>
                  <div className="features-wrap-txt">
                    <Link to="https://hackaday.com/2023/09/14/machine-learning-robot-runs-arduino-uno/">
                      <h3>Machine Learning Robot Runs Arduino Uno </h3>
                    </Link>
                    <p>
                      The robot is charged with autonomously navigating a simple
                      racetrack delineated by cardboard barriers. The robot is
                      based on a two-wheeled design with tank-style steering.
                      Controlled by an Arduino Uno, the robot uses a Slamtec
                      RPLIDAR sensor to help map out its surroundings. The
                      microcontroller is also armed with a Bluetooth link and an
                      SD card for storage.
                    </p>
                    <Link
                      className="check-out first"
                      to="https://hackaday.com/2023/09/14/machine-learning-robot-runs-arduino-uno/"
                    >
                      Check it out
                      <i className="fas fa-caret-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-5 features-right-sec">
                <div className="section-wrap-title">
                  <h1>Trending News </h1>
                  <p className="subtitle">
                    Update news of every corner of the world.
                  </p>
                </div>
                {/* {this.state.articles.map((article) => {
                  return (
                    <div className="wrap-right-content" key={article?.id}>
                      <div className="related-posts">
                        <div className="wrap-content-img">
                          <Link to={`/details/${article?.id}/`}>
                            <img
                              src={article?.urlToImage}
                              className="w-100"
                              alt="Features images"
                            />
                          </Link>
                        </div>
                        <div className="features-wrap-txt">
                          <Link to={`/details/${article.id}/`}>
                            <h4>{article?.title?.slice(0, 20)}</h4>
                            <p>{article?.description?.slice(0, 60)}...</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })} */}
                {this.state.articles.map((article) => {
                  return (
                    <div className="wrap-right-content" key={article.url}>
                      <div className="related-posts">
                        <div className="wrap-content-img">
                          <Link to={article.url}>
                            <img
                              src={article.urlToImage?article.urlToImage:"https://images.livemint.com/img/2023/11/14/1140x641/Pandoras_Cluster_Abell_2744_1699944827059_1699944842482.jpg"}
                              className="w-100"
                              alt="Features images"
                            />
                          </Link>
                        </div>
                        <div className="features-wrap-txt">
                          <Link to={article.url}>
                            <h4>{article?.title?.slice(0, 20)}</h4>
                            <p>{article?.description?.slice(0, 60)}...</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        {/* <!--==end features section ==--> */}

        {/* <!--== start of popular section --> */}
        <section className="popular-wrapper section-grap">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-wrap-title">
                  <h1>Most Popular </h1>
                  <p className="subtitle">
                    Today's most popular news for 'Programmer'.
                  </p>
                </div>
              </div>
            </div>
            <div className="row popular-wrap-row">
              {this.state.popularArticle.map((popArt) => {
                return (
                  <div className="col-md-4" key={popArt.url}>
                    <div className="popular-wrap-post">
                      <div className="wrap-img">
                        <Link to={popArt.url}>
                          <img
                            src={popArt.urlToImage}
                            className="w-100"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="wrap-post-txt">
                        <Link to={popArt.url}>
                          <h3>{popArt.title}</h3>
                          <p>
                            {popArt.description}
                            <Link to={popArt.url}> Read the rest</Link>
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* <div className="col-md-4">
                  <div className="popular-wrap-post">
                    <div className="wrap-img">
                      <Link to="/details/2">
                        <img
                          src="img/popular-img2.jpg"
                          className="w-100"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="wrap-post-txt">
                      <Link to="/details/2">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>
                          Most standing desks are smaller than traditional desks,
                          so it’s important to plan for making the most of limited
                          space. We've got tips to make it happen.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="popular-wrap-post">
                    <div className="wrap-img">
                      <Link to="singlePage.html">
                        <img
                          src="img/popular-img3.jpg"
                          className="w-100"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="wrap-post-txt">
                      <Link to="singlePage.html">
                        <h3>How to care for cast iron</h3>
                        <p>
                          Most standing desks are smaller than traditional desks,
                          so it’s important to plan for making the most of limited
                          space. We've got tips to make it happen.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div> */}
            </div>
          </div>
        </section>
        {/* <!--== end of popular section --> */}

        {/* <!--==start of widget section ==--> */}
        <section className="widget-inner-wrap section-grap">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="widget-wrap-title">
                  <h1>Best News </h1>
                </div>
              </div>
              <div className="col-md-12 widget-tab-list">
                <div className="row">
                  <div className="col-md-12 text-center ">
                    <ul className="nav flex-column nav-pills " id="v-pills-tab">
                      <li>
                        <Link
                          className="nav-link  active"
                          id="v-pills-home-tab"
                          data-toggle="pill"
                          to="#v-pills-home"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="false"
                        >
                          Our Mission{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="nav-link"
                          id="v-pills-profile-tab"
                          data-toggle="pill"
                          to="#v-pills-profile"
                          role="tab"
                          aria-controls="v-pills-messages"
                          aria-selected="false"
                        >
                          {" "}
                          Why You Should Trust Us{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="nav-link"
                          id="v-pills-messages-tab"
                          data-toggle="pill"
                          to="#v-pills-messages"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false"
                        >
                          Why We're Different{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-12">
                    <div className="tab-content" id="v-pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-home"
                        role="tabpanel"
                        aria-labelledby="v-pills-home-tab"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="widget-tab-img">
                              <Link to="singlePage.html">
                                <img
                                  src="img/popular-img3.jpg"
                                  className="w-100"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="widget-tab-txt">
                              <h3>
                                Our mission is to <span> simplify </span> news readability.
                              </h3>
                              <p>
                                In many cases, we build our own test equipment
                                to evaluate products and test them against each
                                other. Why? Because reliable testing requires
                                repeatable tests, and just handing products to
                                people to try out isn't enough. While we test
                                many of the products we review, for some product
                                categories we solely use research and consumer
                                feedback.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-profile"
                        role="tabpanel"
                        aria-labelledby="v-pills-profile-tab"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="widget-tab-img">
                              <Link to="singlePage.html">
                                <img
                                  src="img/features-img1.jpeg"
                                  className="w-100"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="widget-tab-txt">
                              <h3>Research, testing, and consumer feedback.</h3>
                              <p>
                                In many cases, we build our own test equipment
                                to evaluate products and test them against each
                                other. Why? Because reliable testing requires
                                repeatable tests, and just handing products to
                                people to try out isn't enough. While we test
                                many of the products we review, for some product
                                categories we solely use research and consumer
                                feedback.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-messages"
                        role="tabpanel"
                        aria-labelledby="v-pills-messages-tab"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="widget-tab-img">
                              <Link to="singlePage.html">
                                <img
                                  src="img/popular-img2.jpg"
                                  className="w-100"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="widget-tab-txt">
                              <h3>Research, testing, and consumer feedback.</h3>
                              <p>
                                In many cases, we build our own test equipment
                                to evaluate products and test them against each
                                other. Why? Because reliable testing requires
                                repeatable tests, and just handing products to
                                people to try out isn't enough. While we test
                                many of the products we review, for some product
                                categories we solely use research and consumer
                                feedback.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--==end of widget section ==--> */}

        {/* <!--==start youtube-video-wrap ==--> */}
        <section className="features-wrapper youtube-video-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-wrap-title yt-vd-title">
                  <h1>Watch us on YouTube </h1>
                </div>
              </div>
              <div className="col-md-7 features-left-sec">
                <div className="section-wrap-title">
                  <p className="subtitle">Featured YouTube Videos </p>
                </div>
                <div className="features-wrap-content">
                  <div className="wrap-content-img video">
                    <iframe
                      title="homeFrame"
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/-8Fe1zJP7Wg?si=axtfqvhSuL1ng8U4"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="features-wrap-txt">
                    <Link to="singlePage.html">
                      <h3>
                        Red Star Belgrade: Fans never stop believing 1991
                        European champions will rise again
                      </h3>
                    </Link>
                    <p>
                      Red Star Belgrade were European champions in 1991, fans
                      will tell you that puts them on a par with Manchester City
                      and bigger than Paris St-Germain.
                    </p>
                    <Link
                      className="check-out"
                      to="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1260C/production/_131067257_whatsubject.jpg"
                    >
                      Read The Review
                      <i className="fas fa-caret-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-5 features-right-sec yt-vd-content">
                <div className="section-wrap-title">
                  <h5>Other Videos</h5>
                </div>
                <div className="wrap-right-content">
                  <div className="related-posts">
                    <div className="wrap-content-img">
                      <Link to="categoryPage.html">
                        <iframe
                          title="homeFrame"
                          width="100%"
                          height="50%"
                          src="https://www.youtube.com/embed/-8Fe1zJP7Wg?si=axtfqvhSuL1ng8U4"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </Link>
                    </div>
                    <div className="features-wrap-txt">
                      <Link to="categoryPage.html">
                        <h4>Watch free Champions League live</h4>
                        <p>
                          Free Champions League live streams are back this
                          season for multiple matches
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div className="related-posts">
                    <div className="wrap-content-img">
                      <Link to="https://www.cnet.com/tech/services-and-software/watch-champions-league-soccer-livestream-man-united-vs-galatasaray-from-anywhere/">
                        <iframe
                          title="homeFrame"
                          width="100%"
                          height="50%"
                          src="https://www.youtube.com/embed/h2MecPXzVbI?si=RAHTTV7hYI3wX_YD"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </Link>
                    </div>
                    <div className="features-wrap-txt">
                      <Link to="https://www.cnet.com/tech/services-and-software/watch-champions-league-soccer-livestream-man-united-vs-galatasaray-from-anywhere/">
                        <h4>Champions League Soccer</h4>
                        <p>
                          Group H's two unbeaten sides go head-to-head in an
                          Iberian derby at the Estádio do Dragão.
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div className="related-posts">
                    <div className="wrap-content-img">
                      <Link to="https://www.cnet.com/tech/services-and-software/watch-champions-league-soccer-livestream-man-united-vs-galatasaray-from-anywhere/">
                        <iframe
                          title="homeFrame"
                          width="100%"
                          height="50%"
                          src="https://www.youtube.com/embed/evHV6AsFvq8?si=ERHspOEcH8hlnGMg"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </Link>
                    </div>
                    <div className="features-wrap-txt">
                      <Link to="https://www.cnet.com/tech/services-and-software/watch-champions-league-soccer-livestream-man-united-vs-galatasaray-from-anywhere/">
                        <h4>Livestream Napoli vs. Real Madrid</h4>
                        <p>
                          The champions of Italy and the Spanish giants clash
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div className="related-posts">
                    <div className="wrap-content-img">
                      <Link to="https://www.cnet.com/tech/services-and-software/watch-champions-league-soccer-livestream-man-united-vs-galatasaray-from-anywhere/">
                        <iframe
                          title="homeFrame"
                          width="100%"
                          height="50%"
                          src="https://www.youtube.com/embed/9MgYs3J6ZH8?si=H65NZxQxrdFRcR5-"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </Link>
                    </div>
                    <div className="features-wrap-txt">
                      <Link to="https://www.cnet.com/tech/services-and-software/watch-champions-league-soccer-livestream-man-united-vs-galatasaray-from-anywhere/">
                        <h4>
                          Livestream Man United vs. Galatasaray From Anywhere
                        </h4>
                        <p>
                          The Red Devils look to put their Premier League woes
                          behind them
                        </p>
                      </Link>
                    </div>
                  </div>
                  {/* <div className="related-posts">
                    <div className="wrap-content-img">
                      <Link to="categoryPage.html">
                        <img
                          src="img/features-img2.jpeg"
                          className="w-100"
                          alt="Features images"
                        />
                      </Link>
                    </div>
                    <div className="features-wrap-txt">
                      <Link to="categoryPage.html">
                        <h4>Best Snow Blowers</h4>
                        <p>
                          Link snow blower is Link must-have for those with
                          driveways in tough winters.
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div className="related-posts">
                    <div className="wrap-content-img">
                      <Link to="categoryPage.html">
                        <img
                          src="img/features-img3.jpg"
                          className="w-100"
                          alt="Features images"
                        />
                      </Link>
                    </div>
                    <div className="features-wrap-txt">
                      <Link to="categoryPage.html">
                        <h4>Best Snow Blowers</h4>
                        <p>
                          Link snow blower is Link must-have for those with
                          driveways in tough winters.
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div className="related-posts">
                    <div className="wrap-content-img">
                      <Link to="categoryPage.html">
                        <img
                          src="img/blog-img4.jpg"
                          className="w-100"
                          alt="Features images"
                        />
                      </Link>
                    </div>
                    <div className="features-wrap-txt">
                      <Link to="categoryPage.html">
                        <h4>Best Snow Blowers</h4>
                        <p>
                          Link snow blower is Link must-have for those with
                          driveways in tough winters.
                        </p>
                      </Link>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--==end youtube-video-wrap ==--> */}

        {/* <!-- start review title --> */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-wrap-title catagory-anchor-title">
                <h1>TECHS </h1>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- start review title --> */}

        {/* <!--==start of anchor catagory wrap ==--> */}
        <section className="anchor-catagory-wrap ">
          <div className="container">
            <div className="row">
              <div className="col-md-6 catagory-links-content features-left-sec">
                <div className="section-wrap-title">
                  <Link to="categoryPage.html" className="anchor-link">
                    Computers
                  </Link>
                  <Link to="singlePage.html" className="subtitle">
                    HP Spectre is a foldable PC that becomes a laptop, tablet or
                    desktop
                  </Link>
                </div>
                <div className="features-wrap-content">
                  <div className="wrap-content-img">
                    <Link to="https://venturebeat.com/games/hp-spectre-is-a-foldable-pc-that-becomes-a-laptop-tablet-or-desktop/">
                      <img
                        src="https://venturebeat.com/wp-content/uploads/2023/09/hp-spectre-2.jpg?w=1200&strip=all"
                        className="w-100"
                        alt="Features images"
                      />
                    </Link>
                  </div>
                  <div className="features-wrap-txt catgy-anchor-txt">
                    <p>
                      We're thrilled to announce the return of GamesBeat Next,
                      hosted in San Francisco this October, where we will
                      explore the theme of \"Playing the Edge.\" Apply to speak
                      here and learn more about sponsors…
                    </p>
                    <Link
                      className="check-out"
                      to="https://venturebeat.com/games/hp-spectre-is-a-foldable-pc-that-becomes-a-laptop-tablet-or-desktop/"
                    >
                      Read The Full Article
                      <i className="fas fa-caret-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 features-right-sec catagory-content-wrapper">
                <div className="section-wrap-title">
                  <Link className="check-out" to="/category">
                    Read The Best Mobile News
                    <i className="fas fa-caret-right"></i>
                  </Link>
                </div>
                <div className="row">
                  {this.state.phoneArticle.map((phone) => {
                    return (
                      <div className="col-md-4">
                        <div className="catagory-related-link">
                          <div className="related-post-img">
                            <Link to={phone.url}>
                              <img
                                src={phone.urlToImage}
                                alt="Related"
                                className="w-100"
                              />
                            </Link>
                          </div>
                          <div className="related-post-txt">
                            <Link to="categoryPage.html">
                              <h3>B{phone.title.slice(0, 30)}...</h3>
                              <p>
                                {phone.description.slice(0, 70)}{" "}
                                <span className="text-primary">
                                  see more...
                                </span>
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* <div className="col-md-4">
                    <div className="catagory-related-link">
                      <div className="related-post-img">
                        <Link to="categoryPage.html">
                          <img
                            src="img/blog-img3.jpg"
                            alt="Related"
                            className="w-100"
                          />
                        </Link>
                      </div>
                      <div className="related-post-txt">
                        <Link to="categoryPage.html">
                          <h3>Best Waffle Makers</h3>
                          <p>
                            There are few things better than homemade, fluffy
                            waffles in the morning.
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="catagory-related-link">
                      <div className="related-post-img">
                        <Link to="categoryPage.html">
                          <img
                            src="img/blog-img4.jpg"
                            alt="Related"
                            className="w-100"
                          />
                        </Link>
                      </div>
                      <div className="related-post-txt">
                        <Link to="categoryPage.html">
                          <h3>Best Waffle Makers</h3>
                          <p>
                            There are few things better than homemade, fluffy
                            waffles in the morning.
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div> */}
                  <div className="col-md-12">
                    <div className="new-line"></div>
                  </div>
                  <div className="col-md-6">
                    <div className="catagory-useful-links">
                      <ul>
                        <li>
                          {" "}
                          <Link to="/category">Qualcomm</Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/category">Samsung</Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/category">Apple</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="catagory-useful-links">
                      <ul>
                        <li>
                          {" "}
                          <Link to="/category">Huawei</Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/category">AMD</Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/category">Intel</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="new-line divider"></div>
            <div className="row catagory-blog-wrap">
              {this.state.techArticle.map((tech) => {
                return (
                  <div className="col-md-4" key={tech.url}>
                    <div className="catagory-blog-post">
                      <div className="section-wrap-title">
                        <Link to="categoryPage.html" className="blog-link">
                          office
                        </Link>
                        <Link to={tech.url} className="read-more">
                          See all
                          <i className="fas fa-caret-right"></i>
                        </Link>
                      </div>
                      <div className="catagory-blog-post-img">
                        <Link to={tech.url}>
                          <img
                            src={
                              tech.urlToImage
                                ? tech.urlToImage
                                : "https://www.businessinsider.com/public/assets/BI/US/og-image-logo-social.png"
                            }
                            className="w-100"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="catagory-blog-post-txt">
                        <h3>{tech.title}</h3>
                        <p>{tech.description}</p>
                        {/* <div className="catagory-useful-links mbmt">
                          <ul>
                            <li>
                              {" "}
                              <Link to="categoryPage.html">
                                Best Coffee Makers{" "}
                              </Link>
                            </li>
                            <li>
                              {" "}
                              <Link to="categoryPage.html">
                                Best Coffee Makers{" "}
                              </Link>
                            </li>
                            <li>
                              {" "}
                              <Link to="categoryPage.html">
                                Best Coffee Makers{" "}
                              </Link>
                            </li>
                          </ul>
                        </div> */}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* <div className="col-md-4">
                <div className="catagory-blog-post">
                  <div className="section-wrap-title">
                    <Link to="categoryPage.html" className="blog-link">
                      office
                    </Link>
                    <Link to="singlePage.html" className="read-more">
                      See all
                      <i className="fas fa-caret-right"></i>
                    </Link>
                  </div>
                  <div className="catagory-blog-post-img">
                    <Link to="categoryPage.html">
                      <img src="img/blog-img6.jpg" className="w-100" alt="" />
                    </Link>
                  </div>
                  <div className="catagory-blog-post-txt">
                    <h3>Best Desktop Computers</h3>
                    <p>
                      You can find quality all-in-one packages for desktop
                      computers that include Link keyboard and monitor.
                    </p>
                    <div className="catagory-useful-links mbmt">
                      <ul>
                        <li>
                          {" "}
                          <Link to="categoryPage.html">
                            Best Coffee Makers{" "}
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="categoryPage.html">
                            Best Coffee Makers{" "}
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="categoryPage.html">
                            Best Coffee Makers{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="catagory-blog-post">
                  <div className="section-wrap-title">
                    <Link to="categoryPage.html" className="blog-link">
                      office
                    </Link>
                    <Link to="singlePage.html" className="read-more">
                      See all
                      <i className="fas fa-caret-right"></i>
                    </Link>
                  </div>
                  <div className="catagory-blog-post-img">
                    <Link to="categoryPage.html">
                      <img src="img/blog-img7.jpeg" className="w-100" alt="" />
                    </Link>
                  </div>
                  <div className="catagory-blog-post-txt">
                    <h3>Best Desktop Computers</h3>
                    <p>
                      You can find quality all-in-one packages for desktop
                      computers that include Link keyboard and monitor.
                    </p>
                    <div className="catagory-useful-links mbmt">
                      <ul>
                        <li>
                          {" "}
                          <Link to="categoryPage.html">
                            Best Coffee Makers{" "}
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="categoryPage.html">
                            Best Coffee Makers{" "}
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="categoryPage.html">
                            Best Coffee Makers{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-md-4">
                <div className="catagory-blog-post">
                  <div className="section-wrap-title">
                    <Link to="categoryPage.html" className="blog-link">
                      office
                    </Link>
                    <Link to="singlePage.html" className="read-more">
                      See all
                      <i className="fas fa-caret-right"></i>
                    </Link>
                  </div>
                  <div className="catagory-blog-post-img">
                    <Link to="categoryPage.html">
                      <img src="img/blog-img8.jpg" className="w-100" alt="" />
                    </Link>
                  </div>
                  <div className="catagory-blog-post-txt">
                    <h3>Best Desktop Computers</h3>
                    <p>
                      You can find quality all-in-one packages for desktop
                      computers that include Link keyboard and monitor.
                    </p>
                    <div className="catagory-useful-links mbmt">
                      <ul>
                        <li>
                          {" "}
                          <Link to="categoryPage.html">
                            Best Coffee Makers{" "}
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="categoryPage.html">
                            Best Coffee Makers{" "}
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="categoryPage.html">
                            Best Coffee Makers{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-md-4">
                <div className="catagory-blog-post">
                  <div className="section-wrap-title">
                    <Link to="categoryPage.html" className="blog-link">
                      office
                    </Link>
                    <Link to="singlePage.html" className="read-more">
                      See all
                      <i className="fas fa-caret-right"></i>
                    </Link>
                  </div>
                  <div className="catagory-blog-post-img">
                    <Link to="categoryPage.html">
                      <img src="img/blog-img9.jpg" className="w-100" alt="" />
                    </Link>
                  </div>
                  <div className="catagory-blog-post-txt">
                    <h3>Best Desktop Computers</h3>
                    <p>
                      You can find quality all-in-one packages for desktop
                      computers that include Link keyboard and monitor.
                    </p>
                    <div className="catagory-useful-links mbmt">
                      <ul>
                        <li>
                          {" "}
                          <Link to="categoryPage.html">
                            Best Coffee Makers{" "}
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="categoryPage.html">
                            Best Coffee Makers{" "}
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="categoryPage.html">
                            Best Coffee Makers{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="catagory-blog-post">
                  <div className="section-wrap-title">
                    <Link to="categoryPage.html" className="blog-link">
                      office
                    </Link>
                    <Link to="singlePage.html" className="read-more">
                      See all
                      <i className="fas fa-caret-right"></i>
                    </Link>
                  </div>
                  <div className="catagory-blog-post-img">
                    <Link to="categoryPage.html">
                      <img src="img/blog-img1.jpg" className="w-100" alt="" />
                    </Link>
                  </div>
                  <div className="catagory-blog-post-txt">
                    <h3>Best Desktop Computers</h3>
                    <p>
                      You can find quality all-in-one packages for desktop
                      computers that include Link keyboard and monitor.
                    </p>
                    <div className="catagory-useful-links mbmt">
                      <ul>
                        <li>
                          {" "}
                          <Link to="categoryPage.html">
                            Best Coffee Makers{" "}
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="categoryPage.html">
                            Best Coffee Makers{" "}
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="categoryPage.html">
                            Best Coffee Makers{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/* <!--==end of anchor catagory wrap ==--> */}
      </>
    );
  }
}
