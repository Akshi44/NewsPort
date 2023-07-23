// rcc
import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {

  const[articles,setArticles]=useState([])
  const[loading,setLoading]=useState(true)
  const[totalresults,setTotalresults]=useState(0)
  const[page,setPage]=useState(1)


  const capitalizefirstletter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
 
  const updatenews=async()=> {
	props.setprogress(10);
  let url = `https://newsapi.org/v2/top-headlines?country=${props.countryname}&category=${props.category}&page=1&apiKey=${props.apikey}`;
	props.setprogress(50);
  setLoading(true);
  let data = await fetch(url);
  let parsedata = await data.json();
  setArticles( parsedata.articles);
  setTotalresults(parsedata.totalresults);
  setLoading(false);
	props.setprogress(100);

  }
 
  useEffect(()=>{
    document.title = `News Port-${capitalizefirstletter(props.category)}`;
    updatenews(); 
    /* eslint-disable */ 
  },[])

  // const handlepreviousclick = async () => {
  //   setPage(page-1);
  //  updatenews();
  // };
  // const handlenextclick = async () => {
  //   setPage(page+1);
  //   updatenews();
  // };
  
  const fetchMoreData = async() => {
	let url = `https://newsapi.org/v2/top-headlines?country=${props.countryname}&category=${props.category}&page=${page+1}&apiKey=${props.apikey}`;
  setPage(page+1);
  let data = await fetch(url);
  let parsedata = await data.json();
  setTotalresults(parsedata.totalresults)
  setArticles(articles.concat(parsedata.articles))  
  };
    return (
      <div className="container my-3">
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          NewsPort : The {capitalizefirstletter(props.category)}{" "}
          NewsAdda{" "}
        </h2>
        <div >{loading && <Spinner />}</div>
        {/* {this.state.articles && this.state.articles.map((element)=>{
			return <div className='col-md-4 ' key={element.url}>
			<NewsItem  title={element.title.slice(0,50)} source={element.source.name} author={element.author}  datetime={element.publishedAt} description={element.description?element.description.slice(0,80):"here no any description is given for this new, so we are using default description."} imageurl={element.urlToImage} url={element.url} />
			</div>
		})}  */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalresults}
          loader={<Spinner />}
        >
			<div className="container">
          <div className="row ">
            {articles.map((element) => {
              return (
                <div className="col-md-4 " key={element.url}>
                  <NewsItem
                    title={element.title.slice(0, 50)}
                    source={element.source.name}
                    author={element.author}
                    datetime={element.publishedAt}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : "here no any description is given for this new, so we are using default description."
                    }
                    imageurl={element.urlToImage}
                    url={element.url}
                  />
                </div>
              );
            })}
          </div>
				</div>

        </InfiniteScroll>

        {/* <div className="d-flex justify-content-between">
		<button
		//  disabled={this.state.page===1?true:false} 
		 onClick={this.handlepreviousclick} type="button" className="btn btn-dark mx-3">&larr; Previous</button>
		<button  onClick={this.handlenextclick} type="button" className="btn btn-dark">Next &rarr;</button>
		</div> */}
      </div>
    );
  }
export default News;

News.defaultProps = {
  countryname: "in",
  category: "general",
};
News.propTypes = {
  countryname: PropTypes.string,
  category: PropTypes.string,
};