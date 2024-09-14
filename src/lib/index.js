import { writable } from "svelte/store";

export let productList = [
    {
        id: 1,
        img: "https://m.media-amazon.com/images/I/6166QQmf+YL._AC_UY1000_.jpg",
        name: "Watch",
        title: "Senior Designer",
        num: 0

    },
    {
        id: 2,
        img: "https://m.media-amazon.com/images/I/41uiXAfCUXL._AC_UY1000_.jpg",
        name: "Floyd Miles",
        title: "Principal Designer",
        num: 0
    },
    {
        id: 3,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2vl9khvXpYrqOLzDxp2Rl1YON6K9ltOCDiA&s",
        name: "Watch",
        title: "Senior Designer",
        num: 0

    },
    {
        id: 4,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3EVYWJnM2j1GhyFmVCPRwudpJIgJE1QfIaQ&s",
        name: "Floyd Miles",
        title: "Principal Designer",
        num: 0
    },
    {
        id: 5,
        img: "https://i.pinimg.com/236x/49/19/bb/4919bbc7a9bce08dad542f4427efe661.jpg",
        name: "Watch",
        title: "Senior Designer",
        num: 0

    },
    {
        id: 6,
        img: "https://i.pinimg.com/236x/2c/fe/ed/2cfeed4adeec18b517ed4351e3ce91e1.jpg",
        name: "Floyd Miles",
        title: "Principal Designer",
        num: 0
    }
];


export let cardList = writable([]);

// let rum = () => {
//     return crypto.randomUUID();
// }


export let addProduct = (product) => {

    cardList.update((items) => {
        return [...items, product];
    });
}


export let plus = (p) => {
    cardList.update((items) => {
        let index = items.findIndex((item) => item.id === p);
        items[index].num++;
        return items;
    });
}

export let ispresent = (p) => {
    let present = 0;
    cardList.subscribe((items) => {
        present = items.findIndex((item) => item.id === p);
    });
    return present===-1?false:true;
} 