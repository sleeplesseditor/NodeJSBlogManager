import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import BlogForm from '@components/blogs/BlogForm';
import BlogFormReview from '@components/blogs/BlogFormReview';

export const Route = createFileRoute('/blogs/new')({
  component: RouteComponent,
})

function RouteComponent() {
  const [isFormReviewVisible, setIsFormReviewVisible] = React.useState<boolean>(false);

  const renderBlogContent = () => {
    if(isFormReviewVisible) {
      return <BlogFormReview onEdit={() => setIsFormReviewVisible(false)} />
    } else {
      return <BlogForm onBlogSubmit={() => setIsFormReviewVisible(true)} />
    }
  }

  return (
    <div>{renderBlogContent()}</div>
  )
}
