const app = require("./server");
const port = process.env.PORT || 2500;

app.listen(port, () => console.log(`🚀 Server ready at ${port}`));
