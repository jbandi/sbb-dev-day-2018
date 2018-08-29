# DEMO 1: Bundle Size

https://www.lei.admin.ch/



# DEMO 2: Mini SPAs

	cd 02-mini-spa/angular-screen
	npm install
	npm start

	cd 02-mini-spa/react-screen
	npm install
	npm start

	cd 02-mini-spa/vue-screen
	npm install
	npm start
	
Open up http://localhost:4201 in a web browser.	
	

# DEMO 3: Bundle Analyzer

	cd /sbb-dev-day-2018/03-bundle-analyzer/starter-app  
	
Show import in `src/app/app.module.ts`

Build realease:

	npm run build --prod --vendor-chunk --stats-json

Show bunde content with: `webpack-bundle-analyzer dist/starter-app/stats-json`


# DEMO 4: Single SPA

	cd 20-single-spa-examples
	yarn 
	yarn build
	yarn start
	
Open up http://localhost:8080 in a web browser.
	

# DEMO 5: Single SPA with Event Bus


	cd 21-sinlge-spa-portal-example
	
Jump into each app folder and do:
   - `npm install`
  - `npm run watch:portal`

Then start the portal with:
   - `npm install`
   - `npm run watch`

Open up http://localhost:9000 in a web browser.


	
# DEMO 6: Web Components	
	cd /06-webcomponents/Angular_MicroApps_Different_Technologies
	cd shell
	npm install
	npm start
	
Got to: http://localhost:4600/	
	

Component Registrations & Child Routing: `shell/projects/client-a/src/app/app.module.ts`
	
Component Registrations: `vue/src/main.js`

Custom Top-Level Router implemented in Angular: `shell/src/app/app.component.ts`

Using Custom Element in Angular Template: `shell/projects/client-b/src/app/page2/page2.component.ts`



# DEMO 7: Webcomponents	 dynamically loaded

	cd 07-webcomponents-lazy/angular-elements-dashboard
	npm i
	npm start
	
Got to: http://localhost:4600/	

Component Registrations: `projects/external-dashboard-tile/src/app/app.module.ts`

Lazy Loading:

- `src/app/dashboard/dashboard.component.ts`
- `src/app/dashboard/external-dashboard-tile.service.ts`

	