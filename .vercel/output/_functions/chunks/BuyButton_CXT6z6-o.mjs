import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_CTEvIZ5D.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$BuyButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BuyButton;
  const ARGENTINA = "AR";
  const country = Astro2.request.headers.get("X-Vercel-IP-Country") || "AR";
  const storeCountry = country === ARGENTINA ? "argentina" : "usa";
  const countryName = country === ARGENTINA ? "Argentina" : "Estados Unidos";
  const { buy } = Astro2.props;
  const url = buy[storeCountry];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} title="Comprar en roll" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-6 py-4 text-white text-accent font-semibold bg-primary hover:bg-primary/80 transition-colors duration-300 rounded-xl">
Comprar en Foodie ${countryName} </a>`;
}, "D:/+cursos/React/React JS Masterclass - Go From Zero To Job Ready/Practice/rollyroll/src/components/BuyButton.astro", void 0);

const $$file = "D:/+cursos/React/React JS Masterclass - Go From Zero To Job Ready/Practice/rollyroll/src/components/BuyButton.astro";
const $$url = undefined;

export { $$BuyButton as default, $$file as file, $$url as url };
