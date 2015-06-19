"use strict";
var ZEN = (typeof ZEN === undefined) ? {} : ZEN;


function EditorControl (params, parent) {
	if (arguments.length > 0) {
 		ZEN.ui.BaseControl.call(this, params, parent);
    }
    return this;
}

EditorControl.prototype = new ZEN.ui.BaseControl();

_.extend(
	EditorControl.prototype,
		{
			init: function (params, parent) {
				// call the base class init method
				ZEN.ui.BaseControl.prototype.init.call(this, params, parent);
			},
			render: function () {	
				this.addElement('<div id="editor" style="width:100%; height: 100%"/>').text("this is the editor");
			}
		}
);

function BreakControl (params, parent) {
	if (arguments.length > 0) {
 		ZEN.ui.BaseControl.call(this, params, parent);
    }
    return this;
}

BreakControl.prototype = new ZEN.ui.BaseControl();

_.extend(
	BreakControl.prototype,
		{
			init: function (params, parent) {
				// call the base class init method
				ZEN.ui.BaseControl.prototype.init.call(this, params, parent);
			},
			render: function () {	
				this.addElement('<hr/>');
			}
		}
);

ZEN.registerType('Editor', EditorControl);
ZEN.registerType('Break', BreakControl);
