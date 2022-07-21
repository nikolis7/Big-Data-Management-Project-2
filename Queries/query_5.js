db = db.getSiblingDB("youtube");
db.getCollection("videos").aggregate(
    [
        { 
            "$match" : { 
                "publish_time" : { 
                    "$lt" : ISODate("2018-03-05T00:00:00.000+0000"), 
                    "$gte" : ISODate("2017-12-05T00:00:00.000+0000")
                }, 
                "country" : "GB"
            }
        }, 
        { 
            "$group" : { 
                "_id" : { 
                    "year" : { 
                        "$year" : "$publish_time"
                    }, 
                    "month" : { 
                        "$month" : "$publish_time"
                    }, 
                    "day" : { 
                        "$dayOfMonth" : "$publish_time"
                    }
                }, 
                "count" : { 
                    "$sum" : 1.0
                }
            }
        }, 
        { 
            "$sort" : { 
                "_id" : 1.0
            }
        }
    ]
);
