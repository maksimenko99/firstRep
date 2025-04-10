import { Color } from "./color";
import { Crug } from "./crug";
import { Kvadrat } from "./kvadrat";

let crug1: Crug = new Crug(5, Color.ГОЛУБОЙ, Color.ЧЕРНЫЙ)
let kvadrat: Kvadrat = new Kvadrat(4, 5, Color.РОЗОВЫЙ, Color.ЧЕРНЫЙ)

crug1.getInfo()
kvadrat.getInfo()