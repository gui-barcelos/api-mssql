'use strict';

module.exports = (router) => {
    var exerciseDbOps = require('../../dao/exercise');

    router.route('/exercise')
        .get(exerciseDbOps.getAll)
        .post(exerciseDbOps.insert);

    router.route('/exercise/:id')
        .put(exerciseDbOps.update)
        .delete(exerciseDbOps.remove);
};