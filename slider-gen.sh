export JAVA_HOME=/usr/jdk64/jdk1.8.0_40/
./dist/hive/bin/hive --service llap --instances 1 --cache 32000m --executors 16 --size 170000m --xmx 128000m --loglevel WARN --args "-XX:+UseG1GC -XX:TLABSize=8m -XX:+ResizeTLAB -XX:+UseNUMA -XX:+AggressiveOpts -XX:+AlwaysPreTouch -XX:MetaspaceSize=1024m -XX:InitiatingHeapOccupancyPercent=80 -XX:MaxGCPauseMillis=200"
