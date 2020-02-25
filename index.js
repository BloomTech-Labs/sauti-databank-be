const app = require("./server");
const port = process.env.PORT || 2700;

app.listen(port, () => console.log(`🚀 Server ready at ${port}`));
