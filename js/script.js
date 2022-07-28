import ScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabNav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initdropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initFuncionamento from "./modules/funcionamento.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

initModal();
initTooltip();
initdropdownMenu();
initMenuMobile();
initFetchBitcoin();
initFetchAnimais();
initFuncionamento();
initAnimacaoScroll();
