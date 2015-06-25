$(function() {

	var bubl = {
		apiRoot: 'http://localhost:3000/api/objects',
		//apiRoot: 'http://bublv2apitest.azurewebsites.net/api/objects',
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
					var editorData = self.editor.getSession().getValue();
					var json = JSON.parse(editorData); 
					self.addObject(json);
				}
				/*				
				function(){
					var data = self.editor.getSession().getValue();
					$.post(self.apiRoot, JSON.parse(data), 
						function(returnData){
							returnData = returnData;
							ZEM.log(returnData);
						}	
					);
				}
				*/
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
			$('#Import').click(
				function(){
					ZEN.data.load(
						'/js/presentation-data.js', {},
						function(data){
							data['parentId'] = '1000';
							var children = [];
							children.push(data);
							self.addObject(
								{ 'type': 'import', 'title': 'ImportTest', 'id': '1000', 'children': children }
							);
							/*
							$.post(self.apiRoot, { 'type': 'import', 'title': 'ImportTest', 'id': '1000' }, 
								function(){
									data['parentId'] = '1000';
									self.addObject(data);
								}	
							);
							*/	
						}
					);
				}
			);
			$('#Init').click(
				function(){
					var request = $.get(self.apiRoot + '/init', {});
					request.success(
						function(data){
							alert(JSON.stringify(data));
						}
					);					
				}
			);	
		},
		addObject: function(object){
			var self = this;
			
			ZEN.log('posting');
			ZEN.log(object);			
			
   			$.ajax({
        		url: self.apiRoot,
        		type: 'POST',
        		contentType: 'application/json',
        		data: JSON.stringify(object),
        		// processData: false, // this is optional
        		dataType: 'json',
				success: function(returnData){
					//returnData = JSON.parse(returnData);
					ZEN.log('returned data');
					ZEN.log(returnData);
				}
			});
		}
	}
	bubl.init();
});
