import React from "react";
import HeroImage from "../../public/Hero.webp";

const benefits = [
  {
    title: "Secure Ownership",
    description:
      "Patients fully own and control their medical records on-chain.",
    icon: (
      <svg
        style={{ width: "3rem", height: "3rem" }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 11c0-3.866-3.582-7-8-7v14c4.418 0 8-3.134 8-7z"
        />
      </svg>
    ),
  },
  {
    title: "Fast & Low Cost",
    description: "Arbitrum Layer-2 ensures quick transactions at minimal fees.",
    icon: (
      <svg
        style={{ width: "3rem", height: "3rem" }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h4l3 8 4-16 3 8h4"
        />
      </svg>
    ),
  },
  {
    title: "Decentralized Access",
    description:
      "Grant or revoke doctor access with transparent on-chain logs.",
    icon: (
      <svg
        style={{ width: "3rem", height: "3rem" }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
  },
];

const LandingPage = () => {
  return (
    <div>
      <section
        style={{
          position: "relative",
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div style={{ paddingTop: "5rem", width: "50%" }}>
          <div
            style={{
              maxWidth: "7xl",
              margin: "0 auto",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
              alignItems: "center",
            }}
          >
            <div style={{ flex: 1, marginTop: "8rem", marginLeft: "1.5rem" }}>
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  marginBottom: "1.5rem",
                  background:
                    "linear-gradient(to right, #3A59D1, #3D90D7, #7AC6D2)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Secure Your Medical Records
                <br />
                with Blockchain
              </h1>

              <p
                style={{
                  fontSize: "1.125rem",
                  marginBottom: "2rem",
                  color: "#3D90D7",
                }}
              >
                Empowering patients with decentralized control over their health
                data, backed by Arbitrum's fast, low-cost Layer-2 solution.
              </p>

              <a
                href="#form"
                style={{
                  display: "inline-block",
                  backgroundColor: "#7AC6D2",
                  color: "white",
                  fontWeight: "600",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#B5FCCD")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#7AC6D2")
                }
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 0", backgroundColor: "white" }}>
        <div
          style={{
            maxWidth: "7xl",
            margin: "0 auto",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.875rem",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "3rem",
              color: "#3A59D1",
            }}
          >
            Why Choose MedVault?
          </h2>
          <div
            style={{
              display: "grid",
              gap: "2.5rem",
              gridTemplateColumns: "repeat(3, 1fr)",
            }}
          >
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                style={{
                  backgroundColor: "#F9FAFB",
                  padding: "1.5rem",
                  borderRadius: "1rem",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "box-shadow 0.3s ease",
                }}
              >
                <div style={{ color: "#3D90D7", marginBottom: "1rem" }}>
                  {benefit.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}
                >
                  {benefit.title}
                </h3>
                <p style={{ color: "#4A5568" }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
