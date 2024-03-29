# HTPC Extension

A [Chrome web browser extension](https://developer.chrome.com/docs/extensions/) that replaces the new tab page with an HTPC user interface

## Installation

1. Clone the repository or download the [ZIP](https://github.com/fredericbarry/htpc-extension/archive/refs/heads/master.zip) file and extract it to your computer
2. From a Chrome web browser, navigate to `chrome://extensions` using the address bar
3. Enable the `Developer mode` toggle switch on the top right of the screen
4. Click the `Load unpacked` button, navigate to the cloned repository folder then click `Select`

## Adding a channel

- Create a 128 square pixels image intented to look good inside a circle filter
- Export the image as `icon_[CHANNEL_NAME]_128.jpg` under the `./images/channels` path
- Add the new channel to the channels array under the `./data/channels.json` path
