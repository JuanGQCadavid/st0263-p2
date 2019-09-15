#!/bin/bash

#!/bin/bash

echo "Checking if docker is installed"
if ! [ -x "$(command -v docker)" ]; then
    echo "Install and start docker"
    yum update -y
    yum install -y docker
    service docker start
    usermod -a -G docker ec2-user
else
    echo 'Docker is installed'
fi

# Stopping previos dockers containers
docker stop mongodb
docker rm mongodb

# Bringing mongo
docker pull mongo

docker run \
    --name mongodb \
    -d \
    -p 27017-27019:27017-27019  \
    -v ~/mongo/data:/data/db \
    mongo \
    --replSet "rs0" 

#Add the group

docker exec -it mongodb mongo

config = {
      "_id" : "rs0",
      "members" : [
          {
              "_id" : 0,
              "host" : "3.227.190.99:27017"
          },
          {
              "_id" : 1,
              "host" : "3.225.52.99:27017"
          }
      ]
  }

rs.initiate(config)




rs0:PRIMARY> rs.status()
{
	"set" : "rs0",
	"date" : ISODate("2019-09-15T23:17:36.308Z"),
	"myState" : 1,
	"term" : NumberLong(1),
	"syncingTo" : "",
	"syncSourceHost" : "",
	"syncSourceId" : -1,
	"heartbeatIntervalMillis" : NumberLong(2000),
	"optimes" : {
		"lastCommittedOpTime" : {
			"ts" : Timestamp(1568589446, 5),
			"t" : NumberLong(1)
		},
		"lastCommittedWallTime" : ISODate("2019-09-15T23:17:26.928Z"),
		"readConcernMajorityOpTime" : {
			"ts" : Timestamp(1568589446, 5),
			"t" : NumberLong(1)
		},
		"readConcernMajorityWallTime" : ISODate("2019-09-15T23:17:26.928Z"),
		"appliedOpTime" : {
			"ts" : Timestamp(1568589446, 5),
			"t" : NumberLong(1)
		},
		"durableOpTime" : {
			"ts" : Timestamp(1568589446, 5),
			"t" : NumberLong(1)
		},
		"lastAppliedWallTime" : ISODate("2019-09-15T23:17:26.928Z"),
		"lastDurableWallTime" : ISODate("2019-09-15T23:17:26.928Z")
	},
	"lastStableRecoveryTimestamp" : Timestamp(1568589446, 2),
	"lastStableCheckpointTimestamp" : Timestamp(1568589446, 2),
	"members" : [
		{
			"_id" : 0,
			"name" : "3.227.190.99:27017",
			"ip" : "3.227.190.99",
			"health" : 1,
			"state" : 1,
			"stateStr" : "PRIMARY",
			"uptime" : 536,
			"optime" : {
				"ts" : Timestamp(1568589446, 5),
				"t" : NumberLong(1)
			},
			"optimeDate" : ISODate("2019-09-15T23:17:26Z"),
			"syncingTo" : "",
			"syncSourceHost" : "",
			"syncSourceId" : -1,
			"infoMessage" : "could not find member to sync from",
			"electionTime" : Timestamp(1568589444, 1),
			"electionDate" : ISODate("2019-09-15T23:17:24Z"),
			"configVersion" : 1,
			"self" : true,
			"lastHeartbeatMessage" : ""
		},
		{
			"_id" : 1,
			"name" : "3.225.52.99:27017",
			"ip" : "3.225.52.99",
			"health" : 1,
			"state" : 2,
			"stateStr" : "SECONDARY",
			"uptime" : 22,
			"optime" : {
				"ts" : Timestamp(1568589446, 5),
				"t" : NumberLong(1)
			},
			"optimeDurable" : {
				"ts" : Timestamp(1568589446, 5),
				"t" : NumberLong(1)
			},
			"optimeDate" : ISODate("2019-09-15T23:17:26Z"),
			"optimeDurableDate" : ISODate("2019-09-15T23:17:26Z"),
			"lastHeartbeat" : ISODate("2019-09-15T23:17:34.844Z"),
			"lastHeartbeatRecv" : ISODate("2019-09-15T23:17:34.930Z"),
			"pingMs" : NumberLong(1),
			"lastHeartbeatMessage" : "",
			"syncingTo" : "3.227.190.99:27017",
			"syncSourceHost" : "3.227.190.99:27017",
			"syncSourceId" : 0,
			"infoMessage" : "",
			"configVersion" : 1
		}
	],
	"ok" : 1,
	"$clusterTime" : {
		"clusterTime" : Timestamp(1568589446, 5),
		"signature" : {
			"hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
			"keyId" : NumberLong(0)
		}
	},
	"operationTime" : Timestamp(1568589446, 5)
}
rs0:PRIMARY> 

