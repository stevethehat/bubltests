"use strict";

var ZEN = (typeof ZEN === undefined) ? {} : ZEN;

ZEN.ui = function () {

	var instanceCount = 0;
	
	function BaseControl (params, parent) {
        if (arguments.length > 0) {
            this.init(params, parent);
        }
        return this;
	}

	
	BaseControl.prototype = {
		init: function (params, parent) {
			ZEN.log(params.type);

			this.id = (typeof params.id === undefined) ? 'zen-'+instanceCount : params.id;
			this.params = params;
			this.parent = parent;
			
			this.render();
			if (parent !== undefined) {
				this.el.appendTo(parent.el);
			} else {
				this.el.appendTo($('body'));
			}

		},
		render: function(){
			this.addElement('<div style="padding-left: 1em"/>').text(this.params.type + " ("+this.id+")");
		},
		addElement: function(html){
			this.el = $(html);
			this.el.attr('id', this.id);
			this.el.data('settings', _.omit(this.params, 'children'));
			if(this.params.class !== undefined){
				this.el.addClass(this.params.class);
			}
			if(this.params.layout !== undefined){
				if(this.params.layout.height !== undefined){
					var height = '';
					if(this.params.layout.height === 'max'){
						height = '100%';
					} else {
						height = this.params.layout.height;
					}
					this.el.css('height', height);
				}
			}
			if(this.params.style !== undefined){
				this.el.css(this.params.style);
			}
			return(this.el);	
		},
		cleanup: function () {
			this.el.remove();
		},
		

		testLoad: function () {
			var self = this;
			ZEN.data.load(
				'data.json', {},
				function (data) {
					ZEN.parse(data, self);
				}
			);
		}
	};
	
	
	function UIControl (params, parent) {
		if (arguments.length > 0) {
	 		BaseControl.call(this, params, parent);
	    }
	    return this;
	}
	
	UIControl.prototype = new BaseControl();

	_.extend(
		UIControl.prototype,
			{
				init: function (params, parent) {
					// call the base class init method
					BaseControl.prototype.init.call(this, params, parent);
				},
				render: function () {
					this.addElement('<div/>');
				}
			}
	);

	
	ZEN.registerType('UI',UIControl);
	ZEN.registerType('Control',BaseControl);
	
	
	return {
		BaseControl: BaseControl
	};


}();
