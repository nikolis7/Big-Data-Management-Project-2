db = db.getSiblingDB("youtube");
db.getCollection("videos").aggregate(
    [
        { 
            "$project" : { 
                "video_id" : 1.0, 
                "views" : 1.0, 
                "num_tags" : { 
                    "$cond" : { 
                        "if" : { 
                            "$isArray" : "$tags"
                        }, 
                        "then" : { 
                            "$size" : "$tags"
                        }, 
                        "else" : "NA"
                    }
                }
            }
        }, 
        { 
            "$sort" : { 
                "views" : -1.0
            }
        }
    ]
);