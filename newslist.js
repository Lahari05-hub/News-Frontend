import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function NewsList() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const response = await axios.get("/api/news");
    setNews(response.data);
  };

  return (
    <div>
      <h2>News List</h2>
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <Link to={`/edit/${item.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsList;
