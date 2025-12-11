import React, { Component } from 'react';

export class NewsItem extends Component {
  handleImageError = (e) => {
    // Replace with fallback image when error occurs
    e.target.src = "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&auto=format&q=80";
    e.target.style.opacity = '0.8'; // Optional: make fallback slightly transparent
  };

  render() {
    let { title, description, imgUrl, newsUrl, publishedDate} = this.props;
    
    return (
      <div className="my-4">
        <div className="card">
          <img 
            src={imgUrl || "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&auto=format&q=80"}
            onError={this.handleImageError}
            className="card-img-top" 
            alt={title || "News image"}
            loading="lazy"
            style={{
              height: '200px',
              objectFit: 'cover',
              backgroundColor: '#f5f5f5'
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small class="text-muted">Published on {publishedDate}</small></p>
            <a 
              href={newsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;