#!/bin/bash

ssh root@46.161.49.158  << EOF
set -xe && ps aux | 
grep 'HandyHost' |
 grep -v 'grep'  |
 awk '{print \$2}' |
 xargs kill -9 |
(cd ~/handyhost/handy/HandyHost && git pull) ;
(cd ~/handyhost/handy/HandyHost && nohup dotnet run HandyHost.dll);
EOF

#ps aux | grep 'HandyHost' | grep -v 'grep'  | awk '{print \$2}' | xargs kill -9