const extraire = document.getElementById('extraire')
const img = document.getElementById("img")
const result = document.getElementById('result')

img.addEventListener('change', async () => {
  
  const worker = await Tesseract.createWorker();
  await worker.loadLanguage("fr");
  await worker.initialize("fr");

  const res = await worker.recognize(img.files[0]);
  const txt = res.data.text;
  result.value = txt
  console.log(txt)

})