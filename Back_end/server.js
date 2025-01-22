const app = require('./src/app');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
