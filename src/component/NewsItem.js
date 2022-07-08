import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, time, source } = props;
    return (
        <div className='my-3'>
            <div className="card" >

                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0', top: '-9px' }}>
                    <span className="badge rounded-pill bg-danger"> {source} </span>
                </div>

                <img src={!imageUrl ? "https://e3.365dm.com/22/06/768x432/skynews-breaking-breaking-news_5799429.jpg?20220629133937" : imageUrl} 
                        className="card-img-top" style={{ height: '15rem' }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>

                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(time).toUTCString()}</small></p>
                    <a href={newsUrl} rel='noopener noreferrer' target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem