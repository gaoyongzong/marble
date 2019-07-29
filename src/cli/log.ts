/**
*  log
*/
import chalk from 'chalk';


const prefix = `@gaoyonggege/marble`;

/**
 * 全局抛出错误 
 * @param msg : 错误
 */
export function throwError (msg: string) {
    throw new Error(`${prefix}  error : ${msg}`);
}

/**
 * log info
 * @param msg 
 */
export function logInfo (msg: string) {
    console.log(chalk.green(msg));    
}

/**
 * log warn
 * @param msg 
 */
export function logWarning (msg: string) {
    console.log(chalk.red(msg));
}

/**
 * 产生一个新行
 * @param n 
 */
export function newLines (n?: number) {
    if ( n && n > 0 && n < 10 ) {
        return console.log('\n'.repeat(n));
    }

    return console.log('\n');
}

