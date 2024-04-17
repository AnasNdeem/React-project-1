import React from "react";
import './blog.css';
import blogimg1 from '../../assets/blog01.png';
import blogimg2 from '../../assets/blog02.png';
import blogimg3 from '../../assets/blog03.png';
import blogimg4 from '../../assets/blog04.png';
import blogimg5 from '../../assets/blog05.png';

const Blog = () =>{
    return (
        <div className="blog-main" id="blog">
            <div className="blog-heading">
                <h1>
                A lot is happening, <br/>
                 We are blogging about it.
                </h1>
            </div>
            <div className="blogs-row">
                <div className="blog-col1">
                    <div className="blog-img">
                        <img src={blogimg1} alt="Blog-img-1" />
                    </div>
                    <div className="blog-text">
                       <h6>16-jan-2024 </h6>
                       <h1>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
                       <button>See Full Article</button>
                    </div>
                </div>
                <div className="blog-col2">
                    <div className="blog-img">
                        <img src={blogimg2} alt="Blog-img-1" />
                    </div>
                    <div className="blog-text">
                    <h6>16-jan-2024 </h6>
                    <h1>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
                    <button>See Full Article</button>
                    </div>
                    <div className="blog-img">
                        <img src={blogimg3} alt="Blog-img-1" />
                    </div>
                    <div className="blog-text">
                    <h6>16-jan-2024 </h6>
                    <h1>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
                    <button>See Full Article</button>
                    </div>
                </div>
                 <div className="blog-col4">
                    <div className="blog-img">
                        <img src={blogimg4} alt="Blog-img-1" />
                    </div>
                    <div className="blog-text">
                    <h6>16-jan-2024 </h6>
                    <h1>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
                    <button>See Full Article</button>
                    </div>
                    <div className="blog-img">
                        <img src={blogimg5} alt="Blog-img-1" />
                    </div>
                    <div className="blog-text">
                    <h6>16-jan-2024 </h6>
                    <h1>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
                    <button>See Full Article</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blog