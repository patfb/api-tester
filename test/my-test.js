var assert = require("chai").assert,
  expect = require("chai").expect,
  should = require("chai").should(),
  request = require("request");

describe("Rick and Morty API", function() {
  describe("when I GET the first character", function() {
    it("it should be Rick Sanchez", function(done) {
      request.get("https://rickandmortyapi.com/api/character/1", function(
        err,
        res,
        body
      ) {
        expect(res.statusCode).to.equal(200);
        expect(err).to.be.null;
        expect(JSON.parse(body)).to.have.property("name", "Rick Sanchez");
        done();
      });
    });
  });
});
