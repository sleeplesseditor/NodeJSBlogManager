import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blogs/new')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blogs/new"!</div>
}
