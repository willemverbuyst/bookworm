describe("Request on /books", () => {
  beforeEach(function () {
    cy.fixture("api").then((api) => {
      this.api = api;
    });
  });

  it("should return status 200 and a response body", () => {
    cy.api("/books").then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp).to.have.property("body");
    });
  });

  it("should return a response body with: status, result, data, total and message", () => {
    cy.api("/books").then((resp) => {
      expect(resp.body).to.have.property("status");
      expect(resp.body).to.have.property("data");
      expect(resp.body).to.have.property("total");
      expect(resp.body).to.have.property("message");

      expect(resp.body.status).to.equal("success");
      expect(resp.body.message).to.equal("books have been fetched");
    });
  });

  it("should return 500 books when no query params given", () => {
    cy.api("/books").then((resp) => {
      expect(resp.body.data).to.have.length(500);
      expect(resp.body.result).to.equal(500);
      expect(resp.body.total).to.have.equal(500);
    });
  });

  it("should return 10 books when limit is 10", () => {
    cy.api("/books?limit=10").then((resp) => {
      expect(resp.body.data).to.have.length(10);
      expect(resp.body.result).to.equal(10);
      expect(resp.body.total).to.have.equal(500);
    });
  });

  it("should return 20 books when limit is 20 and page is 3", () => {
    cy.api("/books?limit=20&page=3").then((resp) => {
      expect(resp.body.data).to.have.length(20);
      expect(resp.body.result).to.equal(20);
      expect(resp.body.total).to.have.equal(500);
    });
  });

  it("should return 10 books with language 'EN' when limit is 10 and uuid for language 'EN' ", function () {
    cy.api(`/books?limit=10&language=${this.api.languageId.EN}`).then(
      (resp) => {
        expect(resp.body.data).to.have.length(10);
        expect(resp.body.result).to.equal(10);
        expect(resp.body.total).to.have.equal(135);
        expect(
          new Set(resp.body.data.map((i: any) => i.language)).size
        ).to.equal(1);
        expect(
          new Set(resp.body.data.map((i: any) => i.language)).has("EN")
        ).to.equal(true);
      }
    );
  });
});
