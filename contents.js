// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendMessage(tab.id, {method: "getText"}, function(response) {
        {   alltext = response.data;
                 }
    });
});
