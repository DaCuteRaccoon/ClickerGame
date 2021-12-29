var game = {}
game.totalClicks = 0
game.updateClicks = (function(){ game.totalClicks++; if(game.totalClicks != 1){ document.getElementById("clickDisplay").innerText = game.totalClicks + ' clicks'; } else { document.getElementById("clickDisplay").innerText = game.totalClicks + ' click'; }})











// ================================================================ //

// Hexadecimal encode & decode
// https://gist.github.com/themikefuller/608202bde24077990c0539f960b79fe4

function string2hex(text) {
  let encoded = new TextEncoder().encode(text);
  let hex = Array.from(encoded).map(val=>{
    return ('00' + val.toString(16)).slice(-2);
  }).join('');
  return hex;
}

function hex2string(hex) {
  let byteArray = new Uint8Array(hex.match(/.{0,2}/g).map(val=>{
    return parseInt(val,16);
  }));
  return new TextDecoder().decode(byteArray);
}

// ================================================================ //
