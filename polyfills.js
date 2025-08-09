// Only run this in environments where EventSource isn't built-in (like RN/Node)
if (typeof global.EventSource === 'undefined') {
  try {
    global.__USE_EVENTSOURCE__ = true;
    global.EventSource = require('eventsource');
    console.log('✅ EventSource polyfill loaded');
  } catch (err) {
    console.error('❌ Failed to load EventSource polyfill:', err);
  }
}
