describe('factorial', function() {
  it("returns 1 when given 0", function() {
    expect(factorial(0)).to.equal(1);
  });

  it("returns 120 when given 5", function() {
    expect(factorial(5)).to.equal(120);
  });
});
