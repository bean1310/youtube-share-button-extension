'use strict';

/**
 * Defination of QUERY request process.
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'QUERY') {
    const title = document.querySelector('meta[name="title"]').content;
    const url = document.querySelector('link[rel="shortlinkUrl"]').href;
    const image_url = document.querySelector('link[rel="image_src"').href;
    // Return content data to popup.js.
    sendResponse({
      title: title,
      url: url,
      image_url: image_url,
    });
  }
});
