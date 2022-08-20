import { CreateOptionsAsync } from "@/lib/TreeUtilities";

const staticData = [
    {
        id: 1,
        name: "Дети",
        groups: [
            {
                id: 2,
                name: "Имеющие редкие заболевания",
                groups: [
                    {
                        id: 3,
                        name: "Spina Bifida",
                        groups: [],
                    },
                    {
                        id: 4,
                        name: "Буллёзный эпидермолиз",
                        groups: [],
                    },
                ],
            },
            {
                id: 5,
                name: "С инвалидностью",
                groups: [],
            },
        ],
    },
    {
        id: 6,
        name: "Профессиональные сообщества",
        groups: [],
    },
    {
        id: 7,
        name: "Взрослые",
        groups: [
            {
                id: 8,
                name: "Имеющие редкие заболевания",
                groups: [
                    {
                        id: 9,
                        name: "Spina Bifida",
                        groups: [],
                    },
                    {
                        id: 10,
                        name: "Буллёзный эпидермолиз",
                        groups: [],
                    },
                ],
            },
            {
                id: 11,
                name: "С инвалидностью",
                groups: [],
            },
        ],
    },
];

export const UseTargetsGroupsOptions = function () {
    let api = {
        processing: false,
        data: [],
        error: null,

        Get: null
    };

    api.Get = function () {
        api.error = null;
        api.processing = true;

        setTimeout(() => {
            CreateOptionsAsync(staticData).then(
                data => {
                    api.data = data;
                    api.processing = false;
                },
                error => {
                    api.error = error.message;
                });
        }, 100);
    };

    return api;
}