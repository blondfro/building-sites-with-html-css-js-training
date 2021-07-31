window.addEventListener("DOMContentLoaded", function (e) {

    let locationBox = document.querySelector("#location");

    let location = {
        latitude: "unknown",
        longitude: "unknown"
    };

    window.navigator.geolocation.getCurrentPosition(

        function (position) {
            location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
            locationBox.value = JSON.stringify(location);
        },

        function (error) {
            locationBox.value = JSON.stringify(location);
        }

    );

    const order = localStorage.getItem("order");

    if (order) {
        const pieOrder = JSON.parse(order);
        const pie = document.querySelector(".pie");

        const orderInput = document.querySelector("#pie-order");

        const title = pie.querySelector(".title");
        const price = pie.querySelector(".price");
        const desc = pie.querySelector(".desc");
        const img = pie.querySelector("img");

        title.innerText = pieOrder.title;
        price.innerText = pieOrder.price;
        desc.innerText = pieOrder.desc;

        img.setAttribute("src", `images/${pieOrder.id}.png`);
        img.setAttribute("alt", pieOrder.title);

        orderInput.value = order;
    }
});