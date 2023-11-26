

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.b8fb836a.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.02ebdafa.js"];
export const stylesheets = ["_app/immutable/assets/app.a7033aff.css"];
export const fonts = [];
