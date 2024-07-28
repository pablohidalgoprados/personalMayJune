export interface Year {
    id: string;
    number: number;
    image: string;
    titles: string[];
}

export const years: Year[] = [
    {
        id: '1',
        number: 2016.1,
        image:
            "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
        titles: ["EU LCS Spring 2016 1st",],
    },
    {
        id: '2',
        number: 2016.2,
        image:
            "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
        titles: ["EU LCS Summer 2016 1st",],
    },
    {
        id: '3',
        number: 2016.3,
        image:
            "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
        titles: [],
    },
    {
        id: '4',
        number: 2017,
        image:
            "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
        titles: ["EU LCS Spring 2017 1st", "MSI 2017 2nd", "EU LCS Summer 2017 1st"],
    },
    {
        id: '5',
        number: 2018,
        image:
            "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
        titles: ["EU LCS Spring 2018 2nd"],
    },
    {
        id: '6',
        number: 2019,
        image:
            "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
        titles: ["LEC Spring 2019 1st", "MSI 2019 1st", "LEC Summer 2019 1st", "Worlds 2019 2nd"],
    },
    {
        id: '7',
        number: 2020,
        image:
            "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
        titles: ["LEC Spring 2020 1st", "LEC Summer 2020 1st", "Worlds 2020 Semifinals"],
    },
    {
        id: '8',
        number: 2021,
        image:
            "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
        titles: [],
    },
    {
        id: '9',
        number: 2022,
        image:
            "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
        titles: ["LEC Spring 2022 1st", "MSI 2022 Semifinals", "LEC Summer 2022 2nd"],
    },
    {
        id: '10',
        number: 2023,
        image:
            "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
        titles: ["LEC Winter 2023 1st", "LEC Summer 2023 1st", "LEC Season Finals 2023"],
    },
    {
        id: '11',
        number: 2024,
        image:
            "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
        titles: ["LEC Winter 2024 1st", "LEC Spring 2024 1st", "MSI 2024 Top 4"],
    },
];

export interface Player {
    id: number;
    name: string;
    years: number[];
    image: string;
    titles: string[];
    position: string,
}

