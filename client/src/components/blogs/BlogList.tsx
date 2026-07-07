import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogList } from '@modules/blogs/selectors';
import { Link } from "@tanstack/react-router";

const BlogList = () => {
    const dispatch = useDispatch();
    const blogsState = useSelector((state: any) => state.blogs);

    React.useEffect(() => {
        dispatch(fetchBlogList() as never);
    }, [dispatch]);

    const renderBlogList = () => {
        return blogsState.length > 0 ? blogsState.map((blog: any) => {
            return (
                <div className="card darken-1 horizontal" key={blog._id}>
                    <div className="card-stacked">
                        <div className="card-content">
                            <span className="card-title">{blog.title}</span>
                            <p>{blog.content}</p>
                        </div>
                        <div className="card-action">
                            <Link to={`/blogs/${blog._id}` as string}>Read</Link>
                        </div>
                    </div>
                </div>
            )}) : <div className="card darken-1 horizontal">No blogs available.</div>
    }

    return (
        <div>{renderBlogList()}</div>
    )
};

export default BlogList;