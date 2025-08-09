// polyfill.js
import 'react-native-url-polyfill/auto';
import { EventSource as RNEventSource } from "react-native-sse";

// Shim Event constructor
global.Event = class {
  constructor(type, eventInitDict = {}) {
    this.type = type;
    this.target = eventInitDict.target || null;
    this.currentTarget = eventInitDict.currentTarget || null;
  }
};

// Shim MessageEvent constructor
global.MessageEvent = class extends global.Event {
  constructor(type, eventInitDict = {}) {
    super(type, eventInitDict);
    this.data = eventInitDict.data || null;
    this.lastEventId = eventInitDict.lastEventId || "";
    this.origin = eventInitDict.origin || "";
  }
};

// Use RN EventSource if not already present
if (typeof global.EventSource === "undefined") {
  global.EventSource = RNEventSource;
  console.log("✅ EventSource polyfill loaded for React Native");
}
