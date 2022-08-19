/**
* Входящаяя модель ноды дерева
* @typedef NodeNative
* @type {Object}
* @property {Number} id - идентификатор ноды
* @property {String} name - значение ноды
* @property {Node[]} groups - дочерние ноды
*/

/**
* Рабочаяя модель ноды дерева
* @typedef Node
* @type {Object}
* @property {Number} id - идентификатор ноды
* @property {String} value - значение ноды
* @property {Node} parent - родительская нода
* @property {Node[]} children - дочерние ноды
* @property {Number} level - уровень ноды
*/

/**
 * Преобразует модели нод с бэка в рабочие модели
 * @param {NodeNative[]} options - массив нод для преобразования
 * @returns {Promise<Node[]>} - преобразованные модели нод
 */
export const CreateOptionsAsync = async function (options) {
    let result = await CreateChildrenNodesAsync(options, null, 0);
    return result;
}

/**
 * Преобразует дочерние модели нод с бэка в рабочие модели дочерних нод
 * @param {NodeNative[]} children - дочерние ноды для преобразования
 * @param {NodeNative} parent - родительская нода
 * @param {Number} level - уровень дочерних нод
 * @return {Promise<Node[]>} - преобразованный массив нод 
 */
async function CreateChildrenNodesAsync(children, parent, level) {
    let result = [];

    for (let i = 0; i < children.length; i++) {
        const item = children[i];

        let node = {};
        node.id = item.id;
        node.value = item.name;
        node.parent = parent;
        node.level = level;
        node.children = await CreateChildrenNodesAsync(item.groups, node, level + 1);

        result.push(node);
    }

    return result;
}

/**
 * Осуществляет поиск ноды по идентификатору
 * @param {Number} id - идентификатор ноды
 * @param {Node[]} nodes - массив нод
 * @returns {Promise<Node>|null} - найденная нода или (null)
 */
export const FindNodeAsync = async function (id, nodes) {
    if (nodes?.length > 0) {
        for (let i = 0; i < nodes.length; i++) {
            const item = nodes[i];

            if (item?.id === id) return item;

            let finded = await FindNodeAsync(id, item.children);
            if (finded) return finded;
        }
    }
    return null;
}

/**
 * Осуществляет поиск ноды по идентификатору
 * @param {Number} id - идентификатор ноды
 * @param {Node[]} nodes - массив нод
 * @returns {Node|null} - найденная нода или (null)
 */
export const FindNode = function (id, nodes) {
    if (nodes?.length > 0) {
        for (let i = 0; i < nodes.length; i++) {
            const item = nodes[i];

            if (item?.id === id) return item;

            let finded = FindNode(id, item.children);
            if (finded) return finded;
        }
    }
    return null;
}

/**
* Последовательность ноды от крайней, до корневой
* @typedef Sequence
* @type {Object}
* @property {Number} id - идентификатор последовательности (конкатенация всех ID нод)
* @property {Number[]} ids - идентификаторы ноды впорядке изнутри наружу
* @property {Object[]} values - значения ноды впорядке изнутри наружу
*/

/**
 * Возвращает последовательность ноды от текущей до корневой
 * @param {Node} node - начальная нода
 * @returns {Sequence} - последовательность
 */
export const GetSequence = function (node) {
    let result = {
        id: -1,
        ids: [node.id],
        values: [node.value]
    };

    if (node.level > 0) {
        let parent = node?.parent;
        while (parent) {
            result.ids.push(parent.id);
            result.values.unshift(parent.value);
            parent = parent?.parent;
        }
    }
    result.id = result.ids?.reduce((a,c) => a += c.toString(), '');

    return result;
}

/**
 * Возвращает массив последовательностей из массива идентификаторов
 * @param {Number[]} ids - идентификаторы последовательностей обьединенные в массиве
 * @param {Node[]} nodes - массив нод
 * @returns {Sequence[]} - массив моделей последовательности
 */
export const GetSequences = function (ids, nodes) {
    let result = [];

    for (let i = 0; i < ids.length; i++) {
        const item = ids[i];
        let node = FindNode(item, nodes);
        let sequence = GetSequence(node);
        result.push(sequence);

        if (node.level > 0) {
            i += node.level;
        }
    }

    return result;

}