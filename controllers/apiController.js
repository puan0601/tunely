function index(req, res){
  res.json({
    message: "Welcome to Tunely!",
    documentation_url: "https://github.com/sf-wdi-labs/tunely",
    base_url: "localhost:3000",
    endpoints: [{
      method: "GET",
      path: "/api",
      description: "describes available endpoints"
    }]
  });
};

module.exports = {
  index: index
}
