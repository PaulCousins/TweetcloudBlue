function NavigationService() {
	
	// [ [ imgsrc, click, tooltip ] ]
	this.buttonBar = [
		[ "fa-minus", "less()", "Show fewer cloud buttons." ],
		[ "fa-plus", "more()", "Show more cloud buttons." ],
		[ "fa-minus-square", "smaller()", "Make cloud buttons smaller." ],
		[ "fa-plus-square", "bigger()", "Make cloud buttons bigger." ],
		[ "fa-bars", "toggleShowStrings()", "Toggle display of matching strings." ],
		[ "fa-refresh", "initialize();", "Load more content." ],
		[ "fa-undo", "resetQuery()", "Clear query." ]
	]
	

}