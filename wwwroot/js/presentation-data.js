{
	"type": "Bubl",
	"id": "bubl",
	"views": [
		{
			"type": "View",
			"id": "Page1",
			"class": "bubl",
			"children" : [
				{
					"type": "View",
					"children":[
						{
							"type": "View",
							"layout":{ "style": "vertical", "width": "3-5" },
							"children": [
								{
									"type": "Header",
									"content": "Example Bubl"
								}
							]
						},
						{
							"type": "View",
							"layout":{ "style": "vertical", "width": "2-5" },
							"style": {
								"text-align": "right"
							},
							"children":[
								{
									"type": "Image",
									"id": "logo",
									"url": "http://www.richinteractive.com/wp-content/uploads/2011/11/rich-logo-white-84High.png",
									"style":{
										"margin-right":"10px"
									}
								}
							]
						}
					]
				},
				{
					"type": "View",
					"children":[
						{
							"type": "View",
							"layout":{ "style": "vertical", "width": "3-5" },
							"children": [
								{
									"type": "Video",
									"url": "https://avvimeo-a.akamaihd.net/47707/651/82349359.mp4?token2=1434557716_a9cb3691a320a8bc3514a42e7573c073&aksessionid=43cb1a7606cda3cf&ns=4"
								}
							]
						},
						{
							"type": "View",
							"layout":{ "style": "vertical", "width": "2-5" },	
							"children": [
								{
									"type": "Text",
									"content": "testing nested columns..."
								},
								{
									"type": "View",
									"children": [
										{
											"type": "View",
											"layout": { "style": "vertical", "width": "1-2" },
											"children": [
												{
													"type": "Text",
													"content": "a Flipper" 	
												},
												{
													"type": "Flipper",
													"children":[
														{
															"type": "Image",
															"url": "img/default-avatar.png"
														},
														{
															"type": "Text",
															"content":"here is a person"
														}										
													]
												}
											]
										},
										{
											"type": "View",
											"layout": { "style": "vertical", "width": "1-2" },
											"children": [
												{
													"type": "Text",
													"content": "a CrossFader" 	
												},
												{
													"type": "CrossFader",
													"children":[
														{
															"type": "Image",
															"url": "img/default-avatar.png"
														},
														{
															"type": "Text",
															"content":"this is the back text"
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
			]
		}
	]
}
