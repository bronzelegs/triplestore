describe("test1", function() {
  it("is a simple test", function() {
    const http = require("http");
    const url = "http://localhost:3000/triples";
    http.get(url, res => {
      res.setEncoding("utf8");
      let body = "";
      res.on("data", data => {
        body += data;
      });
      res.on("end", () => {
        body = JSON.parse(body);
        console.log(body);
      });
    });

  })
})
