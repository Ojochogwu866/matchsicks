import { render, screen } from '@testing-library/react'
import { createRouter, createMemoryHistory, RouterProvider } from '@tanstack/react-router'
import { describe, expect, it } from 'vitest'
import { routeTree } from '../routeTree.gen'

describe('index route', () => {
  it('renders the overview heading', async () => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ['/'] }),
    })
    render(<RouterProvider router={router} />)

    expect(await screen.findByRole('heading', { name: 'Overview' })).toBeInTheDocument()
  })
})
