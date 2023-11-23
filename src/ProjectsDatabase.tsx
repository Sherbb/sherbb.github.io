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
    "Other",
]

export const ProjectDatabase: readonly ProjectData[] = [
    {
        category: "Favorites",
        title: "Gridform",
        subtitle: "Published Indie Game",
        year: "22",
        description:
`Inspired by Geometry Wars, Gridform is the largest solo project I’ve worked on. The game contains over 75 uniquely designed levels filled with over-stimulating visuals.

The project was started mid 2020 and took about 2 years of development before being published in July 2022.

Created in Unity. Entirely solo.`,
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
        linkText: "Available on Steam",
    },

    {
        category: "Favorites",
        title: "This Website",
        subtitle: "Custom React App",
        year: "23",
        description: 
`The website you are currently looking at is a custom react app designed and programmed by yours truly.`,
        media: [
            "website/webHero.png",
        ],
        link: "https://github.com/Sherbb/sherbb.github.io",
        linkText: "View the Source",
    },

    {
        category: "Favorites",
        title: "Loot Corp",
        subtitle: "My First Game",
        year: "19",
        description:
`This was the first "substantial" game I ever finished. It was created using Construct 3 in the fall of 2019.

Fight through a complex full of enemies. Cover the screen in blood and search for the exit.`,
        media: [
            "lootcorp/lcHero.png",
            "lootcorp/lcG1.gif",
            "lootcorp/lc1.png",
            "lootcorp/lc2.png",
            "lootcorp/lc3.png",
        ],
        link: "https://sherbb.itch.io/lootcorp",
        linkText: "Available on Itch",
    },

    {
        category: "Favorites",
        title: "The Gauntlet",
        subtitle: "UE4 Game",
        year: "20",
        description:
`A hardcore platformer with the emphasis on fast fps movement. Inspired by the likes of bunnyhop and rocket jump maps, the game consists of 20 challenges with increasing difficulty.

Created for a college project during 2020.`,
        media: [
            "gauntlet/gHero.jpg",
            "gauntlet/g1.gif",
            "gauntlet/g2.png",
            "gauntlet/g3.png",
            "gauntlet/g4.png",
            "gauntlet/g5.png",
        ],
        link: "https://sherbb.itch.io/the-gauntlet",
        linkText: "Available on Itch",
    },

    {
        category: "Spatial",
        title: "Spatial.io",
        subtitle: "Social Gaming Platform",
        year: "22",
        description: "Describe the game here",
        media: [
            "spatial/platformHero.jpg"
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
        subtitle: "Action Roguelike",
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
        subtitle: "Idle Clicker",
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
        title: "Deep Action",
        subtitle: "Gameplay ECS",
        year: "22",
        description: 
`An experimental Object-Oriented ECS I use for creating and prototyping action games. The framework prioritizes using c# as the medium for defining entities rather then a GUI editor like creating Prefabs with Unity.

Currently my "main" side project, and intended to be the foundation for my next large game.`,
        media: [
            "deepAction/daHero.jpg"
        ],
        link: "https://github.com/Sherbb/DeepAction",
        linkText: "View the Source",
    },

    {
        category: "Other",
        title: "Itch Games",
        subtitle: "Small College Projects",
        year: "21",
        description: 
`I went to college for "Computer Game Design" and in that time created many small games for various classes and projects.
        
My favorite solo games are posted to my Itch page.`,
        media: [
            "itch/iHero.jpg",
        ],
        link: "https://sherbb.itch.io/",
        linkText: "sherbb.itch.io",
    },

    {
        category: "Other",
        title: "Music",
        subtitle: "Experimental",
        year: "22",
        description: 
`When I am not busy making games I sometimes create electronic music. Usually it's created for those previously mentioned games.`,
        media: [
            "music/mHero.jpg",
        ],
        link: "https://sherbb.bandcamp.com/",
        linkText: "sherbb.bandcamp.com",
    },
];