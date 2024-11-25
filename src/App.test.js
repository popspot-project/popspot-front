// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NoticeForm from "./components/NoticeForm";

describe("NoticeForm Component", () => {
  const mockOnSubmit = jest.fn();
  const mockOnClose = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders form fields correctly", () => {
    render(<NoticeForm onSubmit={mockOnSubmit} onClose={mockOnClose} />);

    // 필드와 버튼 확인
    expect(screen.getByLabelText("이름:")).toBeInTheDocument();
    expect(screen.getByLabelText("장소:")).toBeInTheDocument();
    expect(screen.getByLabelText("기간:")).toBeInTheDocument();
    expect(screen.getByLabelText("시간:")).toBeInTheDocument();
    expect(screen.getByLabelText("웹사이트:")).toBeInTheDocument();
    expect(screen.getByLabelText("이미지 업로드:")).toBeInTheDocument();
    expect(screen.getByLabelText("설명:")).toBeInTheDocument();
    expect(screen.getByText("저장")).toBeInTheDocument();
    // expect(screen.getByText("취소")).toBeInTheDocument();
  });

  test("submits data with onSubmit", () => {
    render(<NoticeForm onSubmit={mockOnSubmit} onClose={mockOnClose} />);

    // 필드에 값 입력
    fireEvent.change(screen.getByLabelText("이름:"), {
      target: { value: "Test Title" },
    });
    fireEvent.change(screen.getByLabelText("장소:"), {
      target: { value: "Test Place" },
    });
    fireEvent.change(screen.getByLabelText("기간:"), {
      target: { value: "2024-11-01" },
    });
    fireEvent.change(screen.getByLabelText("시간:"), {
      target: { value: "10:00" },
    });
    fireEvent.change(screen.getByLabelText("웹사이트:"), {
      target: { value: "https://example.com" },
    });
    fireEvent.change(screen.getByLabelText("설명:"), {
      target: { value: "Test Description" },
    });

    // 저장 버튼 클릭
    fireEvent.click(screen.getByText("저장"));

    // onSubmit 호출 확인
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({
      title: "Test Title",
      place: "Test Place",
      startDate: "2024-11-01",
      endDate: "",
      startTime: "10:00",
      endTime: "",
      publicUrl: "https://example.com",
      image: "",
      description: "Test Description",
    });
  });

  test("closes form with onClose", () => {
    render(<NoticeForm onSubmit={mockOnSubmit} onClose={mockOnClose} />);

    // 취소 버튼 클릭
    // fireEvent.click(screen.getByText("취소"));

    // onClose 호출 확인
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test("renders existing data when provided", () => {
    const existingData = {
      title: "Existing Title",
      place: "Existing Place",
      startDate: "2024-11-01",
      endDate: "2024-11-05",
      startTime: "10:00",
      endTime: "18:00",
      publicUrl: "https://example.com",
      image: "",
      description: "Existing Description",
    };

    render(
      <NoticeForm
        existingData={existingData}
        onSubmit={mockOnSubmit}
        onClose={mockOnClose}
      />
    );

    // 기존 데이터가 필드에 반영되었는지 확인
    expect(screen.getByLabelText("이름:").value).toBe(existingData.title);
    expect(screen.getByLabelText("장소:").value).toBe(existingData.address);
    expect(screen.getByLabelText("기간:").value).toBe(existingData.startDate);
    expect(screen.getByLabelText("시간:").value).toBe(existingData.startTime);
    expect(screen.getByLabelText("웹사이트:").value).toBe(existingData.publicUrl);
    expect(screen.getByLabelText("설명:").value).toBe(existingData.description);
  });
});
