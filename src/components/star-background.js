import Head from 'next/head';
import { useEffect, useRef } from 'react';

export default function StarBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Load external scripts dynamically
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });
    };

    // Load all required scripts and initialize the animation after they are loaded
    const loadExternalScripts = async () => {
      try {
        await loadScript('https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js');
        await loadScript('https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js');
        await loadScript('https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js');
        // Re-initialize the animation logic after scripts are loaded
        if (window.initDemo) {
          window.initDemo(canvasRef.current); // Assuming demo.js has a function to initialize the animation
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadExternalScripts();

    return () => {
      // Cleanup scripts if needed
    };
  }, []);

  return (
    <>
      <Head>
        <title>CodePen Demo - Explore Space</title>
        <meta name="robots" content="noindex" />
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
        <style>
          {`
            .large-header {
              position: relative;
              width: 100%;
              background: #111;
              overflow: hidden;
              background-size: cover;
              background-position: center center;
              z-index: 1;
            }
            
            #demo-canvas {
              pointer-events: none;
            }


            .demo .large-header {
              background-color: #000000;
            }

            .main-title {
              position: absolute;
              margin: 0;
              padding: 0;
              color: #F9F1E9;
              text-align: center;
              top: 50%;
              left: 50%;
              transform: translate3d(-50%, -50%, 0);
            }

            .demo .main-title {
              text-transform: uppercase;
              font-size: 4.2em;
              letter-spacing: 0.1em;
            }

            .main-title .thin {
              font-weight: 200;
            }

            @media only screen and (max-width: 768px) {
              .demo .main-title {
                font-size: 3em;
              }
            }
          `}
        </style>
      </Head>

      <div className="container demo">
        <div className="content">
          <div id="large-header" className="large-header" style={{ height: '392px' }}>
            {/* Use canvasRef to target the canvas element */}
            <canvas ref={canvasRef} id="demo-canvas" width="1246" height="392"></canvas>
            <h1 className="main-title">
              <span className="thin">Explore</span> Space
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}