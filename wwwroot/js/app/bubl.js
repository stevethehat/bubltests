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
				//http://localhost:3000/api/objects/1000/withdescendents
				'http://localhost:3000/api/objects/bubl/withdescendents', {},
				function(data){
					//alert(JSON.stringify(data));
					var contentArea = { el: $('#bubl') };
					$('#bubl').empty();
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
			$('#UpdateButton').click(
				function(){	
					var editorData = self.editor.getSession().getValue();
					var json = JSON.parse(editorData); 
					self.upsertObject(json,
						function(data){
							self.loadBubl();
						}
					);
				}
			);	
			$('#DeleteButton').click(
				function(){
					var object = self.selectedElement.data('settings');
					alert('delete ' + JSON.stringify(object));
					self.deleteObject(object,
						function(data){
							self.loadBubl();
						}
					);				
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
							self.upsertObject(
								{ 'type': 'import', 'title': 'ImportTest', 'id': '1000', 'children': children },
								function(data){
									self.loadBubl();
									alert('imported ' + JSON.stringify(data));
								}
							);
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
		upsertObject: function(object, callback){
			var self = this;
			
			ZEN.log('posting');
			ZEN.log(object);			
			
   			$.ajax({
        		url: self.apiRoot,
        		type: 'POST',
        		contentType: 'application/json',
        		data: JSON.stringify(object),
        		dataType: 'json',
				success: function(returnData){
					ZEN.log('returned data');
					ZEN.log(returnData);
					callback(returnData);
				}
			});
		},
		deleteObject: function(object, callback){
			var self = this;
			
			ZEN.log('deleting');
			ZEN.log(object);			
			
   			$.ajax({
        		url: self.apiRoot + '/' + object['id'],
        		type: 'DELETE',
        		contentType: 'application/json',
        		data: JSON.stringify(object),
        		dataType: 'json',
				success: function(returnData){
					ZEN.log('returned data');
					ZEN.log(returnData);
					callback(returnData);
				}
			});
		}
	}
	bubl.init();
});
