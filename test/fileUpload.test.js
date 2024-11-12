// fileUpload.test.js
import { fireEvent, render } from '@testing-library/react';
import FileUploadComponent from './FileUploadComponent'; // Assume component is refactored for test

test('should update filesToUpload when a file is selected', () => {
  const { getByTestId } = render(<FileUploadComponent />);

  const fileInput = getByTestId('fileInput');
  const file = new File(['dummy content'], 'testFile.txt', { type: 'text/plain' });

  // Simulate file selection
  fireEvent.change(fileInput, { target: { files: [file] } });

  // Verify that filesToUpload is updated
  expect(fileInput.files).toHaveLength(1);
  expect(fileInput.files[0].name).toBe('testFile.txt');
});
