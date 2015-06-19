"use strict";
var ZEN = (typeof ZEN === undefined) ? {} : ZEN;


function ViewControl (params, parent) {
	if (arguments.length > 0) {
 		ZEN.ui.BaseControl.call(this, params, parent);
    }
    return this;
}

ViewControl.prototype = new ZEN.ui.BaseControl();

_.extend(
	ViewControl.prototype,
		{
			init: function (params, parent) {
				// call the base class init method
				ZEN.ui.BaseControl.prototype.init.call(this, params, parent);
			},
			render: function () {
				this.addElement('<div/>');
				if(this.params.layout !== undefined){
					if(this.params.layout.style === 'vertical'){
						this.parent.el.addClass('pure-g');
						this.el.addClass("pure-u-" + this.params.layout.width);
					}
				}
			}
		}
);

function ContainerControl (params, parent) {
	if (arguments.length > 0) {
 		ZEN.ui.BaseControl.call(this, params, parent);
    }
    return this;
}

ContainerControl.prototype = new ZEN.ui.BaseControl();

_.extend(
	ContainerControl.prototype,
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

function HeaderControl (params, parent) {
	if (arguments.length > 0) {
 		ZEN.ui.BaseControl.call(this, params, parent);
    }
    return this;
}

HeaderControl.prototype = new ZEN.ui.BaseControl();

_.extend(
	HeaderControl.prototype,
		{
			init: function (params, parent) {
				// call the base class init method
				ZEN.ui.BaseControl.prototype.init.call(this, params, parent);
			},
			render: function () {
				this.addElement('<h1/>').text(this.params.content);
			}
		}
);


function ButtonControl (params, parent) {
    if (arguments.length > 0) {
		ZEN.ui.BaseControl.call(this, params, parent);
    }
    return this;
}

ButtonControl.prototype = new ZEN.ui.BaseControl();
_.extend(
	ButtonControl.prototype,
		{
			init: function (params, parent) {
				// call the base class init method
				ZEN.ui.BaseControl.prototype.init.call(this, params, parent);
			},
			render: function () {
				this.addElement('<button class="pure-button"/>').text(this.params.content);
			}
		}
);

function Image (params, parent) {
    if (arguments.length > 0) {
		ZEN.ui.BaseControl.call(this, params, parent);
    }
    return this;
}
Image.prototype = new ZEN.ui.BaseControl();
_.extend(
	Image.prototype,
		{
			init: function (params, parent) {
				// call the base class init method
				ZEN.ui.BaseControl.prototype.init.call(this, params, parent);
			},
			render: function () {
				this.addElement('<img src="' + this.params.url + '"/>').text(this.params.type + " ("+this.id+")");
			}
		}
);

function TextControl (params, parent) {
    if (arguments.length > 0) {
		ZEN.ui.BaseControl.call(this, params, parent);
    }
    return this;
}
TextControl.prototype = new ZEN.ui.BaseControl();
_.extend(
	TextControl.prototype,
		{
			init: function (params, parent) {
				// call the base class init method
				ZEN.ui.BaseControl.prototype.init.call(this, params, parent);
			},
			render: function () {
				this.addElement('<p/>').text(this.params.content);
			}
		}
);


ZEN.registerType('View',ViewControl);
ZEN.registerType('Container',ContainerControl);
ZEN.registerType('Header',HeaderControl);
ZEN.registerType('Image', Image);
ZEN.registerType('Button', ButtonControl);
ZEN.registerType('Text', TextControl);
