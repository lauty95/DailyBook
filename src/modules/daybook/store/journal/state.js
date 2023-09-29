export default () => ({
    isLoading: true,
    entries: [
        {
            id: "1", //new Date().getTime(),
            date: new Date().toDateString(),
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, officiis consequatur? Ratione eum provident obcaecati ad molestias assumenda, quo possimus?",
            picture: null,
        },
        {
            id: "2", //new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia magni totam eum hic quod, quam ullam a dolores sint nesciunt quidem unde eligendi vero et facere vitae illum mollitia quis!",
            picture: null,
        },
        {
            id: "3", //new Date().getTime() + 3000,
            date: new Date().toDateString(),
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloribus optio dolores obcaecati adipisci doloremque!",
            picture: null,
        },
    ],
})