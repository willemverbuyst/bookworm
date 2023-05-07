describe("Check root", () => {
  it("should return status 200 and a response", () => {
    cy.api("/").then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.body).to.have.property("ping");
      expect(resp.body.ping).to.eq("pong");
    });
  });
});
