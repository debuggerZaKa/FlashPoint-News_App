import React, { Component } from 'react'
import NewsItem from './NewsItem'
import LoadingComp from './LoadingComp'
import PropTypes from 'prop-types'
import { format } from 'date-fns';

export class News extends Component {
  static defaultProps ={
    country: "us",
    category: "general",
    pageSize: 8
  }

  static propTypes={
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
  }
    constructor(props){
        super(props);
        this.state={
            articles: [],
            loading: false,
            page: 1,
        }
       document.title = `FlashPoint - ${this.props.category?.charAt(0)?.toUpperCase() + this.props.category?.slice(1) || ''}`;
    };


        async pageUpdate(){
      let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=29cf20f052654989b325575064d6d3ae&page=${this.state.page}&pageSize=${this.props.pageSize}`
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
      })
    }

    async componentDidMount(){
      this.pageUpdate();
    }

    handlePrevClick =async()=>{
      await new Promise (resolve => this.setState({
        page: this.state.page - 1
      }, resolve));
      this.pageUpdate();
    }
 
    handleNextClick = async () => {
      await new Promise(resolve => this.setState({
        page: this.state.page + 1
      }, resolve));
      this.pageUpdate();
    }
 
    
      
  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center mb-4'>Hotlines {this.props.category!= "general"? `on ${this.props.category?.charAt(0)?.toUpperCase() + this.props.category?.slice(1) || ''}` : ""}</h2>
        {this.state.loading && <LoadingComp/>}
       <div className='row'>
        {this.state.articles.map ((element)=>{
          return <div className="col-md-4" key={element.url}>
        <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description? element.description.slice(0,90):""} imgUrl={element.urlToImage} newsUrl={element.url} publishedDate={element.publishedAt ? format(new Date(element.publishedAt), "MMMM do, yyyy") : ""}/>
        </div>})}
<div className='container d-flex justify-content-between' >
  <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
  <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary " onClick={this.handleNextClick}>Next &rarr; </button>
</div>

        </div>
      </div>
    )
  }
}

export default News
