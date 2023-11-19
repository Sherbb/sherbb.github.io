export interface ProjectData
{
    //* Titles are used as keys
    title: string;
    subtitle: string;
    year: string;
    description: string;
    // * Media [0] is used as hero and should be 1:2~. the rest are used in gallery view
    media: string[];
    link?: string;
    linkText?: string;
}
export const ProjectDatabase: readonly ProjectData[] = [
    {
        title: "Gridform",
        subtitle: "Game I made....",
        year: "22",
        description: "Describe the game hereLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus rutrum neque. Fusce placerat viverra justo ac condimentum. Etiam dapibus ut lacus sed pulvinar. Ut eu velit sed diam tempus viverra. Sed condimentum, eros eu tincidunt elementum, mi justo tincidunt ante, in egestas turpis nunc in purus. Sed tincidunt elit in placerat laoreet. Aliquam sed interdum lectus, non posuere turpis. Donec ultricies eleifend ullamcorper. Proin pretium dignissim velit vitae tempus. Quisque finibus purus orci, venenatis tristique nibh volutpat sit amet. Morbi ac sem ut sapien hendrerit efficitur non sit amet velit.",
        media: [],
        link: "https://store.steampowered.com/app/1608710/Gridform/",
        linkText: "Check out the game on Steam",
    },

    {
        title: "Temp data1",
        subtitle: "Game I made....",
        year: "22",
        description: "Describe the game here",
        media: []
    },

    {
        title: "Temp data2",
        subtitle: "Game I made....",
        year: "22",
        description: "Describe the game here",
        media: []
    },

    {
        title: "Temp data3",
        subtitle: "Game I made....",
        year: "22",
        description: "Describe the game here",
        media: []
    },

    {
        title: "Temp data4",
        subtitle: "Game I made....",
        year: "22",
        description: "Describe the game here",
        media: []
    },

    {
        title: "Temp data5",
        subtitle: "Game I made....",
        year: "22",
        description: "Describe the game here",
        media: []
    },
];