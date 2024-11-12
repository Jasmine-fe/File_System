// fileSubmission.test.js
import { fireEvent, render, screen } from '@testing-library/react';
import FileUploadComponent from './FileUploadComponent'; 

test('should upload files based on location', () => {
  const mockLocation = jest.spyOn(global, 'getLocationCity').mockReturnValue('Victoria');
  const { getByTestId, getByText } = render(<FileUploadComponent />);

  const fileInput = getByTestId('fileInput');
  const submitButton = getByText('Submit');
  
  const file = new File(['dummy content'], 'testFile.txt', { type: 'text/plain' });

  fireEvent.change(fileInput, { target: { files: [file] } });

  // Simulate the submit action
  fireEvent.click(submitButton);

  // Verify successful upload message based on location
  expect(screen.getByText(/Uploaded testFile.txt to folder "Victoria"/)).toBeInTheDocument();

  mockLocation.mockRestore();
});
