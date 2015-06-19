"use strict";

var ZEN = (typeof ZEN === undefined) ? {} : ZEN;

ZEN = function () {

	var types = {};
	var controls = {};
	
	function init () {

	}


	function log () {
		return window.console && console.log &&
			Function.apply.call(console.log, console, arguments);
	}
	

	function parse (data, parent) {
		var o, item, container, i, child;
		if (data !== null) {
			if (data.type !== undefined) {
				if (types.hasOwnProperty(data.type)) {
					// create an instance
					o = new types[data.type](data, parent);
					addControl(o);
					
					// check for container objects
					for (item in data) {
						if (data.hasOwnProperty(item)) {
							if (_.isArray(data[item])) {
								container = data[item];
								for (i = 0; i < container.length; i = i + 1) {
									child = parse(container[i], o);
								}
							}
						}
					}
				} else {
					ZEN.log('Unknown ZEN Type: ' + data.type);
					o = new ZEN.ui.BaseControl(data, parent);
					addControl(o);
				}
			}
		}
		return o;
	}


	function registerType (name, obj) {
		types[name] = obj;
	}


	function addControl (o) {
		// if (controls.hasOwnProperty(o.id)) {
		// 	controls[o.id].cleanup();
		// }
		log(o.id);
		controls[o.id] = o;
	}
	

	function getControl (id) {
		if (controls.hasOwnProperty(id)) {
			return controls[id];
		}
		return null;
	}
	
	
	return {
		init: init,
		log: log,
		parse: parse,
		registerType: registerType,
		getControl: getControl,
		controls: controls
	};
	
}();


