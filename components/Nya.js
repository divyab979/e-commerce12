import React from 'react';

const Nya = () => {
  return (
    <div>
      <head>
        <title>Slideshow</title>
        <link href="node_modules/tailwindcss/tailwind.css" rel="stylesheet" />
      </head>
      <body>
        <div id="slideshow" className="slideshow-container mt-10">
          <div className="flex">
            <div className="flex-none slideshow-slide">
              <img src="e1.png" className="w-full" alt="Slide 1" />
            </div>
            <div className="flex-none slideshow-slide">
              <img src="e2.png" className="w-full" alt="Slide 2" />
            </div>
            <div className="flex-none slideshow-slide">
              <img src="e3.png" className="w-full" alt="Slide 3" />
            </div>
            <div className="flex-none slideshow-slide">
              <img src="e4.png" className="w-full" alt="Slide 4" />
            </div>
          </div>

          <script src="Slides.js" />
        </div>
      </body>
    </div>
  );
};

export default Nya;
