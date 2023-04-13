import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

//rce 
export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
     capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    constructor(props) {
        super(props);
        console.log("hello I am a constructor from News component");
        this.state = {
            articles: [], //empty array
            loading: false,
            page: 1,
        }
        document.title=`${this.capitalizeFirstLetter(this.props.category)} - HeadlineHub`;
    }
    async componentDidMount() {
        console.log("hello I am a catch from News component");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=69143b6e466544f2a5d1e633df7437c7&page=1&pagesize=${this.props.pageSize}`;

        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        // setstate is used to update the state of the component data from api
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
    }
    handlePrevClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=69143b6e466544f2a5d1e633df7437c7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        // this.state({ loading: false })
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            loading: false,
        })
    }
    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=69143b6e466544f2a5d1e633df7437c7&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parseData = await data.json()
            console.log(parseData);
            this.setState({ loading: false })
            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles,
                loading: false,
            })
        }
    }

    render() {
        return (
            <div className="container my-3" >
                <h2 className="text-center" style={{margin:'40px 0'}}>HeadlineHub- Top Headlines from {this.capitalizeFirstLetter(this.props.category)} Category</h2>

                {/* if loading ==true then call spinner */}
                {this.state.loading && <Spinner />}
                {/* {this.state.loading == true? <Spinner /> : ""} */}
                {/* if articles is empty then call spinner */}
                {/* {this.state.articles.length == 0? <Spinner /> : ""}
                if articles is not empty then call news items */}
                {/* every news item in column  and md-3 means 4 column in one row*/}
                <div className="row" >
                    {/* here we will use map array function which will return 
                a jsx element for each items in articles array and rendered to screen */}
                    {!this.state.loading && this.state.articles.map((element) => {
                        {/* we have to give a unique key to every item here url is unique */ }
                        return <div className="col-md-4" key={element.url} >
                            {/* if element.title is null then title="" */}
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} 
                            imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div >
        )
    }
}

export default News
