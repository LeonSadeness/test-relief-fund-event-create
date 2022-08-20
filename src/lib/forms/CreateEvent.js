const defaultData = {
    name: "",
    groups: [4, 2, 1, 6, 10, 8, 7],
};

export const UseFormCreateEvent = function (obj) {
    let defaultObj = { ...obj };
    let form = {
        processing: false,
        error: null,
        data: {
            name: null,
            groups: null,
            ...obj,
        },
        Reset: function () {
            form.data = { ...defaultData, ...defaultObj };
        },
        Post: null
    };
    form.data = { ...form.data, ...defaultData };

    form.Post = function () {
        form.processing = true;
        form.error = null;

        return new Promise((resolve) => {
            setTimeout(() => {
                form.processing = false;
                resolve();
            }, 2000);
        });
    };

    return form;
}