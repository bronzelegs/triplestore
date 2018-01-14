describe("test1", function() {
  // The 'it' function of Jasmine defined an individual test. The first argument is
  // a description of the test that's appended to the module name. Because a module name
  // is typically a noun, like the name of the function being tested, the description for
  // an individual test is typically written in an action-data format.

  it("is a simple test", function() {
    // Invoke the unit being tested as necessary
    var json = JSON.parse('{"name": "Maria", "id": 2111858}');
    console.log(json.name);
    // Check the results; "expect" and toEqual are Jasmine methods.
    expect(json["name"]).toEqual("Maria");
    expect(json.id).toEqual(2111858);
  });
});
