let tags = ["tag-1", "tag-2", "tag-3", "tag-4", "tag-5", "tag-6", "tag-7"];
let values = [100, 200, 300, 140, 130, 260, 135];

for (i = 0; i < tags.length; i++) {
  document.getElementById(tags[i]).innerHTML = values[i];
}

const desplegar = (tagNum) => {
  document.getElementById(`tag-${tagNum}`).style.display = "flex";
};

const ocultar = (tagNum) => {
  document.getElementById(`tag-${tagNum}`).style.display = "none";
};

let total = 0;

values.forEach((item) => {
  total += item;
});

document.getElementById("total").innerHTML = `$${total}`;
