import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditNews() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState({ title: "", content: "" });

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const response = await axios.get(`/api/news/${id}`);
    setNews(response.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNews((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/api/news/${id}`, news);
    navigate("/");
  };

  return (
    <div>
      <h2>Edit News</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={news.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            name="content"
            value={news.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditNews;
