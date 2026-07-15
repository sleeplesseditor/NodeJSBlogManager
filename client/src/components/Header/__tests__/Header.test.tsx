import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header';

vi.mock('@tanstack/react-router', () => ({
  Link: ({ children, to }: any) => <a href={to}>{children}</a>,
}));

vi.mock('react-redux', async () => {
  const actual = await vi.importActual<typeof import('react-redux')>('react-redux');
  return {
    ...actual,
    useSelector: vi.fn(),
    useDispatch: vi.fn(),
  };
});

const mockedUseSelector = vi.mocked(useSelector);
const mockedUseDispatch = vi.mocked(useDispatch);

describe('Header', () => {
  beforeEach(() => {
    mockedUseDispatch.mockReturnValue(vi.fn());
  });

  it('shows the login link when auth user is undefined', () => {
    mockedUseSelector.mockReturnValue({ user: undefined } as any);

    render(<Header />);

    expect(screen.getByText(/Login With 0Auth/i)).toBeInTheDocument();
  });

  it('shows logout links when auth user exists', () => {
    mockedUseSelector.mockReturnValue({ user: { id: 1 } } as any);

    render(<Header />);

    expect(screen.getByText(/Log out/i)).toBeInTheDocument();
  });
});