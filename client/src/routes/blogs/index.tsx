import { createFileRoute, redirect } from '@tanstack/react-router';
import { Link } from "@tanstack/react-router";
import BlogList from '@components/blogs/BlogList';
import { store } from '@modules/redux/store';

export const Route = createFileRoute('/blogs/')({
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
  return (
    <div className="container">
        <BlogList />
        <div className="fixed-action-btn">
        <Link to="/blogs/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
        </Link>
        </div>
    </div>
  )
}
