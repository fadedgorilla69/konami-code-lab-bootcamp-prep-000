



function init() {
// const alphabet = [65, 66, 67];
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var index = 0;
var placement = 0;
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);
    
    if (placement < 1000){console.log(e.code);
    
    if (code[index] === key) {
      index++;

      if (index === code.length) {
        alert('Hurray!');

        index = 0;
      }
    }} else {
      index = 0;
    }
  });
}
