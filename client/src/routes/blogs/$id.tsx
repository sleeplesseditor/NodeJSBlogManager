import * as React from 'react';
import { fetchBlogById } from '@modules/blogs/selectors';
import { useAppDispatch, useAppSelector } from '@modules/redux/store';
import { createFileRoute, redirect, useParams } from '@tanstack/react-router';
import { store } from '@modules/redux/store';

interface Blog {
  title: string;
  content: string;
}

export const Route = createFileRoute('/blogs/$id')({
  beforeLoad: ({ location }) => {
    const state = store.getState();
    const isAuthenticated = Boolean(state.auth.user);

    if (!isAuthenticated) {
      throw redirect({ to: '/', search: { redirect: location.href } });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
   const dispatch = useAppDispatch();
   const blog = useAppSelector((state) => state.blogs.selectedBlog) as Blog | null;
   const { id: blogId } = useParams({ from: '/blogs/$id' });

   React.useEffect(() => {
       if (blogId) {
           dispatch(fetchBlogById(blogId));
       }
   }, [dispatch, blogId]);

   return (
       <div className="container">
           <h3>{blog?.title}</h3>
           <p>{blog?.content}</p>
       </div>
   )
}
