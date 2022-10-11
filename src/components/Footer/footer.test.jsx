import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import Footer from './Footer'

describe('footer tests', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  afterEach(cleanup)

  it('should render social icons', () => {
    expect(screen.getByAltText('github icon')).toBeDefined()
    expect(screen.getByAltText('linkedin icon')).toBeDefined()
    expect(screen.getByAltText('twitter icon')).toBeDefined()
  })

  it('should render developed by', () => {
    expect(
      screen.getByText('OpenWeekApps project developed by')
    ).toBeDefined()
    expect(screen.getByAltText('openbootcamp logo')).toBeDefined()
    expect(screen.getByText('community')).toBeDefined()
  })

  it('should render copyright', () => {
    expect(
      screen.getByText('Copyright © 2022 - OpenWeekApps')
    ).toBeDefined()
  })
})
