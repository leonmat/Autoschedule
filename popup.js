// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
            sendResponse({data: document.all[0].innerText, method: "getText"}); //same as innerText
       }
    }
);
