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
