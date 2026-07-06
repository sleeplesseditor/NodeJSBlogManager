import { createFileRoute } from '@tanstack/react-router';
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute('/blogs/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
        {/* <BlogList /> */}
        <div className="fixed-action-btn">
        <Link to="/blogs/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
        </Link>
        </div>
    </div>
  )
}
