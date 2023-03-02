export default function(name, event) {
    let coms = [...event.target.parentNode.children];
    // console.log(coms)
    let colorList = [
        { componentName: "wexin", backgroundColor: "bisque" },
        { componentName: "pay", backgroundColor: "aqua" },
        { componentName: "site", backgroundColor: "blueviolet" },
    ];

    coms.forEach((item) => {
        if (item.getAttribute("titlename") == name) {


            let key = colorList.find((i) => {
                return i["componentName"] == name
            })

            let color = key["backgroundColor"];

            item.style.backgroundColor = color;
        } else {
            item.style.backgroundColor = "white";
        }
    });
}