# Babel-prac
- IE11でfetch&Promise相当の動作をするようにトランスパイルしたもの
  - Chrome：fetchで通信
  - IE：XHRで通信
  
install
```
npm install
```

build for dev
```
npm run dev
```

build for prod
```
npm run build
```

- `public/bundle.js`が生成される
- `public/index.html`からデバッグで確認