import { useState } from "react";

function App() {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  // Sort by Date (latest dates first, then views descending for same date)
  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.date === b.date) {
        return b.views - a.views; // Sort by views if dates are same
      }
      return new Date(b.date) - new Date(a.date); // Sort by date (latest first)
    });
    setData(sortedData);
  };

  // Sort by Views (highest views first, then dates descending for same views)
  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.views === b.views) {
        return new Date(b.date) - new Date(a.date); // Sort by date if views are same
      }
      return b.views - a.views; // Sort by views (highest first)
    });
    setData(sortedData);
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif", marginTop: "50px" }}>
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate} style={{ marginRight: "10px", padding: "10px" }}>
        Sort by Date
      </button>
      <button onClick={sortByViews} style={{ padding: "10px" }}>
        Sort by Views
      </button>
      <table
        style={{
          marginTop: "20px",
          borderCollapse: "collapse",
          width: "60%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #000", padding: "10px" }}>Date</th>
            <th style={{ borderBottom: "1px solid #000", padding: "10px" }}>Views</th>
            <th style={{ borderBottom: "1px solid #000", padding: "10px" }}>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ padding: "10px" }}>{item.date}</td>
              <td style={{ padding: "10px" }}>{item.views}</td>
              <td style={{ padding: "10px" }}>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
