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
				/*
<div class="ext" ontouchstart="this.classList.toggle('hover');">
	<div class="int">
		<div class="front"> 
			<!-- your custom content --> 
		</div>
		<div class="back"> 
			<!-- your custom content --> 
		</div>
	</div>
</div>				
				*/
				//this.addElement('<div class="flipper" style="width:100px;height:100px"/>');
				//var internal = this.el.append('<div class="ext" ontouchstart="this.classList.toggle(\'hover\');"><div class="int"><div class="front">this is the front</div><div class="back">this is the back</div></div></div>');
				this.addElement('<div class="flipper" style="width:100px;height:100px"/>');
				var external = $('<div class="ext" ontouchstart="this.classList.toggle(\'hover\');"/>').appendTo(this.el);
				var internal = $('<div class="int"/>').appendTo(external);
				var front = $('<div class="front"/>').appendTo(internal);
				var back = $('<div class="back"/>').appendTo(internal);
				ZEN.parse(this.params.children[0], { el: front } );
				ZEN.parse(this.params.children[1], { el: back } );
				this.params.children = [];
				/*
				var internal = this.el.children('.ext').append('<div class="int"/>');
				var front = this.el.children('.int').append('<div class="front"/>');
				var back = this.el.children('.int').append('<div class="back"/>');
				ZEN.parse(this.params.children[0], this.el.children('.front'));
				ZEN.parse(this.params.children[1], this.el.children('.back'));
				*/
			}
		}
);


ZEN.registerType('Bubl', BublControl);
ZEN.registerType('Video', VideoControl);
ZEN.registerType('Flipper', FlipperControl);


