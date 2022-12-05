describe('ui: ButtonAntD component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttonantd--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ButtonAntD!');
    });
});
