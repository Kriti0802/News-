

import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        // newsUrl to make unique data
        let { title, description, imgUrl, newsUrl, author, date, source } = this.props;//here it uses array destructuring
        return (
            //  style={{ width: "18rem" }}
            <div className='my-3'>
                <div className="card">
                    {/* if img url is null then so given url else imgurl given */}
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>{source} </span>
                    <img src={!imgUrl ? "https://c.ndtvimg.com/2023-01/ot6pj1gg_pariksha-pe-charcha-2023-pti-650_650x400_27_January_23.jpg" : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"> <small className="text-muted">By  {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
