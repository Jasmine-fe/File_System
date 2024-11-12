// submitButton.test.js
import { fireEvent, render } from '@testing-library/react';
import FileUploadComponent from './FileUploadComponent'; 

test('should enable the Submit button after selecting a file', () => {
  const { getByTestId, getByText } = render(<FileUploadComponent />);

  const fileInput = getByTestId('fileInput');
  const submitButton = getByText('Submit');
  
  const file = new File(['dummy content'], 'testFile.txt', { type: 'text/plain' });

  // Simulate file selection
  fireEvent.change(fileInput, { target: { files: [file] } });

  // Verify that Submit button is enabled
  expect(submitButton).not.toBeDisabled();
});
