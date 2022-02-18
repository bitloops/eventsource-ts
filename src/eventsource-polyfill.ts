import EventSource from './eventsource-ts';

declare global {
  interface Window { EventSourcePolyfill: any; EventSource: any }
}

if (typeof window === 'object') {
  window.EventSourcePolyfill = EventSource;
  if (!window.EventSource) window.EventSource = EventSource;
  module.exports = window.EventSource;
} else {
  module.exports = EventSource;
}
