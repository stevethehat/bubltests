/*global $ */
"use strict";

var ZEN = (typeof ZEN === undefined) ? {} : ZEN;

ZEN.data = function () {

	var queue = [], loading = false;

	var querystring = {};
	var url = window.location.href.toString();
	if (url.indexOf ('?') > 0) {
		url = url.substring (url.indexOf('?')+1);
		
		var keyValues = url.split ('&');
		for (var item in keyValues) {
			var keyValue = keyValues[item].split ('=');
			querystring[keyValue[0]] = keyValue[1];
		}
	}

	function getData(opts) {
		var item, send;

		// send parameters using key:value pairs
		send = {};


		ZEN.log('loading: '+opts.location);
		loading = true;

		$.ajax(
			{
				type: 'GET',
				dataType: "json",
				data: {"data": JSON.stringify(send)},
				url: opts.location,
				cache: false,
				success: function (data) {
					if (typeof opts.callback === 'function') {
						opts.callback(data);
					}
				},

				error: function (jqXHR, textStatus, errorThrown) {
					if (typeof opts.errorcallback === 'function') {
						opts.errorcallback();
					} else {
						ZEN.log('error loading data: ' + textStatus);
						ZEN.log('error loading data: ' + errorThrown);
						ZEN.log('error from url: ' + opts.location);
					}
				},

				statusCode: {
					404: function () {
						ZEN.log("ZEN.data.load: URL not found (" + opts.location + ")");
					}
				},

				complete: function (jqXHR, textStatus) {
					loading = false;
					if (queue.length > 0) {
						item = queue.shift();
						getData(item);
					}
				}
			}
		);
	}

	function get(url, callback) {
		ZEN.data.load(
			url, 
			null, 
			function (data) {
				callback(data);
			},
			function () {
				ZEN.log('ZEN.data.get error');
			}
		);
	}

	function load(location, params, callback, errorcallback) {
		var opts = {
			"location": location,
			"params": params,
			"callback": callback,
			"errorcallback": errorcallback
		};

		if (loading === true) {
			queue.push(opts);
		} else {
			getData(opts);
		}
	}

	function save(location, data, callback) {
		$.ajax(
			{
				type: 'POST',
				url: location,
				data: data,
				success: callback
			}
		);
	}

	// public members inside the return statement
	return {
		get: get,
		load: load,
		save: save
	};
	
}();
