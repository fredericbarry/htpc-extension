# HTPC Extension

A [Chrome web browser extension](https://developer.chrome.com/docs/extensions/) that replaces the new tab page with an HTPC user interface

## Installation

- Clone the repository or [download the ZIP file](https://github.com/fredericbarry/htpc-extension/archive/refs/heads/master.zip) and extract it to your computer
- From a Chrome web browser, navigate to `chrome://extensions` using the address bar
- Enable the `Developer mode` toggle switch on the top right of the screen
- Click the `Load unpacked` button, navigate to the cloned repository folder then click `Select`

## Adding a channel

- Create a 128 square pixels image intented to look good inside a circle filter
- Export the image as `icon_[CHANNEL_NAME]_128.jpg` under the `./images/channels` path
- Add the new channel to the channels array under the `./data/channels.json` path
