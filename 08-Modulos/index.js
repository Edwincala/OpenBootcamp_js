import { suma, multiplica } from "./controller.js";
import chalk from "chalk";

const sum1 = suma(1, 2);
console.log(sum1);

const sum2 = suma(4, 5);
console.log(sum2);

const producto = multiplica(sum1, sum2);
console.log(chalk.green(producto));
