function save(pie) {
    const button = document.getElementById("fav-btn");
    const favorite = document.getElementById("favorite");
    let pieTmp = pie.toString().replace(/-/g, " ")
    let string = pieTmp.charAt(0).toUpperCase() + pieTmp.slice(1);

    if (localStorage.getItem(pie) === null) {
        localStorage.setItem(pie, true);
        button.innerText = "Saved";
        favorite.innerHTML = `${string} is one of your favorite pies`;
    } else {
        let val = localStorage.getItem(pie);
        if (val === 'true') {
            localStorage.setItem(pie, false);
            button.innerText = "Save as Favorite";
            favorite.innerHTML = "";
        } else {
            localStorage.setItem(pie, true);
            button.innerText = "Saved";
            favorite.innerHTML = `${string} is one of your favorite pies`;
        }
    }

}

window.onload = function () {
    let favorite = document.getElementById("favorite");
    let btn = document.getElementById("fav-btn");
    let pie = document.querySelector("button[data-fav]").getAttribute('data-fav');

    if (window.localStorage) {
        let storage = window.localStorage;
        let val = storage.getItem(pie);
        if (val === "true") {
            let tmp = pie.toString().replace(/-/g, " ")
            let string = tmp.charAt(0).toUpperCase() + tmp.slice(1);
            favorite.innerHTML = `${string} is one of your favorite pies`;
            btn.innerText = "Saved"
        } else {
            favorite.innerHTML = "";
            btn.innerText = "Save as Favorites"
        }
    }
}