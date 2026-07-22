import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Overview,
})

function Overview() {
  return <h1>Overview</h1>
}
