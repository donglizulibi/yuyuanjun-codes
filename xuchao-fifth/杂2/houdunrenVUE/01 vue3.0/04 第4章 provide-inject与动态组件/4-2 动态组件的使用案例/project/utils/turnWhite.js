export default function(name, event) {
    let coms = [...event.target.parentNode.children];
    let colorList = [
        { componentName: "wexin", backgroundColor: "bisque" },
        { componentName: "pay", backgroundColor: "aqua" },
        { componentName: "site", backgroundColor: "blueviolet" },
    ];

    coms.forEach((item) => {
        if (item.getAttribute("titlename") == name) {
            let color = colorList.find((i) => i["componentName"] == name)[
                "backgroundColor"
            ];
            item.style.backgroundColor = color;
        } else {
            item.style.backgroundColor = "white";
        }
    });
}