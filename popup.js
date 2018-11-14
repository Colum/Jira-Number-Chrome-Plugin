// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

function click(e) {
  var issueNum = document.getElementById("inputField").value;
  var worklog = document.getElementById("worklog").value;
  chrome.tabs.update({
     url: "https://plurilock.atlassian.net/browse/" + worklog + "-" + issueNum
});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }

});
