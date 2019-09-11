/**
 * @desc
 * How to take input from console in nodejs 
 * @Author
 * Nitin Tyagi
 * nitin.1992tyagi@gmail.com
 * 
 */
const EventEmitter = require('events');

function stdinLineByLine() {
  const stdin = new EventEmitter();
  let buff = "";
  process.stdin.on('data', data => {
      buff += data;
      lines = buff.split(/[\r\n|\n]/);
      buff = lines.pop();
      lines.forEach(line => stdin.emit('line', line));
    }).on('end', () => {
      if (buff.length > 0) stdin.emit('line', buff);
    });
  return stdin;
}
const stdin = stdinLineByLine();
stdin.on('line',data => {
  //do what ever you want with input data
  console.log("Input is : "+data);
  if(data == "close") process.exit(0);
});

process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});



























