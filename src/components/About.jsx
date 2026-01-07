import "../styles/About.css";

function About() {
  return (
    <section id="about">

      {/* FIRST FULL WIDTH IMAGE */}
      <img
        src="/hero-bg.jpg"
        className="hero-banner"
        alt="Main Hero Banner"
      />

      <div className="about-container">

        {/* BIG QUOTE TEXT */}
       <div className="big-text">
              "Start with small steps.<br/>
              Stay consistent every day.<br/>
           Big success will follow automatically."
      </div>

        {/* SECOND IMAGE - SMALL LIKE BEFORE */}
        <img
          src="/hero-bg.jpg"
          className="portfolio-image"
          alt="Second Image"
        />

         {/* TEXT CONTENT EXACTLY AFTER SECOND IMAGE */}
        <div className="about-text">

          <p>
            When I look back at my journey and think about the advice I would give to my 20-year old self,  
            I say to myself to follow one simple mantra:
          </p>

         <div id="mantra" class="center-para">
            <p>
                Start with small steps.<br/>
                Stay consistent every day.<br/>
                Big success will follow automatically.
            </p>
          </div>

          <p>
            When asked what truly matters in life, I remind myself that awareness is everything.  
            Skills, success, and opportunities only make sense when they come from understanding.  
            Right now, my purpose is to create that awareness through technology and learning.
          </p>

          <p>
            I believe growth is a journey built day by day. It does not happen by chance or shortcuts.  
            It happens when you explore your potential, work with discipline, and stay honest to your craft.  
            That is the mindset I find myself most drawn toward at this stage of my career.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;
