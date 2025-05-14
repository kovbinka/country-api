import { typeEnter } from "./events/clickEvent.js";
import dom from "./dom.js";

dom.input.addEventListener('keypress', typeEnter);