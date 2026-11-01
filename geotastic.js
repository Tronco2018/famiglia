const list_path = "img/geotastic/list.txt"


async function get_file_list() {
  const res = await fetch(list_path);

  if (!res.ok) {
    console.log(`Failed with ${res.status}`);
    return "";
  }

  const content = await res.text();
  return content;
}

/*<div class="item">
      <a href="img/la-voce-del-friul/albero-delle-tette.png" target="_blank">
        <img src="img/la-voce-del-friul/albero-delle-tette.png" alt="Albero delle tette">
      </a>
    </div> */

function create_image_container(img_src) {
  let main = document.createElement("div");
  main.classList.add("item");

  let a = document.createElement("a");
  a.href=img_src;
  a.target="_blank";

  let img = document.createElement("img");
  img.src = img_src;
  img.style.height = "100%";
  
  a.appendChild(img);
  main.appendChild(a);
  return main;
}

async function spawn_elements_from_list() {
  let main_container = document.getElementsByClassName("grid")[0];
  if (!main_container) return;
  
  let list = await get_file_list();
  list = list.split("\n");
  console.log(list);
  list.forEach(element => {
    if (element == "\n" || element == "") return;
    let div = create_image_container(`img/geotastic/${element}`);
    main_container.appendChild(div);
  });
}

spawn_elements_from_list();