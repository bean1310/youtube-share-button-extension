'use strict';

import './popup.css';

(function () {
  
  /**
   * Copy to clipboard a content data of current an active tab.
   */
  function copy_content_data() {
    console.log("CLICK");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log(tabs);
      chrome.tabs.sendMessage(tabs[0].id,
        {
          type: 'QUERY',
          payload: {
            message: 'title'
          }
        },
        /**
         * 
         * @param {*} response content data
         */
        function (response) {
          document.getElementById('contentTitle').innerText = response.title;
          document.getElementById('contentUrl').innerText = response.url;
          navigator.clipboard.writeText(response.title + "\n" + response.url + "\n\n" + new Date().toLocaleString("ja-JP"));
        });
    });
  }

  function get_content_data() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log(tabs);
      chrome.tabs.sendMessage(tabs[0].id,
        {
          type: 'QUERY',
          payload: {
            message: 'title'
          }
        },
        /**
         * 
         * @param {*} response content data
         */
        function (response) {
          document.getElementById('contentTitle').innerText = response.title;
          document.getElementById('thumbImg').setAttribute("src", response.image_url);
        });
    });
  }

  document.getElementById("copyToClipboard").addEventListener('click', copy_content_data);
  get_content_data();

})();
