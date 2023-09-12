export default [
  {
    path: '/models/',
    source: '../../bundle/models/small',
    mime: 'application/octet-steam'
  },
  {
    path: '/models/',
    source: '../../bundle/models/medium',
    mime: 'application/octet-steam'
  },
  {
    path: '/onnxruntime-web/',
    source: './node_modules/onnxruntime-web/dist/*.wasm',
    mime: 'application/wasm'
  }
];
