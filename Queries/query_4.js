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
            "$group" : { 
                "_id" : "Enabled", 
                "average_num_views" : { 
                    "$avg" : "$views"
                }, 
                "average_num_likes" : { 
                    "$avg" : "$likes"
                }, 
                "average_num_dislikes" : { 
                    "$avg" : "$dislikes"
                }
            }
        }
    ]
);