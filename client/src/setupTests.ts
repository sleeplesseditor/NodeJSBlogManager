import "@testing-library/jest-dom";
import { configure } from "@testing-library/react";
import { vi } from "vitest";

configure({ testIdAttribute: "data-testid" });

Object.assign(globalThis, { jest: vi });

const mockDispatch = jest.fn();
const mockSelector = jest.fn();

// Mock the whole react-redux module
// vi.mock('react-redux', () => ({
//   ...jest.requireActual('react-redux'),
//   useDispatch: () => mockDispatch,
//   useSelector: () => mockSelector
// }));