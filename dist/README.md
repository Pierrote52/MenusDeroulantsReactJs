This component is a selector helper. It's just for easiest integration on React apps. 

#First of all 
I imagine that you have installed node, npm, and React on your project. If it's not please do it it's a lot of fun. 
#Second time 
For importing my package on your roject run the command : 
	npm i @pierreinza/selector

#And now 
don't forget to put on the top of your reactFile import {Selector } from '@pierreinza/selector'

Now you can use this package. 
Please juste put on props 'result' who is a function who will put the data selected on your formular data, or what ever. And 'options ', who's a list of objects with to parameters 'name' the name who will be displayed on the selector, and 'value' the value who will be gave at the end.  

#exemple

//import {Selector} from '@pierreinza/selector'

<Selector result={(value) => { setDepartement(value) }} options={[{ name: "Sales", value: "Sales" }, { name: "Marketing", value: "Marketing" }, { name: "Engineering", value: "Engineering" }, { name: "Human Resources", value: "Human Resources" }, { name: "Legal", value: "Legal" }]} />
