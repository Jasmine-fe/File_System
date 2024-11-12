// fileUploadSubmit.test.js (Cypress)
describe('File Upload and Submit Button', () => {
    it('should upload files and show success message', () => {
      cy.visit('http://localhost:3000'); // Replace with the actual URL
  
      // Select a file
      const fileName = 'testFile.txt';
      cy.get('.file-input').attachFile(fileName);
  
      // Verify that the file is listed in the output
      cy.get('.output').should('contain', `Selected ${fileName}`);
  
      // Submit the file and check for success message
      cy.get('.button-container button').contains('Submit').click();
      cy.get('.output').should('contain', `Uploaded ${fileName} to folder "Victoria"`);
    });
  });
  