$(function() {

	var bubl = {
		apiRoot: 'http://bublv2apitest.azurewebsites.net/api/objects',
		selectedElement : null,
		init: function(){
			var self = this;
			self.initInterface();
		},
		
		initInterface: function(){
			var self = this;
			ZEN.data.load(
				'/js/editor-data.js', {},
				function (data) {
					var app = ZEN.parse(data);
					ZEN.log(app);
					
					self.loadBubl();
					// init app buttons here
					self.setupButtons();					
				}
			);	
		},
		loadBubl: function(){
			var self = this;
			ZEN.data.load(
				'/js/presentation-data.js', {},
				function(data){
					var contentArea = { el: $('#bubl') };
					ZEN.parse(data, contentArea);	
					
					self.editor = ace.edit("editor");
				    self.editor.setTheme("ace/theme/monokai");
				    self.editor.getSession().setMode("ace/mode/javascript");
		
					$(document).on("click",".bubl *", function () {
						self.setSelected($(this));
						return(false);
					});
				}
			);
		},
		setSelected: function(element){
			var self = this;
			self.selectedElement = element;
			self.showSettings();
		},
		showSettings: function(){
			var self = this;
			var json = self.selectedElement.data('settings');
			var prettyJson = JSON.stringify(json, null, 4);
			self.editor.session.setValue(prettyJson);
		},
		setupButtons: function(){
			var self = this;
			$('#UpButton').click(
				function(){
					if(self.selectedElement !== undefined && self.selectedElement.parent() !== undefined){
						self.setSelected(self.selectedElement.parent());
					}
				}
			);	
			$('#AddButton').click(					
				function(){
					var data = self.editor.getSession().getValue();
					$.post(self.apiRoot, JSON.parse(data), 
						function(returnData){
							returnData = returnData;
							alert(JSON.stringify(returnData));
						}	
					);
				}
			);	
			$('#SaveButton').click(
				function(){
				
				}
			);	
			$('#DeleteButton').click(
				function(){
				
				}
			);	
			$('#TestAPI').click(
				function(){
					ZEN.log('starting test api "' + self.apiRoot + '"');
					var request = $.get(self.apiRoot, {});
					request.success(
						function(data){
							alert(JSON.stringify(data));
						}
					);
					request.error(
						function(jqXHR, textStatus, errorThrown){
							alert('textStatus="' + textStatus + '" errorThrown = "' + errorThrown + '"');
						}
					);
				}
			);	
		}		
	}
	bubl.init();
});
