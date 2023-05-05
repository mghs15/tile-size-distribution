const fs = require("fs");
const readline = require('readline');

const rs = fs.createReadStream('./_points.csv');
const rl = readline.createInterface({input: rs});


// config
const tz = 13; // target zoom level


rl.on('line', (line) => {

  if(!line || line=="") return;
  
  const csv = line.split(",");
  const z = +csv[0];
  const x = +csv[1];
  const y = +csv[2];
  const size = +csv[3];
  
  if(z != tz ) return;
  
  const d = 9;
  const mz = tz - d; // 2^9 = 512
  const mx = x >> d;
  const my = y >> d;
  
  const px = (x - (mx << d)); // = mx * Math.pow(2,d)
  const py = (y - (my << d)); // = my * Math.pow(2,d)
  
  const r = `${z},${x},${y},${px},${py},${size}\n`;
  fs.appendFile(`./buf/${mz}-${mx}-${my}-tile.csv`, r, (err) => {
    if(err) throw err;
  });
  
});

rl.on('close', () => {
  console.log("END");
});