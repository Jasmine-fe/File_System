// unrecognizedLocation.test.js (Cypress)
describe('Handle Unrecognized Location', () => {
    it('should prompt user to enter a new city if the location is unrecognized', () => {
      cy.visit('http://localhost:3000'); // Replace with the actual URL
  
      // Simulate unrecognized city scenario
      cy.window().then((win) => {
        cy.stub(win, 'getLocationCity').returns('UnrecognizedCity');
      });
  
      // Select a file
      const fileName = 'testFile.txt';
      cy.get('.file-input').attachFile(fileName);
  
      // Submit the file and check that the prompt is triggered
      cy.get('.button-container button').contains('Submit').click();
      cy.get('.output').should('contain', `Failed to upload ${fileName}. Location not provided.`);
    });
  });
  