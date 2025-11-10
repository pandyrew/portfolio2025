function AboutMeApp() {
  return (
    <div
      style={{
        background:
          "url('/desktop/desktop-apps/geocities_background.png') repeat",
        minHeight: "100%",
        padding: "20px",
        fontFamily: "Times New Roman, serif",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "10px",
          }}
        >
          <img
            src="/desktop/about-me.svg"
            alt=""
            style={{ width: "100px", height: "100px" }}
          />
          <h1
            style={{
              fontSize: "40px",
              color: "#FF00FF",
              textShadow: "3px 3px 0px #0000FF",
              fontFamily: "Impact, Arial Black, sans-serif",
              margin: "0",
            }}
          >
            Welcome to AndrewVille
          </h1>
          <img
            src="/desktop/about-me.svg"
            alt=""
            style={{ width: "100px", height: "100px" }}
          />
        </div>
      </div>

      <table
        border="5"
        cellPadding="10"
        cellSpacing="0"
        style={{
          width: "100%",
          backgroundColor: "#FFFF00",
          borderColor: "#FF00FF",
          marginBottom: "20px",
        }}
      >
        <tr>
          <td
            style={{
              backgroundColor: "#00FFFF",
              textAlign: "center",
              fontSize: "28px",
              fontWeight: "bold",
              color: "#0000FF",
              fontFamily: "Impact, Arial Black, sans-serif",
            }}
          >
            ABOUT ME
          </td>
        </tr>
      </table>

      <h2
        style={{
          fontSize: "32px",
          color: "#0000FF",
          textDecoration: "underline",
          marginBottom: "15px",
          marginTop: "20px",
          textAlign: "center",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: "bold",
        }}
      >
        <span style={{ color: "#FF0000" }}>A</span>
        <span style={{ color: "#FF7F00" }}>n</span>
        <span style={{ color: "#FFFF00" }}>d</span>
        <span style={{ color: "#00FF00" }}>r</span>
        <span style={{ color: "#0000FF" }}>e</span>
        <span style={{ color: "#4B0082" }}>w</span>{" "}
        <span style={{ color: "#9400D3" }}>H</span>
        <span style={{ color: "#FF0000" }}>w</span>
        <span style={{ color: "#FF7F00" }}>a</span>
        <span style={{ color: "#FFFF00" }}>n</span>
        <span style={{ color: "#00FF00" }}>g</span>
      </h2>

      <div
        style={{
          padding: "20px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            color: "#0000FF",
            lineHeight: "1.8",
            marginBottom: "15px",
            fontFamily: "Verdana, Arial, sans-serif",
          }}
        >
          <strong style={{ color: "#FF00FF", fontSize: "22px" }}>Hi!</strong>{" "}
          <span style={{ color: "#0000FF" }}>
            Welcome to my AWESOME homepage!
          </span>
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#0000FF",
            lineHeight: "1.8",
            marginBottom: "15px",
            fontFamily: "Times New Roman, serif",
          }}
        >
          I'm a{" "}
          <span
            style={{
              color: "#FF00FF",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Data Science Student
          </span>{" "}
          at{" "}
          <span
            style={{
              color: "#0000FF",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            UC Irvine
          </span>
          ! I'm also a{" "}
          <span
            style={{
              color: "#FF00FF",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Software Engineer
          </span>{" "}
          and{" "}
          <span
            style={{
              color: "#0000FF",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            NASA Researcher
          </span>
          !
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#0000FF",
            lineHeight: "1.8",
            marginBottom: "15px",
            fontFamily: "Times New Roman, serif",
          }}
        >
          I've worked at{" "}
          <strong style={{ color: "#FF00FF", fontSize: "18px" }}>Square</strong>{" "}
          and helped build{" "}
          <strong style={{ color: "#0000FF", fontSize: "18px" }}>
            NASA spacesuit technology
          </strong>
          ! Awesome Sauce?!
        </p>
      </div>

      <table
        border="5"
        cellPadding="10"
        cellSpacing="0"
        style={{
          width: "100%",
          backgroundColor: "#00FFFF",
          borderColor: "#FF00FF",
          border: "5px dashed #FF00FF",
          marginBottom: "20px",
        }}
      >
        <tr>
          <td
            style={{
              backgroundColor: "#FFFF00",
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#0000FF",
              fontFamily: "Impact, Arial Black, sans-serif",
            }}
          >
            CONTACT ME
          </td>
        </tr>
        <tr>
          <td
            style={{
              backgroundColor: "#FFE4E1",
              textAlign: "center",
              fontSize: "18px",
              color: "#0000FF",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            <strong style={{ color: "#FF00FF" }}>Email:</strong>{" "}
            <a
              href="mailto:hi@andyrew.dev"
              style={{
                color: "#0000FF",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              hi@andyrew.dev
            </a>
            <br />
            <strong style={{ color: "#FF00FF" }}>Location:</strong>{" "}
            <span style={{ color: "#0000FF", fontWeight: "bold" }}>
              Irvine, CA or San Jose, CA
            </span>
          </td>
        </tr>
      </table>

      <div
        style={{
          backgroundColor: "#FFB6C1",
          border: "8px double #0000FF",
          padding: "15px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "26px",
            color: "#0000FF",
            marginBottom: "10px",
            textDecoration: "underline",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: "bold",
          }}
        >
          What I Do
        </h3>
        <ul
          style={{
            listStyle: "none",
            padding: "0",
            fontSize: "16px",
            color: "#0000FF",
            lineHeight: "2",
            fontFamily: "Verdana, Arial, sans-serif",
          }}
        >
          <li>
            <strong style={{ color: "#FF00FF" }}>Coding</strong>{" "}
            <span style={{ color: "#0000FF" }}>awesome projects</span>
          </li>
          <li>
            <strong style={{ color: "#FF00FF" }}>Researching</strong>{" "}
            <span style={{ color: "#0000FF" }}>space technology</span>
          </li>
          <li>
            <strong style={{ color: "#FF00FF" }}>Organizing</strong>{" "}
            <span style={{ color: "#0000FF" }}>hackathons</span>
          </li>
          <li>
            <strong style={{ color: "#FF00FF" }}>Building</strong>{" "}
            <span style={{ color: "#0000FF" }}>AI/ML stuff</span>
          </li>
        </ul>
      </div>

      <div
        style={{
          backgroundColor: "#90EE90",
          border: "6px ridge #FF00FF",
          padding: "20px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "28px",
            color: "#0000FF",
            marginBottom: "15px",
            textDecoration: "underline overline",
            fontFamily: "Impact, Arial Black, sans-serif",
            fontWeight: "bold",
            textShadow: "2px 2px 4px #FF00FF",
          }}
        >
          MUSICAL TALENT
        </h3>
        <p
          style={{
            fontSize: "18px",
            color: "#0000FF",
            lineHeight: "1.8",
            marginBottom: "10px",
            fontFamily: "Verdana, Arial, sans-serif",
          }}
        >
          <strong style={{ color: "#FF00FF", fontSize: "22px" }}>
            I play 9 instruments!
          </strong>
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#0000FF",
            lineHeight: "2",
            fontFamily: "Times New Roman, serif",
          }}
        >
          <span style={{ color: "#FF00FF", fontWeight: "bold" }}>Piano</span>,{" "}
          <span style={{ color: "#0000FF", fontWeight: "bold" }}>Guitar</span>,{" "}
          <span style={{ color: "#FF00FF", fontWeight: "bold" }}>
            Bass Guitar
          </span>
          ,{" "}
          <span style={{ color: "#0000FF", fontWeight: "bold" }}>Marimba</span>,{" "}
          <span style={{ color: "#FF00FF", fontWeight: "bold" }}>
            Vibraphone
          </span>
          ,{" "}
          <span style={{ color: "#0000FF", fontWeight: "bold" }}>Clarinet</span>
          ,{" "}
          <span style={{ color: "#FF00FF", fontWeight: "bold" }}>
            Bass Clarinet
          </span>
          ,{" "}
          <span style={{ color: "#0000FF", fontWeight: "bold" }}>Drumset</span>,
          and{" "}
          <span style={{ color: "#FF00FF", fontWeight: "bold" }}>Flute</span>!
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#FFE4B5",
          border: "10px groove #0000FF",
          padding: "20px",
          marginBottom: "20px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <h3
          style={{
            fontSize: "26px",
            color: "#0000FF",
            marginBottom: "15px",
            textDecoration: "underline",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: "bold",
          }}
        >
          Things I Love
        </h3>
        <p
          className="blinking-orca"
          style={{
            fontSize: "18px",
            color: "#0000FF",
            lineHeight: "2.2",
            fontFamily: "Verdana, Arial, sans-serif",
            position: "relative",
            zIndex: "9999",
          }}
        >
          <strong style={{ color: "#FF00FF", fontSize: "20px" }}>
            I LOVE ORCAS!
          </strong>
          <br />
          <span style={{ color: "#0000FF" }}>
            They're the COOLEST animals ever!!!
          </span>
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginTop: "15px",
            flexWrap: "wrap",
          }}
        >
          <img
            src="/desktop/about-me/orca1.jpg"
            alt="Orca"
            style={{
              border: "5px solid #FF00FF",
              maxWidth: "250px",
              height: "auto",
            }}
          />
          <img
            src="/desktop/about-me/orca2.jpg"
            alt="Orca"
            style={{
              border: "5px solid #0000FF",
              maxWidth: "250px",
              height: "auto",
            }}
          />
        </div>
        <p
          style={{
            fontSize: "18px",
            color: "#0000FF",
            lineHeight: "2.2",
            fontFamily: "Verdana, Arial, sans-serif",
            marginTop: "15px",
          }}
        >
          <strong style={{ color: "#FF00FF", fontSize: "20px" }}>
            I love SF and NYC!
          </strong>
          <br />
          <span style={{ color: "#0000FF" }}>
            Two of the BEST cities in the world!
          </span>
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          <img
            src="/desktop/about-me/sf.JPG"
            alt="San Francisco"
            style={{
              border: "8px ridge #FF00FF",
              maxWidth: "400px",
              height: "auto",
            }}
          />
        </div>
        <p
          style={{
            fontSize: "18px",
            color: "#0000FF",
            lineHeight: "2.2",
            fontFamily: "Verdana, Arial, sans-serif",
            marginTop: "15px",
          }}
        >
          <strong style={{ color: "#FF00FF", fontSize: "20px" }}>
            I love cooking!
          </strong>
          <br />
          <span style={{ color: "#0000FF" }}>
            Making delicious food is AWESOME!
          </span>
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginTop: "15px",
            flexWrap: "wrap",
          }}
        >
          <img
            src="/desktop/about-me/food.JPG"
            alt="Food"
            style={{
              border: "6px double #0000FF",
              maxWidth: "250px",
              height: "auto",
            }}
          />
          <img
            src="/desktop/about-me/food2.JPG"
            alt="Food"
            style={{
              border: "6px double #FF00FF",
              maxWidth: "250px",
              height: "auto",
            }}
          />
        </div>
        <p
          style={{
            fontSize: "18px",
            color: "#0000FF",
            lineHeight: "2.2",
            fontFamily: "Verdana, Arial, sans-serif",
            marginTop: "15px",
          }}
        >
          <strong style={{ color: "#FF00FF", fontSize: "20px" }}>
            I love collecting fragrances!
          </strong>
          <br />
          <span style={{ color: "#0000FF" }}>
            I have{" "}
            <span style={{ color: "#FF00FF", fontWeight: "bold" }}>
              Le Labo
            </span>{" "}
            and{" "}
            <span style={{ color: "#0000FF", fontWeight: "bold" }}>
              Diptyque
            </span>
            !
          </span>
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
            marginTop: "15px",
            flexWrap: "wrap",
          }}
        >
          <img
            src="/desktop/about-me/lombre.avif"
            alt="L'Ombre"
            style={{
              border: "5px solid #FF00FF",
              maxWidth: "150px",
              height: "auto",
            }}
          />
          <img
            src="/desktop/about-me/santal.jpg"
            alt="Santal"
            style={{
              border: "6px double #0000FF",
              maxWidth: "200px",
              height: "auto",
            }}
          />
          <img
            src="/desktop/about-me/eauRose.jpg"
            alt="Eau Rose"
            style={{
              border: "6px double #FF00FF",
              maxWidth: "200px",
              height: "auto",
            }}
          />
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          padding: "10px",
          backgroundColor: "#FFFF00",
          border: "3px solid #FF00FF",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            color: "#0000FF",
            margin: "5px 0",
            fontFamily: "Courier New, monospace",
          }}
        >
          <strong style={{ color: "#FF00FF" }}>Visitor Counter:</strong>{" "}
          <span style={{ color: "#0000FF", fontSize: "20px" }}>0000067</span>
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#0000FF",
            margin: "5px 0",
            fontFamily: "Times New Roman, serif",
          }}
        >
          Last Updated: {new Date().toLocaleDateString()}
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "#0000FF",
            margin: "5px 0",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          © 2025 Andrew's Awesome Homepage
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#FFFF00",
          borderTop: "5px solid #000000",
          padding: "15px",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <marquee behavior="scroll" direction="left" scrollamount="5">
          <span
            style={{
              fontSize: "24px",
              color: "#000000",
              fontWeight: "bold",
              margin: "0 20px",
            }}
          >
            UNDER CONSTRUCTION
          </span>
          <span
            style={{
              fontSize: "24px",
              color: "#000000",
              fontWeight: "bold",
              margin: "0 20px",
            }}
          >
            UNDER CONSTRUCTION
          </span>
          <span
            style={{
              fontSize: "24px",
              color: "#000000",
              fontWeight: "bold",
              margin: "0 20px",
            }}
          >
            UNDER CONSTRUCTION
          </span>
        </marquee>
      </div>

      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
          .blinking-orca {
            animation: blink 0.5s infinite;
          }
          marquee {
            display: block;
          }
        `}
      </style>
    </div>
  );
}

export default AboutMeApp;
