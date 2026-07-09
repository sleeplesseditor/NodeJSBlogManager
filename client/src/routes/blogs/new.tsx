import * as React from 'react';
import { createFileRoute, redirect } from '@tanstack/react-router';
import BlogForm from '@components/blogs/BlogForm';
import BlogFormReview from '@components/blogs/BlogFormReview';
import { store } from '@modules/redux/store';

export const Route = createFileRoute('/blogs/new')({
  beforeLoad: ({ location }) => {
    const state = store.getState();
    const isAuthenticated = Boolean(state.auth.user);

    if (!isAuthenticated) {
      throw redirect({ to: '/', search: { redirect: location.href } });
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const [isFormReviewVisible, setIsFormReviewVisible] = React.useState<boolean>(false);

  const renderBlogContent = () => {
    if(isFormReviewVisible) {
      return <BlogFormReview onCancel={() => setIsFormReviewVisible(false)} />
    } else {
      return <BlogForm onBlogSubmit={() => setIsFormReviewVisible(true)} />
    }
  }

  return (
    <div className="container">{renderBlogContent()}</div>
  )
}
