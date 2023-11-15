import { Link } from "react-router-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export default class category extends Component {
  articles = [
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: null,
      title:
        "Red Star Belgrade: Fans never stop believing 1991 European champions will rise again",
      description:
        "Red Star Belgrade were European champions in 1991, fans will tell you that puts them on a par with Manchester City and bigger than Paris St-Germain.",
      url: "https://www.bbc.co.uk/sport/football/66787895",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1260C/production/_131067257_whatsubject.jpg",
      publishedAt: "2023-09-19T05:38:06Z",
      content:
        "Red Star Belgrade players celebrate a fifth league title in a row last season\r\nRed Star Belgrade fans see their club as an empire.\r\nAs they approach the game at Manchester City on Tuesday (20:00 BST)… [+5481 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "Brendan Griffiths",
      title: "Where to watch free Champions League live streams from anywhere",
      description:
        "Free Champions League live streams are back this season for multiple matches if you know where to look. We've found some very affordable options if you insist on seeing every game too.",
      url: "https://www.businessinsider.com/guides/streaming/where-to-watch-champions-league-live-streams-free",
      urlToImage:
        "https://i.insider.com/6509a1ef12dc4f001a165110?width=1200&format=jpeg",
      publishedAt: "2023-09-19T15:01:38Z",
      content:
        "When you buy through our links, Insider may earn an affiliate commission. Learn more\r\nFinding out where to watch a Champions League live stream can change quite often depending on where you live, but… [+9322 chars]",
    },
  ];

  static defaultProps = {
    country: "in",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      query: "",
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=31921e657f954b1d8e1b04366c56d629&pageSize=8`;
    // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b6ae2143741e400ab12232d4b3fd3e53&pageSize=8`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrev = async () => {
    console.log("Preved");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=31921e657f954b1d8e1b04366c56d629&page=${
      this.state.page - 1
    }&pageSize=8`;
    // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b6ae2143741e400ab12232d4b3fd3e53&pageSize=8&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
    });
  };

  handleNext = async () => {
    console.log("Next");

    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 8)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=31921e657f954b1d8e1b04366c56d629&page=${
        this.state.page + 1
      }&pageSize=8`;
      // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b6ae2143741e400ab12232d4b3fd3e53&pageSize=8&page=${this.state.page + 1}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
      });
    }
  };

  handleAnalyze = (index, comment) => {
    // console.log(index);
    axios
      .post(
        "http://127.0.0.1:8000/preds/",
        { comment },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response.data.sentiment);
        document.getElementById(index).innerText = `Result: ${
          response.data.sentiment[0][1] == 0 ? "Negative" : "Positive"
        }, Percentage:${response.data.sentiment[0][2]}`;
        this.setState({
          Sentiment: response.data.sentiment[0][1],
          Perc: response.data.sentiment[0][2],
        });
      })
      .catch((error) => console.log(error));
  };

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const apiKey = "31921e657f954b1d8e1b04366c56d629";
    const { query } = this.state;
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${apiKey}&pageSize=8&q=${query}`;

    axios.get(apiUrl)
    .then((response)=>{
      console.log(response);
      this.setState({articles: response.data.articles})
    }).catch((error)=>{
      console.error(error)
    })
  };

  render() {
    return (
      <>
        {/* <!--== start of category banner wrapper ==--> */}
        <section className="bg-dark section-grap3 ">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="category-banner-content">
                  <div className="banner-title">
                    <h3 className="text-light">Category Page</h3>
                  </div>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Category Page
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--== end of category banner wrapper ==--> */}

        {/* <!--== start of category products wrapper ==--> */}
        <section className="category-products-wrapper section-grap">
          <div className="container my-3">
            <div className="row">
              <div className="col-md-9">
                <div className="row">
                  {this.state.articles.map((art, index) => {
                    return (
                      <div
                        className="card my-3 mx-auto"
                        style={{ width: "26rem" }}
                        key={art.url}
                      >
                        <img
                          src={
                            art.urlToImage
                              ? art.urlToImage
                              : "https://i.insider.com/6509a1ef12dc4f001a165110?width=1200&format=jpeg"
                          }
                          className="card-img-top mt-2"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            <Link to={art.url} className="nav-link navbar-nav">
                              {art.title}
                            </Link>
                          </h5>
                          <p className="card-text">{art.description}</p>
                          <div className="d-flex">
                            <button
                              className="btn btn-primary mt-2 btn-sm"
                              onClick={() =>
                                this.handleAnalyze(index, art.description)
                              }
                            >
                              Analyze Data
                            </button>
                            <p
                              className="ms-3 text-danger mt-top"
                              style={{ fontSize: "13px" }}
                              id={index}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="container d-flex justify-content-between">
                    <button
                      disabled={this.state.page <= 1}
                      type="button"
                      className="btn btn-dark"
                      onClick={this.handlePrev}
                    >
                      &larr; Previous
                    </button>
                    <button
                      disabled={
                        this.state.page + 1 >
                        Math.ceil(this.state.totalResults / 8)
                      }
                      type="button"
                      className="btn btn-dark"
                      onClick={this.handleNext}
                    >
                      Next &rarr;
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="category-sidebar">
                  <div class="category-search-box">
                    <h3>Search Your Topic Here</h3>
                    <form action="" className="search-component" onSubmit={this.handleSubmit}>
                      <div className="search-component-field-wrapper-inner d-flex">
                        <input
                          data-content="header-search"
                          value={this.state.query}
                          type="text"
                          name="q"
                          placeholder="Search...."
                          autoComplete="off"
                          onChange={this.handleInputChange}
                        />
                        <button type="submit" className="search-button btn">
                          <i className="fas fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="category-recent-posts">
                    <h3>Recent Posts</h3>
                    <ul>
                      <li>
                        <Link href="categoryPage.html">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Cumque, facere.
                        </Link>
                      </li>
                      <li>
                        <Link href="categoryPage.html">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Ratione asperiores consectetur inventore
                          aliquid. Voluptatum, ad.
                        </Link>
                      </li>
                      <li>
                        <Link href="categoryPage.html">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Cumque, facere.
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="category-recent-posts archives">
                    <h3>Archives</h3>
                    <ul>
                      <li>
                        <Link href="categoryPage.html">February 2021</Link>
                      </li>
                      <li>
                        <Link href="categoryPage.html">January 2021</Link>
                      </li>
                      <li>
                        <Link href="categoryPage.html">December 2020</Link>
                      </li>
                      <li>
                        <Link href="categoryPage.html">November 2020</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--== end of category products wrapper ==--> */}
      </>
    );
  }
}
