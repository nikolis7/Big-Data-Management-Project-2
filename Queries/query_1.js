db = db.getSiblingDB("youtube");
db.getCollection("videos").aggregate(
    [
        { 
            "$match" : { 
                "country" : "GB", 
                "channel_title" : "Saturday Night Live"
            }
        }, 
        { 
            "$project" : { 
                "title" : 1.0, 
                "views" : 1.0, 
                "likes" : 1.0, 
                "dislikes" : 1.0
            }
        }, 
        { 
            "$sort" : { 
                "views" : -1.0
            }
        }
    ]
);
