	<script>
		function getMobileOS() {
			var e = navigator.userAgent || navigator.vendor || window.opera;
            return /android|Android/i.test(e) ? "android" : /iPad|iPhone|iPod|Macintosh/.test(e) && !window.MSStream ? "iOS" : "android";
		}
   		var clickTag = "https://play.google.com/store/apps/details?id=com.pyd.art.connect";
   		if (getMobileOS()=="iOS"){
   			clickTag = "https://apps.apple.com/us/app/grab-pack-play-horror-puzzle/id1602208204";
   		}
   		{/* window.failedIndex = 0;  */}
		   window.playsound = true;
		window.openStore = function() {
			  window.openAppStore();
		}

	</script>  