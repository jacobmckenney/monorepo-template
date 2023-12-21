#!/bin/bash
function kill_port_keyword {
    port=$1
    keyword=$2
    PID="$(lsof -i tcp:$port | awk -v pat="$keyword" '$0 ~ pat {print $2; exit}')"
    if [ -n "$PID" ]
    then
        echo "Killing $2"
        kill -9 "$PID"
    fi
}

function shutdown_app {
   kill_port_keyword 3000 "node" # nextjs
   kill_port_keyword 5432 "postgres" # postgres
}

shutdown_app