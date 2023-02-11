#!/bin/bash

PYVER=$(python -c 'import sys; print(".".join(map(str, sys.version_info[:1])))')
if [ "$PYVER" = "3" ]; then
    python3 -m http.server 8005 --bind 127.0.0.1 &
    open -n -a "Google Chrome" --args "http://127.0.0.1:8005"
else
    python -m SimpleHTTPServer 8005 &
    open -n -a "Google Chrome" --args "http://127.0.0.1:8005"
fi
