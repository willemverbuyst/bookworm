describe('GET /books', function () {
  it('should fetch all books', function () {
    cy.request('GET', 'http://localhost:8000/books').then((response) => {
      expect(response.status).equal(200);
      expect(response.body.message).equal('all books have been fetched');
      expect(response.body).to.have.property('status');
      expect(response.body).to.have.property('result');
      expect(response.body).to.have.property('data');
    });
  });
});
