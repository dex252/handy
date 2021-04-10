#!/bin/bash

ssh root@46.161.49.158  "set -xe && ps aux | 
grep 'HandyHost' |
 grep -v 'grep'  |
 awk '{print \$2}' |
 xargs kill -9 |
(cd ~/handyhost/handy/HandyHost && git pull) |
(cd ~/handyhost/handy/HandyHost && dotnet run HandyHost.dll)
  " 
  #| ~/handyhost/handy/HandyHost dotnet run    
  #|(cd ~/handyhost/handy/HandyHost && dotnet run HandyHost.dll)
sleep 15