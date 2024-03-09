"use client";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Company Dashboard",
  description: "",
};

export default function DashboardLayout({ children }) {
  return (
    <html>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body>
        <div className="mainContent">
          <div className="leftMenu">
            <div style={{ textAlign: "center" }}>
              <h4>
                Sistem de Gestão v1.0
                <img
                  className="logo"
                  src="https://www.getautismactive.com/wp-content/uploads/2021/01/Test-Logo-Circle-black-transparent.png"
                  style={{width:"43px"}}
                />
              </h4>
            </div>
            <nav>
              <a href="/">
                <button>Home</button>
              </a>

              <a href="/admins">
                <button>Admins</button>
              </a>

              <a href="/employees">
                <button>Employees</button>
              </a>

              <a href="/clients">
                <button>Clients</button>
              </a>
              <a href="/cars">
                <button>Cars</button>
              </a>
            </nav>
          </div>
          <div className="leftContent"></div>
          <div className="middleContent">{children}</div>
          <div className="rightContent"></div>
        </div>
      </body>
    </html>
  );
}