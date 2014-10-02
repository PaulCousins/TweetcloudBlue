function TwitterService() {

	// Twitter returns the date as WWW MMM DD HH:MM:SS +ZZZZ YYYY.
	
	this.formatDateFromTwitter = function(s)
	{
		var aPieces = s.split(" ");

		var date = new Date(aPieces[1]+" "+aPieces[2]+", "+aPieces[5]+" "+aPieces[3]+" "+aPieces[4] || "");
		var diff = (((new Date()).getTime() - date.getTime()) / 1000);
		var day_diff = Math.floor(diff / 86400);
		
		return ""+
		 day_diff == 0 && (
		 diff < 60 && "<1m" ||
		 diff < 120 && "1m" ||
		 diff < 3600 && Math.floor( diff / 60 ) + "m" ||
		 diff < 7200 && "1h" ||
		 diff < 86400 && Math.floor( diff / 3600 ) + "h"
		 ) ||
		 day_diff == 1 && "yesterday" ||
		 day_diff + "d";
	}

	this.tweetUrl = function(tw){ 
		return "https://twitter.com/"+tw.user.screen_name+"/status/"+tw.id_str; 
	}
}
