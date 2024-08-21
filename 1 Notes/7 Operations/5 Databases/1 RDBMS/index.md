---
title: RDBMS
sidebar_position: 1
---
----
### List of RDBMS
- RDBMS
  - Postgres
  - MySQL [Oracle] MariaDB [Free and OpenSource]
  - TitaniumDB 
    - an open-source distributed SQL database that supports Hybrid Transactional and Analytical Processing (HTAP) workloads. It is MySQL compatible and features horizontal scalability, strong consistency, and high availability.
  - MS SQL
  - Oracle
  - CockroachDB - https://www.cockroachlabs.com/docs/
- Embedded DB
  - SQLite
  - H2 - Java Compatible
  - eXtremeDB - C++ | C# | Native Java | Python
- Time Series DB
  - InfluxDB
- Spreadsheet DB
  - Apache Airtable

----
### Some other databases

- https://github.com/nocodb/nocodb https://www.nocodb.com/
- https://github.com/pingcap/tidb [ Used by paypay]
- https://clickhouse.com/

----
### What is a database transaction?

In short, a database transaction is a sequence of multiple operations performed on a database, and all served as a single logical unit of work — taking place wholly or not at all. In other words, there’s never a case that only half of the operations are performed and the results saved. When a database transaction is in flight, the database state may be temporarily inconsistent, but when the transaction is committed or ends, the changes are applied.

----

### ACID


### Database Cluster with master replication

- https://galeracluster.com/