export const players: Player[] = [
    {
        "id": 1,
        "name": "Kikis",
        "years": [2016.1, 2016.2],
        "image": `https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/eb/G2_Kikis_2016_Summer.png`,
        "titles": ["LCS Spring 2016 1st", "LCS Summer 2016 1st"],
        "position": "top",
    },
    {
        "id": 2,
        "name": "Trick",
        "years": [2016.1, 2016.2, 2016.3, 2017],
        "image": `https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/ea/G2_Trick_2017_Spring.png`,
        "titles": ["LCS Spring 2016 1st", "LCS Summer 2016 1st", "LCS Spring 2017 1st", "MSI 2017 2nd", "LCS Summer 2017 1st"],
        "position": "jungler",
    },
    {
        "id": 3,
        "name": "Perkz",
        "years": [2016.1, 2016.2, 2016.3, 2017, 2018, 2019, 2020],
        "image": `https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/70/G2_Perkz_2019_WC.png`,
        "titles": ["LCS Spring 2016 1st", "LCS Summer 2016 1st", "LCS Spring 2017 1st", "MSI 2017 2nd", "LCS Summer 2017 1st", "LCS Spring 2018 2nd", "Worlds 2018 Semifinals", "LEC Spring 2019 1st", "MSI 2019 1st", "LEC Summer 2019 1st", "Worlds 2019 2nd", "LEC Spring 2020 1st", "LEC Summer 2020 1st", "Worlds 2020 Semifinals"],
        "position": "mid/adc",
    },
    {
        "id": 4,
        "name": "Emperor",
        "years": [2016.1],
        "image": `https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/ad/G2_Emperor_2016_Spring.png`,
        "titles": ["LCS Spring 2016 1st"],
        "position": "adc",
    },
    {
        "id": 5,
        "name": "Hybrid",
        "years": [2016.1],
        "image": `https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/28/G2_Hybrid_2016_Spring.png`,
        "titles": ["LCS Spring 2016 1st"],
        "position": "support",
    },
    {
        "id": 6,
        "name": "Expect",
        "years": [2016.3, 2017],
        "image": `https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/29/G2_Expect_2017_Spring.png`,
        "titles": ["LCS Spring 2017 1st", "MSI 2017 2nd", "LCS Summer 2017 1st"],
        "position": "top",
    },
    {
        "id": 7,
        "name": "Zven",
        "years": [2016.2, 2016.3, 2017],
        "image": `https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/ad/G2_Zven_2017_Spring.png`,
        "titles": ["LCS Summer 2016 1st", "LCS Spring 2017 1st", "MSI 2017 2nd", "LCS Summer 2017 1st"],
        "position": "adc",
    },
    {
        "id": 8,
        "name": "Mithy",
        "years": [2016.2, 2016.3, 2017],
        "image": `https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/71/G2_Mithy_2017_Spring.png`,
        "titles": ["LCS Summer 2016 1st", "LCS Spring 2017 1st", "MSI 2017 2nd", "LCS Summer 2017 1st"],
        "position": "support",
    },
    {
        "id": 9,
        "name": "Wunder",
        "years": [2018, 2019, 2020, 2021],
        "image": `https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/af/G2_Wunder_2019_WC.png`,
        "titles": ["LCS Spring 2018 2nd", "Worlds 2018 Semifinals", "LEC Spring 2019 1st", "MSI 2019 1st", "LEC Summer 2019 1st", "Worlds 2019 2nd", "LEC Spring 2020 1st", "LEC Summer 2020 1st", "Worlds 2020 Semifinals"],
        "position": "top",
    },
    {
        "id": 10,
        "name": "Jankos",
        "years": [2018, 2019, 2020, 2021, 2022],
        "image": `https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/ed/G2_Jankos_2019_WC.png`,
        "titles": ["LCS Spring 2018 2nd", "Worlds 2018 Semifinals", "LEC Spring 2019 1st", "MSI 2019 1st", "LEC Summer 2019 1st", "Worlds 2019 2nd", "LEC Spring 2020 1st", "LEC Summer 2020 1st", "Worlds 2020 Semifinals"],
        "position": "jungler",
    },
    {
        "id": 11,
        "name": "Hjarnan",
        "years": [2018],
        "image": `https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/67/G2_Hjarnan_2018_Split_2.png`,
        "titles": ["LCS Spring 2018 2nd", "Worlds 2018 Semifinals"],
        "position": "adc",
    },
    {
        "id": 12,
        "name": "Wadid",
        "years": [2018],
        "image": `https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/ea/G2_Wadid_2018_Split_2.png`,
        "titles": ["LCS Spring 2018 2nd", "Worlds 2018 Semifinals"],
        "position": "support",
    },
    {
        "id": 13,
        "name": "Caps",
        "years": [2019, 2020, 2021, 2022, 2023, 2024],
        "image": `https://cdn.shopify.com/s/files/1/0548/8554/8183/files/LoL_Caps_112fdb45-9ffa-4695-bf76-9ef892395f19.jpg?v=1706111314`,
        "titles": ["LEC Spring 2019 1st", "MSI 2019 1st", "LEC Summer 2019 1st", "Worlds 2019 2nd", "LEC Spring 2020 1st", "LEC Summer 2020 1st", "Worlds 2020 Semifinals", "LEC Spring 2022 1st", "MSI 2022 Semifinals", "LEC Summer 2022 2nd", "LEC Winter 2023 1st","LEC Summer 2023 1st", "LEC Grand Finals 2023 1st", "LEC Winter 2024 1st",  "LEC Spring 2024 1st", "MSI 2024 Top 4", "LEC Summer 2024 1st"],
        "position": "mid",
    },
    {
        "id": 14,
        "name": "Mikyx",
        "years": [2019, 2020, 2021, 2023, 2024],
        "image": `https://cdn.shopify.com/s/files/1/0548/8554/8183/files/LoL_Mikyx_89fa3a6a-0e63-4fcd-ad92-da2fe0feabf0.jpg?v=1706111559`,
        "titles": ["LEC Spring 2019 1st", "MSI 2019 1st", "LEC Summer 2019 1st", "Worlds 2019 2nd", "LEC Spring 2020 1st", "LEC Summer 2020 1st", "Worlds 2020 Semifinals", "LEC Winter 2023 1st","LEC Summer 2023 1st", "LEC Grand Finals 2023 1st", "LEC Winter 2024 1st",  "LEC Spring 2024 1st", "MSI 2024 Top 4", "LEC Summer 2024 1st"],
        "position": "support",
    },
    {
        "id": 15,
        "name": "Rekkles",
        "years": [2021],
        "image": `https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/82/G2_Rekkles_2021_Split_1.png`,
        "titles": [],
        "position": "adc",
    },
    {
        "id": 16,
        "name": "BrokenBlade",
        "years": [2022, 2023, 2024],
        "image": `https://cdn.shopify.com/s/files/1/0548/8554/8183/files/LoL_BB.jpg?v=1706111123`,
        "titles": ["LEC Spring 2022 1st", "MSI 2022 Semifinals", "LEC Summer 2022 2nd", "LEC Winter 2023 1st","LEC Summer 2023 1st", "LEC Grand Finals 2023 1st", "LEC Winter 2024 1st",  "LEC Spring 2024 1st", "MSI 2024 Top 4", "LEC Summer 2024 1st"],
        "position": "top",
    },
    {
        "id": 17,
        "name": "Flakked",
        "years": [2022],
        "image": `https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5d/G2_Flakked_2022_Split_2.png`,
        "titles": ["LEC Spring 2022 1st", "MSI 2022 Semifinals", "LEC Summer 2022 2nd"],
        "position": "adc",
    },
    {
        "id": 18,
        "name": "Targamas",
        "years": [2022],
        "image": `https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/51/G2_Targamas_2022_Split_2.png`,
        "titles": ["LEC Spring 2022 1st", "MSI 2022 Semifinals", "LEC Summer 2022 2nd"],
        "position": "support",
    },
    {
        "id": 19,
        "name": "Yike",
        "years": [2023, 2024],
        "image": `https://cdn.shopify.com/s/files/1/0548/8554/8183/files/LoL_Yike_a464f772-b243-49b3-b505-58d121ac7498.jpg?v=1706111635`,
        "titles": ["LEC Winter 2023 1st","LEC Summer 2023 1st", "LEC Grand Finals 2023 1st", "LEC Winter 2024 1st",  "LEC Spring 2024 1st", "MSI 2024 Top 4", "LEC Summer 2024 1st"],
        "position": "jungler",
    },
    {
        "id": 20,
        "name": "Hans Sama",
        "years": [2023, 2024],
        "image": `https://cdn.shopify.com/s/files/1/0548/8554/8183/files/LoL_Hans.jpg?v=1706111480`,
        "titles": ["LEC Winter 2023 1st","LEC Summer 2023 1st", "LEC Grand Finals 2023 1st", "LEC Winter 2024 1st",  "LEC Spring 2024 1st", "MSI 2024 Top 4", "LEC Summer 2024 1st"],
        "position": "adc",
    },
];