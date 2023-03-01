describe("Возводит x в степень n", function () {
    it("5 ** 1", function () {
        assert.equal(pow(5, 1), 5);
    });
    it("5 ** 2", function () {
        assert.equal(pow(5, 2), 25);
    });

    it("5 ** 3", function () {
        assert.equal(pow(5, 3), 125);
    });
});