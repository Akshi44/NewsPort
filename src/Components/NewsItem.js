import React from 'react'
const NewsItem =(props)=> {
  let {title,url}=props;
    return (
      <div className='my-3' style={{display:"flex",justifyContent:"center"}}>
        <div className="card" style={{width:"18rem",backgroundColor:"lavender"}} >
            <img style={{height:"180px"}} src={props.imageurl?props.imageurl:"https://ichef.bbci.co.uk/news/1024/branded_news/CC92/production/_130407325_5ec60b45afbed60d8fed2f8372d554f7b68c33e80_0_4032_22681000x563.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body" >
                <h5 className="card-title">{title}...</h5>
                <span className="badge bg-danger">{props.source}</span>
                <p className="card-text">{props.description}......</p>
                <p className="card-text"><small className="text-body-secondary">By {props.author?props.author:"UnKnown"} on {new Date(props.datetime).toGMTString()}</small></p>
                <a href={url} className="btn btn-sm btn-dark" >Read More</a>
            </div>
        </div>
      </div>
      // we can use both methods : 
      // 1. At top declare all the props_elements_names and directly use them like- title,url
      // 2. use props.props_element_name 
    ) 
}
export default NewsItem
