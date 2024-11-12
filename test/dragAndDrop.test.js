// dragAndDrop.test.js (Cypress)
describe('Drag and Drop file upload', () => {
    it('should accept files dropped into the drop zone', () => {
      cy.visit('http://localhost:3000'); // Replace with the actual URL
      const fileName = 'testFile.txt';
      
      // Simulate dragging and dropping the file
      cy.get('.drop-zone').attachFile({ filePath: fileName, encoding: 'utf-8' });
  
      // Verify that the file has been selected
      cy.get('.output').should('contain', `Selected ${fileName}`);
    });
  });
  