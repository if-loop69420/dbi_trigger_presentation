export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["compound_dml_trigger.gif","create_trigger.gif","ddltrigger.png","dml_event_clause.gif","dmltrigger.png","favicon.png","instead_of_trigger.gif","logontrigger.png","plsql_trigger_source.gif","referencing_clause.gif","simple_dml_trigger.gif","system_trigger.gif","trigger_edition_clause.gif","trigger_ordering_clause.gif"]),
	mimeTypes: {".gif":"image/gif",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.401a6e5b.js","app":"_app/immutable/entry/app.0b2456b4.js","imports":["_app/immutable/entry/start.401a6e5b.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.bd3a31ce.js","_app/immutable/entry/app.0b2456b4.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.b69d5e4d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
