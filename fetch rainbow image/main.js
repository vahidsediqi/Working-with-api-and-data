console.log('We are fetching a Rainbow');


// async function catchRainbow(){
//   const response = await fetch('rainbow.jpg');
//   const blob = await response.blob();

//   document.getElementById('rainbow').src = URL.createObjectURL(blob);

// }

// catchRainbow().catch (err => {
//     console.log('This is the Error! ' + err);
// })
// ;


const catchRainbow = async () => {
  const data = await fetch('rainbow.jpg');
  const blob = await data.blob();

  document.getElementById('rainbow').src = URL.createObjectURL(blob);

}

catchRainbow().catch(err => {
  console.log('this is the err');
  document.getElementById('err').innerHTML = 'Alert! ' + err;
})