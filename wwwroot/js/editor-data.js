{
	"type": "UI",
	"id": "application",
	"views": [
		{
			"type": "View",
			"id": "EditorScreen",
			"layout": { "height": "max", "width": "max" },
			"children" : [
				{
					"type": "Header",
					"content": "bubl data viewer"
				}, {
					"type": "View",
					"id": "MainPanel",
					"layout": { "style": "horizontal", "height": "max", "width": "max" },
					"children": [
						{
							"type": "View",
							"id": "LeftPanel",
							"layout": { "style": "vertical", "height": "max", "width": "4-5" },
							"children": [
								{
									"type": "View", 
									"id": "bubl",
									"layout": { "style": "horrizotal", "height": "400px" },
									"class": "bordered"
								},
								{
									"type": "View",
									"layout": { "style": "horrizotal", "height": "200px" },
									"class": "bordered",
									"children": [
										{
											"type": "Editor"
										}
									]
								}
							]
						},
						{
							"type": "View",
							"id": "RightPanel",
							"layout": { "style": "vertical", "height": "max", "width": "1-5" },
							"children": [
								{
									"type": "View",
									"layout": { "style": "horrizotal", "height": "200px" },
									"class": "bordered",
									"children":[
										{
											"type": "Button",
											"id": "UpButton",
											"content": "Up"
										},		
										{
											"type": "Break"
										},
										{
											"type": "Button",
											"id": "AddButton",
											"content": "Add"
										},		
										{
											"type": "Button",
											"id": "SaveButton",
											"content": "Save"
										},
										{
											"type": "Break"
										},
										{
											"type": "Button",
											"id": "DeleteButton",
											"content":"Delete"
										},
										{
											"type": "Break"
										},
										{
											"type": "Button",
											"id": "TestAPI",
											"content": "Test Api"
										},
										{
											"type": "Break"
										},
										{
											"type": "Text",
											"content": "At the moment. You can click an element of the Bubl and see its definition JSON. Click 'Up' to navigate up and see definition of its container."
										},		
										{
											"type": "Text",
											"content": "N.B. as the editor is constructed from the same JSON format, you can navigate up into it."
										},
										{
											"type": "Text",
											"content": "The 'Test Api' button should call the webapi & show results but i get an error. The other buttons are not implementd."
										}		
									]
								}
							]
						}						
					]
				}
			]
		}
	]
}
