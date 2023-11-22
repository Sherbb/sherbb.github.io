export interface ProjectData
{
    category: string;
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

export const ProjectCategories: readonly string[] = [
    "Favorites",
    "Spatial",
    "Other",//Last element is default
]

export const ProjectDatabase: readonly ProjectData[] = [
    {
        category: "Favorites",
        title: "Gridform",
        subtitle: "Game I made....",
        year: "22",
        description: "Describe the game hereLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus rutrum neque. Fusce placerat viverra justo ac condimentum. Etiam dapibus ut lacus sed pulvinar. Ut eu velit sed diam tempus viverra. Sed condimentum, eros eu tincidunt elementum, mi justo tincidunt ante, in egestas turpis nunc in purus. Sed tincidunt elit in placerat laoreet. Aliquam sed interdum lectus, non posuere turpis. Donec ultricies eleifend ullamcorper. Proin pretium dignissim velit vitae tempus. Quisque finibus purus orci, venenatis tristique nibh volutpat sit amet. Morbi ac sem ut sapien hendrerit efficitur non sit amet velit.",
        media: [
            "gridform/gfHero.png",
            "gridform/gfGallery1.jpg",
            "gridform/gfGallery2.jpg",
            "gridform/gfGallery3.jpg",
            "gridform/gfGallery4.jpg",
            "gridform/gfGallery5.jpg",
            "gridform/gfGallery6.jpg",
        ],
        link: "https://store.steampowered.com/app/1608710/Gridform/",
        linkText: "Check out the game on Steam",
    },

    {
        category: "Favorites",
        title: "This Website",
        subtitle: "React & Tailwind",
        year: "23",
        description: "Describe the game here",
        media: [
            "website/webHero.png",
        ]
    },

    {
        category: "Favorites",
        title: "Loot Corp",
        subtitle: "My First Game",
        year: "19",
        description: "Describe the game here",
        media: [
            "lootcorp/lcHero.png",
            "lootcorp/lcG1.gif",
            "lootcorp/lc1.png",
            "lootcorp/lc2.png",
            "lootcorp/lc3.png",
        ]
    },

    {
        category: "Spatial",
        title: "Creator Toolkit",
        subtitle: "Unity UGC SDK",
        year: "22",
        description: "Describe the game here",
        media: [
            "spatial/toolkitHero.jpg"
        ]
    },

    {
        category: "Spatial",
        title: "Shooty Shooty",
        subtitle: "",
        year: "23",
        description: "Describe the game here",
        media: [
            "spatial/ssHero.jpg",
            "spatial/ss1.jpg",
            "spatial/ss2.jpg",
            "spatial/ss3.jpg",
            "spatial/ss4.jpg",
            "spatial/ss5.jpg",
            "spatial/ss6.jpg",
            "spatial/ss7.jpg",
            "spatial/ss8.jpg",
        ]
    },

    {
        category: "Spatial",
        title: "Punch Hero",
        subtitle: "",
        year: "23",
        description: "Describe the game here",
        media: [
            "spatial/phHero.jpg",
            "spatial/ph1.jpg",
            "spatial/ph2.jpg",
            "spatial/ph3.jpg",
            "spatial/ph4.jpg",
        ]
    },

    {
        category: "Other",
        title: "Temp data4",
        subtitle: "Game I made....",
        year: "22",
        description: "Describe the game here",
        media: []
    },

    {
        category: "Other",
        title: "Temp data5",
        subtitle: "Game I made....",
        year: "22",
        description: "Describe the game here",
        media: []
    },

    {
        category: "Other",
        title: "Temp data6",
        subtitle: "Game I made....",
        year: "22",
        description: "Describe the game here",
        media: []
    },

    {
        category: "Other",
        title: "Temp data7",
        subtitle: "Game I made....",
        year: "22",
        description: "Describe the game here",
        media: []
    },
];