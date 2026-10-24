const imgs_path = "img/geotastic/"


async function getFilesInDirectory(url) {
  try {
    const response = await fetch(url);
    const htmlText = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
    
    const links = Array.from(doc.querySelectorAll('a'));
    
    const fileList = links
      .map(a => a.getAttribute('href'))
      .filter(href => href && !href.startsWith('?') && !href.endsWith('/')); // Filtra cartelle e parametri

    console.log(fileList);
    return fileList;
  } catch (err) {
    console.error('Errore nel recupero della directory:', err);
  }
}

getFilesInDirectory(imgs_path)