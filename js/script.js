function getIconsDb() {
  return [
    {
      name: "cat",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "crow",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dog",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dove",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dragon",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "horse",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "hippo",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "fish",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "carrot",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "apple-alt",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "lemon",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "pepper-hot",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "user-astronaut",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-graduate",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-ninja",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-secret",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
  ];
}

function getColors() {
  return ["blue", "orange", "purple", "rose", "red"];
}
function init() {
  // 0. Preleviamo dati
  const icons = getIconsDb();
  const colors = getColors();
  const types = getTypes(icons);

  // 1. Coloriamo le icone
  const coloredIcons = colorIcons(icons, types, colors);
  // 2. Mostriamo gli elementi nella pagina
  print(coloredIcons);
  // 3. Aggiungiamo le opizioni al select
  addOptions(types);
  // 4. Mettiamo listener al select con la funzione per filtrare le icone
  const select = $('#type');
  select.change(function(event) {
    const currentType = $(this).val();
    if (types.includes(currentType)) {
        // filtriamo l'array in base al tipo
        const filteredIcons = filterArray(coloredIcons, currentType);
        console.log(filteredIcons);
        // mostrare i valori filtrati
        print(filteredIcons);
    } else {
        print(coloredIcons);
    }
  });
}
function print(array) {
  const container = $(".icons");
  container.html('');
  array.forEach((item) => {
    let color;
    
    const iconHtml = `
        <div>
            <i class="${item.family} ${item.prefix}${item.name}" style="color:${item.color}"></i>
            <div class="title">${item.name.toUpperCase()}</div>
        </div>
    `;
    container.append(iconHtml);
  });
}
function getTypes(array) {
  const types = [];
  array.forEach((item) => {
      if(!types.includes(item.type)) {
          types.push(item.type);
      }
  });
  return types;
}
function colorIcons(array, types, colors) {
    const newArray = array.map(item => {
        const itemClone = {...item};
        // 1. preleviamo tipologia di icona
        const iconType = itemClone.type;
        // 2. preleviamo index di questa tipologia all'interno dell'array
        const indexType = types.indexOf(iconType);
        // 3. aggiungiamo color all'itemClone in base all'indice di tipologia
        const color = colors[indexType];
        itemClone.color = color;
        return itemClone;
    });
    return newArray;
}

function addOptions(types) {
    const select = $('#type');
    types.forEach(item => {
        const optionHtml = `
            <option value="${item}">${item}</option>
        `;
        select.append(optionHtml);
    });
}
function filterArray(array, key) {
    const filteredArray = array.filter(item => {
        if(item.type == key) {
            return item;
        }
    });
    return filteredArray;
}
$(init);
