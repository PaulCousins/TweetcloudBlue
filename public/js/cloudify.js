/*jshint node:true*/

// Cloudify: Node.js package that takes an object, an extraction function, 
// and returns the extracted data and a word cloud.

// parameters: {
// 	data: Array of objects to process.
// 	extractFn: Function to extract the string data from the objects.
// 	query: Filtering query.
// }

var Transforms = require("./transforms");

module.exports = function(parameters) {
	
	var oTransforms = Transforms(); // get once

	var returnValue = {
		stringCount: parameters.data.length, // number of strings read
		transformCount: oTransforms.data.length, // number of transforms read and applied
		wordCount: 0, // will be set to total number of words counted.
		words: [], // an ordered list of words that are keys to the cloud.
		cloud: {}
	}

	var aWords = [];
	var aWordCount = {};
	var aQueryTerm = {};

	for (var dataIndex in parameters.data) {
	
		// Extract the content.
		extract = parameters.textExtractFn(parameters.data[dataIndex]);
		
		// Massage the content to remove common artefacts.
		extract = extract
			.toLowerCase()
			.replace(/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/g,' ') // remove URLs
			.replace(/&amp;apos;/,'\'')
			.replace(/n\'t\b/g,' ')
			.replace(/\'s\b/g,' ')
			.replace(/s\'\b/g,' ')
			.replace(/[.,\/;:]/g,' ') // replace certain punctuation with spaces
			.replace(/\b\w\w?\b/g,' ') // remove 1- and 2- letter words
			.replace(/\W\W+/g,' '); // coalesce white space and punctuation

		// Filter extract according to the query (if performing query matching here).
		match = true;
		for (var queryIndex in parameters.query) {
			term = parameters.query[queryIndex];
			match &= extract.match(new RegExp(term));
		}
		if (match) {
			
			// Split words and build counting array.
			extractWords = extract.split(' ');
			for (var wordIndex in extractWords) {
				word = extractWords[wordIndex];
				if (word.length > 2) {
					returnValue.wordCount++;
					if (aWords.indexOf(word) > -1) {
						aWordCount[word].count++;
					} else {
						aWords.push(word);
						aWordCount[word] = 1;
					}
				} //  if word length > 2
			} // for word
			
		} // if filter match
	} // for data
	//DEP returnValue.log.push('aWordCount1',aWordCount.length);
		
	// Now that we have individual words, we need to apply the transforms 
	// and reduce the list even further.
	
	aWordTransform = {};
	
	for (var index in aWords) {
		word = aWords[index];
		for (trIndex in oTransforms.data) {
			tr = oTransforms.mapToObject(oTransforms.data[trIndex]);
			if (word.match(tr.exp)) {
				aWordTransform[word] = tr;
				break;
			}
		}
	}

	function encloud(word) {
		count = aWordCount[word];
		if (returnValue.words.indexOf(word) == -1) {
			returnValue.words.push(word);
			returnValue.cloud[word] = {
				'count': count,
				'queryTerm': aQueryTerm[word] ? aQueryTerm[word] : word
			}
		} else {
			returnValue.cloud[word].count += count;
		}
	}
	
	// Final loop: Remove the zero words and make the actual cloud list.
	for (var index in aWords) {
		word = aWords[index];
		transform = aWordTransform[word];
		if (transform) {
			replacement = transform.replacement;
			if (replacement) {
				encloud(replacement);				
			}
		} else {
			encloud(word);
		}
		
	}

	returnValue.words.sort();
	return returnValue;
	
}