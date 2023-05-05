const fs = require("fs");
const sharp = require('sharp');

const tilesize = 512;

fs.readdir("./buf/", (err, files) => {
  
  console.log(files)
  
  files.forEach( file => {
    
    let buf = [];
    
    const data = fs.readFileSync(`./buf/${file}`, 'utf8');
    
    const lines = data.split("\n");
    const tmp = {};
    lines.forEach( line => {
      const c = line.split(",");
      if(!tmp[`${c[4]}`]) tmp[`${c[4]}`] = {};
      tmp[`${c[4]}`][`${c[3]}`] = +c[5]/(1024);
    });
    
    for(let i=0; i<tilesize ; i++){
      for(let j=0; j<tilesize ; j++){
        let r=255; let g=255; let b=255; let a=255;
        if(tmp[`${i}`] && tmp[`${i}`][`${j}`]){
          let v = Math.floor(tmp[`${i}`][`${j}`]);
          g = g - v/2;
          b = b - v;
          if(v>255) r = r - (v - 255)/2;
          //if(v<1){b=255;g=0;r=0;}
        }else{
          a = 0;
        }
        
        
        if(r>255) r = 255;
        if(r<0) r = 0;
        if(g>255) g = 255;
        if(g<0) g = 0;
        if(b>255) b = 255;
        if(b<0) b = 0;
        
        buf.push(r);
        buf.push(g);
        buf.push(b);
        buf.push(a);
        
      }
    }
    
    const unit8arr = Uint8Array.from(buf);
    console.log(unit8arr);
    
    sharp(unit8arr,{raw: {width: tilesize , height: tilesize , channels: 4}})
    .toFile(`./docs/img/${file}.png`, (err, info) => {
      if(err){
        console.log(`ERROR ${file} (write file)`);
        console.error(err);
      }
    });
    
  });

});


