db = db.getSiblingDB("youtube");
db.getCollection("videos").aggregate(
    [
        { 
            "$match" : { 
                "country" : "GB", 
                "comments_disabled" : "False"
            }
        }, 
        { 
            "$unwind" : "$tags"
        }, 
        { 
            "$group" : { 
                "_id" : "$tags", 
                "count_tags" : { 
                    "$count" : { 

                    }
                }
            }
        }, 
        { 
            "$sort" : { 
                "count_tags" : -1.0
            }
        }
    ]
);