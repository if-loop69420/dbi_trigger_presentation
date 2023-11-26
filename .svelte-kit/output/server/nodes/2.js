import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.af3bacdf.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.02ebdafa.js"];
export const stylesheets = ["_app/immutable/assets/2.d6707d29.css","_app/immutable/assets/app.a7033aff.css"];
export const fonts = ["_app/immutable/assets/source-sans-pro-regular.d4eaa48b.woff","_app/immutable/assets/source-sans-pro-regular.c1865d89.ttf","_app/immutable/assets/source-sans-pro-italic.05d3615f.woff","_app/immutable/assets/source-sans-pro-italic.d13268af.ttf","_app/immutable/assets/source-sans-pro-semibold.b0abd273.woff","_app/immutable/assets/source-sans-pro-semibold.a53e2723.ttf","_app/immutable/assets/source-sans-pro-semibolditalic.7225cacc.woff","_app/immutable/assets/source-sans-pro-semibolditalic.e8ec22b6.ttf"];
