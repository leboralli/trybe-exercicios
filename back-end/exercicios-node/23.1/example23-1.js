    // index.js

    const express = require('express');

    const app = express();

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Ouvindo a porta ${PORT}`);
    });