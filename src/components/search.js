import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SearchComponent({ headerProps }) {
  //   const [query, setQuery] = useState("");
  //   const [articles, setArticles] = useState([]);
  //   const navigate = useNavigate();
//   const { query, articles } = headerProps;

  //   const handleInputChange = (event) => {
  //     setQuery(event.target.value);
  //   };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const apiKey = "b6ae2143741e400ab12232d4b3fd3e53"; // Replace with your NewsAPI key
  //     const apiUrl = `https://newsapi.org/v2/top-headlines?category=general&apiKey=${apiKey}&pageSize=8&q=${query}`;

  //     axios
  //       .get(apiUrl)
  //       .then((response) => {
  //         setArticles(response.data.articles);

  //         // Use the history object to navigate to the search results page
  //         navigate("/search");
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  //   };

  return (
    <>
      {/* <section className="section-grap3"> */}
      {/* <form className="search-component" onSubmit={handleSubmit}>
        <div className="search-component-field-wrapper">
          <div className="search-component-field-wrapper-inner">
            <input
              data-content="header-search"
              type="text"
              name="q"
              placeholder="Search...."
              autoComplete="off"
              value={query}
              onChange={handleInputChange}
            />
            <button type="submit" className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div> */}
      {/* </form> */}
      {/* </section> */}

      {/* Display search results */}
      {/* <section class="section-grap3"> */}
      <div className="container my-3">
        <div className="row">
          <div className="col-md-6">
            {/* <li key={index}>{article.title}</li> */}
            <div class="card my-3 mx-auto" style={{ width: "18rem;" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link href="#" class="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
    </>
  );
}

export default SearchComponent;
