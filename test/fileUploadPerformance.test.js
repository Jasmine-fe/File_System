// fileUploadPerformance.test.js (Cypress)
describe('Performance Test for File Upload', () => {
    it('should handle large files without significant delay', () => {
      cy.visit('http://localhost:3000'); // Replace with the actual URL
  
      const largeFileName = 'largeFile.txt';
      cy.get('.file-input').attachFile(largeFileName);
  
      // Measure upload time
      const start = performance.now();
      cy.get('.button-container button').contains('Submit').click();
      const end = performance.now();
  
      // Verify that file upload happens within acceptable time
      expect(end - start).to.be.lessThan(3000); // 3 seconds for file submission
    });
  });
  