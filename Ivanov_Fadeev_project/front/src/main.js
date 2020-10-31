function showMakeOffer () {
    Offer.addItemsList(CART.getAll());
    Offer.renderItems();
    document.querySelector("#offer-container").style.display = "";
}

function hideCenterWrapper () {
    document.querySelectorAll(".center-wrapper").forEach(e => e.style.display = "none");
}