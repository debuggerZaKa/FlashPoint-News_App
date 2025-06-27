import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {
    constructor(){
        super();
        this.state={
            articles: [],
            loading: false,
            page: 1,
            pageSize: 18,
        }
    };
    async componentDidMount(){
      let url= `YOUR_URL&page=${this.state.page} &pageSize=18`
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles ,totalResults:parsedData.totalResults})
    }

    handlePrevClick =async()=>{
      let url= `YOURURL&page=${this.state.page - 1} &pageSize=18`
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
      })
    }
 
    handleNextClick = async ()=>{

         if(Math.ceil(this.state.page + 1> this.state.totalResults/this.state.pageSize)){

    }
    else{
        let url = `YOUR_URL&page=${this.state.page +1} &pageSize=18`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles
          
        })
      }
      }
    
  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center mb-4'>Hotlines</h2>
       <div className='row'>
        {this.state.articles.map ((element)=>{
          return <div className="col-md-4" key={element.url}>
        <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description? element.description.slice(0,90):""} imgUrl={element.urlToImage} newsUrl={element.url}/>
        </div>})}
<div className='container d-flex justify-content-between' >
  <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
  <button type="button" className="btn btn-primary " onClick={this.handleNextClick}>Next &rarr; </button>
</div>

        </div>
      </div>
    )
  }
}

export default News
