/**
 * Integration test for the contact form submission logic.
 * Mocks Firestore so no real network calls are made.
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactSection } from '@/components/sections/contact-section';

// Mock Firebase Firestore
jest.mock('@/lib/firebase', () => ({ db: {} }));
jest.mock('firebase/firestore', () => ({
  collection: jest.fn(),
  addDoc: jest.fn().mockResolvedValue({ id: 'test-doc-id' }),
  Timestamp: { now: jest.fn(() => ({ seconds: 0, nanoseconds: 0 })) },
}));

// Mock toast hook
const mockToast = jest.fn();
jest.mock('@/hooks/use-toast', () => ({
  useToast: () => ({ toast: mockToast }),
}));

describe('ContactSection form', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all form fields', () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
  });

  it('shows loading state during submission', async () => {
    render(<ContactSection />);
    await userEvent.type(screen.getByLabelText(/Full Name/i), 'Rahul Singh');
    await userEvent.type(screen.getByLabelText(/Phone Number/i), '9876543210');
    await userEvent.type(screen.getByLabelText(/Message/i), 'I want to enroll in DSA course');
    await userEvent.click(screen.getByRole('button', { name: /Send Message/i }));
    expect(screen.getByText(/Submitting/i)).toBeInTheDocument();
  });

  it('shows success toast after successful submission', async () => {
    render(<ContactSection />);
    await userEvent.type(screen.getByLabelText(/Full Name/i), 'Rahul Singh');
    await userEvent.type(screen.getByLabelText(/Phone Number/i), '9876543210');
    await userEvent.type(screen.getByLabelText(/Message/i), 'I want to enroll in DSA course');
    await userEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({ title: 'Success!' })
      );
    });
  });
});
