"use client";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import axios from 'axios';
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Company Dashboard",
  description: "",
};

export default function DashboardLayout({ children }) {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/posts');
        setPosts(response.data.posts);
      } catch (error) {
        console.log(error);
      }
    };

    getAllPosts();
  }, []);



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
              <a href="/carts">
                <button>Carts</button>
              </a>
            </nav>
          </div>
          <div className="leftContent"></div>
          <div className="middleContent">{children}</div>
          <div className="rightContent">
          {posts.length > 0 ? (
              posts.map(post => (
                <div className="news" key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                  {/* Render other fields as needed */}
                </div>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}