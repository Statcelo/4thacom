
import React from 'react';

const App = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#FFF8F2', color: '#2E2E2E', padding: '2rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img src="/profile.jpg" alt="Uncle Stat" style={{ borderRadius: '1rem', width: '200px', height: 'auto', marginBottom: '1rem' }} />
        <h1>Uncle Stat</h1>
        <p style={{ fontStyle: 'italic', color: '#D9777B' }}>
          “The greatness of a community is most accurately measured by the compassionate actions of its members.”
        </p>
      </header>
      <section style={{ marginBottom: '2rem' }}>
        <h2>About Me</h2>
        <p>
          I’m a community builder and emotional intelligence coach. I help people grow by creating spaces for real conversations, 
          inner work, and collective healing. Through coaching and my community-centered podcast, I guide others to reconnect 
          with themselves and each other—with clarity, vulnerability, and care.
        </p>
        <p>
          I don’t just talk about change—I help people live it, feel it, and build with it. My work transforms how we show up—in 
          relationships, in purpose, and in the world. That’s why I don’t undersell what I do. I price based on the impact, 
          not the hours. If you’re ready to grow, reflect, and build something meaningful—I’m all in.
        </p>
      </section>
      <section style={{ marginBottom: '2rem' }}>
        <h2>Offerings</h2>
        <ul>
          <li><strong>1:1 Coaching:</strong> Emotional growth sessions rooted in clarity and compassion.</li>
          <li><strong>For The Community Podcast:</strong> Storytelling, healing, and connection for Black and Brown communities.</li>
        </ul>
      </section>
      <section style={{ marginBottom: '2rem' }}>
        <h2>Testimonials</h2>
        <blockquote>
          “Alex’s coaching helped me gain clarity and confidence in both my personal and professional goals. He asked the right 
          questions that made me think deeper and take real action. I always felt supported, yet challenged to grow—I credit 
          his insight and guidance.”<br/>
          <strong>– Gabrielle</strong>
        </blockquote>
        <blockquote>
          “Alex brings a rare mix of empathy, wisdom, and consistency. He creates space for honest conversations without 
          judgment, and his guidance has helped me navigate some of the most difficult moments of my life. His presence is 
          steady, and his support never wavers. It’s hard to find someone who truly shows up like that—I’m grateful to have 
          worked with him.”<br/>
          <strong>– Alexis</strong>
        </blockquote>
      </section>
      <footer style={{ textAlign: 'center', marginTop: '4rem', fontSize: '0.9rem', color: '#888' }}>
        <p>Built with love by Uncle Stat</p>
        <a href="https://calendly.com" style={{ color: '#D9777B', textDecoration: 'none' }}>Book a Session</a>
      </footer>
    </div>
  );
};

export default App;
