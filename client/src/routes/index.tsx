import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>
                Blogster!
            </h1>
            Write private blogs
        </div>
    );
}