"use strict";
var ZEN = (typeof ZEN === undefined) ? {} : ZEN;

function BublControl (params, parent) {
	if (arguments.length > 0) {
 		ZEN.ui.BaseControl.call(this, params, parent);
    }
    return this;
}

BublControl.prototype = new ZEN.ui.BaseControl();

_.extend(
	BublControl.prototype,
		{
			init: function (params, parent) {
				// call the base class init method
				ZEN.ui.BaseControl.prototype.init.call(this, params, parent);
			},
			render: function () {
				this.addElement('<div/>');
			}
		}
);

function VideoControl (params, parent) {
	if (arguments.length > 0) {
 		ZEN.ui.BaseControl.call(this, params, parent);
    }
    return this;
}

VideoControl.prototype = new ZEN.ui.BaseControl();

_.extend(
	VideoControl.prototype,
		{
			init: function (params, parent) {
				// call the base class init method
				ZEN.ui.BaseControl.prototype.init.call(this, params, parent);
			},
			render: function () {
				this.addElement('<video width="90%" height="240" controls/>');
				this.el.append('<source src="' + this.params.url + '" type="video/mp4"/>');
			}
		}
);

function FlipperControl (params, parent) {
	if (arguments.length > 0) {
 		ZEN.ui.BaseControl.call(this, params, parent);
    }
    return this;
}

FlipperControl.prototype = new ZEN.ui.BaseControl();

_.extend(
	FlipperControl.prototype,
		{
			init: function (params, parent) {
				// call the base class init method
				ZEN.ui.BaseControl.prototype.init.call(this, params, parent);
			},
			render: function () {
				this.addElement('<div class="flipper" style="width:100px;height:100px"/>');
				if(this.params.orientation === 'v'){
					this.el.addClass('v');
				} else {
					this.el.addClass('h');
				}
				var external = $('<div class="ext" ontouchstart="this.classList.toggle(\'hover\');"/>').appendTo(this.el);
				var internal = $('<div class="int"/>').appendTo(external);
				var front = $('<div class="front"/>').appendTo(internal);
				var back = $('<div class="back"/>').appendTo(internal);
				ZEN.parse(this.params.children[0], { el: front } );
				ZEN.parse(this.params.children[1], { el: back } );
				
				// make sure parsing doesnt continue
				this.params.children = [];
			}
		}
);


ZEN.registerType('Bubl', BublControl);
ZEN.registerType('Video', VideoControl);
ZEN.registerType('Flipper', FlipperControl);


