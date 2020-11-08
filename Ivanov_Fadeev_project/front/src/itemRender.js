function itemRender(id) {
    getItemById(id).then(response => {
        document.querySelector("body > main > div > div:nth-child(2) > div.two-in-row > div:nth-child(1)").innerText = response.title;
        document.querySelector("body > main > div > div:nth-child(2) > div.two-in-row > div:nth-child(2)").innerText = response.price;
    })
}

itemRender(1)