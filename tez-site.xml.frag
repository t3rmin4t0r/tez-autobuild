<?xml version="1.0"?>
<configuration>
  <property>
    <name>tez.lib.uris</name>
    <value>${fs.default.name}/apps</value>
  </property>
  <property>
    <name>tez.am.log.level</name>
    <value>WARN</value>
  </property>
  <property>
    <name>tez.staging-dir</name>
    <value>/tmp/${user.name}/staging</value>
  </property>
  <!-- heartbeat configs -->
  <property>
    <name>tez.task.heartbeat.timeout.check-ms</name>
    <!-- once every 2 heartbeats -->
    <value>8000</value>
  </property>
  <property>
    <name>tez.task.timeout-ms</name>
    <!-- after 3  heartbeats -->
    <value>60000</value>
  </property>
  <property>
    <name>ipc.client.connect.timeout</name>
    <value>2000</value>
  </property>
  <!-- slow-start configs -->
  <property>
    <name>tez.shuffle-vertex-manager.min-src-fraction</name>
    <value>0.1</value>
  </property>
  <property>
    <name>tez.shuffle-vertex-manager.max-src-fraction</name>
    <value>0.8</value>
  </property>
  <property>
    <name>tez.am.am-rm.heartbeat.interval-ms.max</name>
    <value>250</value>
  </property>
  <property>
    <name>tez.runtime.transfer.data-via-events.enabled</name>
    <value>true</value>
  </property>
  <property>
    <name>tez.runtime.transfer.data-via-events.max-size</name>
    <value>512</value>
  </property>
  <property>
    <name>tez.am.resource.memory.mb</name>
    <value>2048</value>
  </property>
  <property>
    <name>tez.am.launch.cmd-opts</name>
    <value>-XX:+PrintGCDetails -verbose:gc -XX:+PrintGCTimeStamps -XX:+UseNUMA -XX:+UseG1GC -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/</value>
  </property>
  <property>
    <name>tez.grouping.split-waves</name>
    <value>0.6</value>
  </property>
  <!-- Used for consistent splits and llap cache -->
  <property>
    <name>tez.grouping.node.local.only</name>
    <value>true</value>
  </property>
  <property>
    <name>tez.grouping.min-size</name>
    <value>67108864</value>
  </property>
  <property>
    <name>tez.grouping.max-size</name>
    <value>1073741824</value>
  </property>
  <property>
    <name>tez.am.container.reuse.enabled</name>
    <value>true</value>
  </property>
  <property>
    <name>tez.am.container.session.delay-allocation-millis</name>
    <value>1000</value>
  </property>
  <property>
    <name>tez.am.container.reuse.rack-fallback.enabled</name>
    <value>true</value>
  </property>
  <property>
    <name>tez.am.container.reuse.non-local-fallback.enabled</name>
    <value>true</value>
  </property>
  <property>
    <name>tez.am.container.reuse.locality.delay-allocation-millis</name>
    <value>20</value>
  </property>
  <property>
    <name>tez.runtime.compress</name>
    <value>true</value>
  </property>
  <property>
    <name>tez.runtime.compress.codec</name>
    <value>org.apache.hadoop.io.compress.SnappyCodec</value>
  </property>
  <property>
    <name>tez.task.get-task.sleep.interval-ms.max</name>
    <value>10</value>
  </property>
  <property>
    <name>tez.generate.debug.artifacts</name>
    <value>true</value>
  </property>
  <property>
    <name>tez.shuffle-vertex-manager.enable.auto-parallel</name>
    <value>false</value>
  </property>
  <property>
    <name>tez.task.generate.counters.per.io</name>
    <value>true</value>
  </property>
  <!-- ~4x counters due to per-io -->
  <property>
    <name>tez.counters.max</name>
    <value>4096</value>
  </property>
  <property>
    <name>tez.runtime.empty.partitions.info-via-events.enabled</name>
    <value>true</value>
  </property>
  <property>
    <name>tez.runtime.pipelined.sorter.sort.threads</name>
    <value>2</value>
  </property>
  <property>
    <name>tez.runtime.pipelined.sorter.lazy-allocate.memory</name>
    <value>true</value>
  </property>
  <property>
    <name>tez.am.maxtaskfailures.per.node</name>
    <value>60</value>
  </property>
  <property>
    <name>tez.simple.history.logging.dir</name>
    <value>${fs.default.name}/tez-history/</value>
  </property>
  <property>
    <name>tez.history.logging.service.class</name>
    <value>org.apache.tez.dag.history.logging.impl.SimpleHistoryLoggingService</value>
<!-- disable ATS
    <value>org.apache.tez.dag.history.logging.ats.ATSV15HistoryLoggingService</value>
-->
  </property>
  <property>
    <name>tez.allow.disabled.timeline-domains</name>
    <value>true</value>
  </property>
  <!--
  -->
  <property>
    <name>tez.am.session.min.held-containers</name>
    <value>10</value>
  </property>
  <property>
    <name>tez.session.am.dag.submit.timeout.secs</name>
    <value>1800</value>
  </property>
  <property>
    <name>tez.am.heartbeat.counter.interval-ms.max</name>
    <value>4000</value>
  </property>
  <property>
    <name>tez.runtime.shuffle.keep-alive.enabled</name>
    <value>true</value>
  </property>
  <property>
    <name>tez.runtime.optimize.local.fetch</name>
    <value>false</value>
  </property>
  <property>
    <name>tez.runtime.optimize.shared.fetch</name>
    <value>false</value>
  </property>
  <property>
    <name>tez.runtime.enable.final-merge.in.output</name>
    <value>false</value>
  </property>
  <property>
    <!-- Starting 0.7 (disabled, the final-merge option is better for failures) -->
    <name>tez.runtime.pipelined-shuffle.enabled</name>
    <value>false</value>
  </property>
  <property>
    <name>tez.runtime.shuffle.use.async.http</name>
    <value>false</value>
  </property>
  <property>
    <name>tez.task.resource.calculator.process-tree.class</name>
    <value>org.apache.tez.util.TezMxBeanResourceCalculator</value>
  </property>
<!-- Enable thisto convert user payload to history text
  <property>
    <name>tez.runtime.convert.user-payload.to.history-text</name>
    <value>true</value>
  </property>
-->
  <property>
    <name>tez.runtime.report.partition.stats</name>
    <value>true</value>
  </property>
  <property>
    <name>tez.runtime.shuffle.parallel.copies</name>
    <value>4</value>
  </property>
  <property>
    <name>tez.am.acls.enabled</name>
    <value>false</value>
  </property>
  <!-- Specifically for LLAP where hflush can be too many -->
  <property>
    <name>tez.dag.recovery.max.unflushed.events</name>
    <value>150000</value>
  </property>
  <property>
    <name>tez.dag.recovery.flush.interval.secs</name>
    <value>60</value>
  </property>
  <property>
    <name>tez.dag.recovery.enabled</name>
    <value>true</value>
  </property>
  <!-- Re-schedule tasks which were running on nodes which may have failed
       Shuffle data is not availalbe after a node crash for LLAP -->
  <property>
    <name>tez.am.node-unhealthy-reschedule-tasks</name>
    <value>true</value>
  </property>
  <property>
    <name>tez.am.dag.scheduler.class</name>
    <value>org.apache.tez.dag.app.dag.impl.DAGSchedulerNaturalOrderControlled</value>
  </property>
  <property>
    <name>tez.am.node-blacklisting.enabled</name>
    <value>false</value>
  </property>
  <property>
    <name>tez.am.task.reschedule.higher.priority</name>
    <value>false</value>
  </property>
</configuration>
