const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true
})Gabicake/
├── frontend/            # Aplicação Next.js (PWA)
│   ├── pages/
│   ├── components/
│   ├── public/
│   ├── styles/
│   ├── package.json
│   └── README.md
├── backend/             # API Node.js + Express
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── index.js
│   ├── package.json
│   └── README.md
└── README.md            # Documentação geral do projeto

module.exports = withPWA({})
