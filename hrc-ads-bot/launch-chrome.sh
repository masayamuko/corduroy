#!/bin/bash
USER_DATA_DIR="/Users/masaya/.chrome-hrc-ads"
mkdir -p "$USER_DATA_DIR"

if lsof -i :9222 > /dev/null 2>&1; then
  echo "Chrome (CDP) is already running on port 9222"
  exit 0
fi

"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --remote-debugging-port=9222 \
  --user-data-dir="$USER_DATA_DIR" \
  --no-first-run \
  --no-default-browser-check \
  --window-size=1400,900 \
  "https://ads.google.com/" \
  > /tmp/hrc-ads-chrome.log 2>&1 &

echo "Chrome launched (PID: $!). CDP: http://127.0.0.1:9222"
echo "Profile: $USER_DATA_DIR"
