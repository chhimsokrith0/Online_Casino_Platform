import { server } from './server'; // Node.js mock server

if (typeof window === 'undefined') {
  try {
    server.listen({
      onUnhandledRequest: 'warn', // Warn about unhandled requests
    });
    console.log('[MSW] Mocking enabled in Node.js environment.');
  } catch (error) {
    console.error('MSW Server Error:', error);
  }
} else {
  // Browser environment
  import('./browser').then(({ worker }) => {
    if (worker) {
      worker.start({
        onUnhandledRequest: 'bypass', // Bypass unhandled requests
      })
      .catch((error) => {
        console.error('MSW Worker Error:', error);
      });
      console.log('[MSW] Mocking enabled in browser.');
    }
  });
}
