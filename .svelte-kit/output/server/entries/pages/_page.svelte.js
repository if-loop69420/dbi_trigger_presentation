import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import "reveal.js";
import "reveal.js/plugin/highlight/highlight.js";
import "reveal.js/plugin/markdown/markdown.js";
import "reveal.js/plugin/notes/notes.js";
/* empty css                */const reveal = "";
const black = "";
const monokai = "";
const Slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = null } = $$props;
  let { animate = false } = $$props;
  let { restart = false } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.animate === void 0 && $$bindings.animate && animate !== void 0)
    $$bindings.animate(animate);
  if ($$props.restart === void 0 && $$bindings.restart && restart !== void 0)
    $$bindings.restart(restart);
  return `<section${add_attribute("data-auto-animate-id", id, 0)}${add_attribute("data-auto-animate", animate || null, 0)}${add_attribute("data-auto-animate-restart", restart || null, 0)}>${slots.default ? slots.default({}) : ``}</section>`;
});
const Presentation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `Horizontal Slide`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
        default: () => {
          return `Vertical`;
        }
      })} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
        default: () => {
          return `Also Vertical`;
        }
      })}`;
    }
  })}`;
});
const Slides = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="reveal"><div class="slides">${validate_component(Presentation, "Presentation").$$render($$result, {}, {}, {})}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-fhfmdk_START -->${$$result.title = `<title>Presentation</title>`, ""}<!-- HEAD_svelte-fhfmdk_END -->`, ""} ${validate_component(Slides, "Slides").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
